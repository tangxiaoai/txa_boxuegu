/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress'], function (nprogress) {
    nprogress.done();
})
require(['jquery','util','template'], function ($,util,template) {
    var tcId=util.getQueryString('tc_id')   //因为在list页面里面当点击编辑页面发生跳转时我将tc_id添加到了href的后面传了过来，所以在这里可以获取得到
    //如果tcId不为空，则说明是编辑页面，那么执行编辑页面的ajax请求,
    if(tcId){
        $.ajax({
            type:'get',
            url:'/v6/teacher/edit',
            data:{tc_id:tcId},
            success: function (data) {
                if(data.code==200){
                    var html=template('teacher-add-tpl',data.result);
                    $('#teacherAdd').html(html);
                }
            }
        })
    }else{  //如果没有tcId则创建空的表单
       var html=template('teacher-add-tpl',{});
        $('#teacherAdd').html(html);
    }
    //在修改或者添加完毕之后统一发送
    $('#teacherAdd').on('submit','#teacherAddForm',function () {
        $.ajax({
            type:'post',
            data:$(this).serialize()+(tcId?'&tc_id='+tcId:''),
            url:'/v6/teacher/'+(tcId?'update':'add'),
            success: function (data) {
                if(data.code==200){
                    location.href='/html/teacher/list.html';
                }
            }
        })
        return false;
    })
})
