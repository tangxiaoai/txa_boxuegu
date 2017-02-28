/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
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

    })
    //设置左侧用户登录信息的展示
    var userInfo=null;
    userInfo=JSON.parse($.cookie('userInfor'));
    console.log(12345);
    try{
        userInfo=JSON.parse($.cookie('userInfor'));
        console.log(12345);
    }catch(e){
        userInfo={};
        console.log(1234)
    }
    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'weimingming');
    $('.aside .avatar>img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');
})
