/**
 * Created by Administrator on 2017/2/25.
 */

define(['nprogress','jquery','template'], function (nprogress,$,template) {
    nprogress.done();
    $.ajax({
        url:'/v6/category',
        type:'get',
        success: function (data) {
            if(data.code==200){
                var html=template('courseCategory-tpl',{list:data.result});
                $('#categoryForm').html(html);
            }
        }
    })
})
