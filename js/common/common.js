/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery'], function ($) {
    //左侧导航下拉列表
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    });
    //点击退出
    $('#logOut').on('click', function () {
        $.post('v6/logout', function (data) {   //post的另一种用法，请求的路径，请求成功响应之后的回调
            if(data.code==200){
                console.log(data.code);//data是请求成功之后的数据
                console.log(data.msg);
                location.href = '/html/home/login.html';  //location.href的意思就是当前打开的页面
            }
        });
    //

    })





























//    $.ajax({
//        url:'/v6/login',    //是这样的：ajax要请求的
//        type:'post',
//        data:{
//            tc_name:123456,
//            tc_pass:123456
//        },
//        success: function () {
//            console.log('成功')
//        },
//        errow: function () {
//            console.log('失败')
//        }
//    })
//    return false;
})
