/**
 * Created by Administrator on 2017/2/25.
 */

define(['nprogress','jquery','template','util'], function (nprogress,$,template,util) {
    nprogress.done();
    var cgId=util.getQueryString('cg_id');
    if(cgId){
        $.ajax({
            url:'/v6/category/edit',
            type:'get',
            data:{cg_id:cgId},
            success: function (data) {
                if(data.code==200){
                    var html=template('categoryAdd-tpl',data.result)
                    $('.course-category').html(html)
                }
            }
        })
    }else{
        var html=template('categoryAdd-tpl',{});
        $('.course-category').html(html)
    }
    $('#categoryAddFormParent').on('submit','.form-horizontal', function () {
        $.ajax({
            type:'post',
            url:'/v6/category/'+(cgId?'modify':'add'),
            data:$(this).serialize()+(cgId?'&cg_id='+cgId:''),
            success: function (data) {
                if(data.code==200){
                    location.href='/html/course/category.html';
                }
            }
        })
        return false;
    })
})
