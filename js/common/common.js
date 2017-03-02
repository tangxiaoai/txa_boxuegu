/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
    //左侧导航下拉列表
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    });

    //让左侧导航a标签的样式随着当前的pathname相对应。即颜色相对别的a标签变深一点
    var pathname=window.location.pathname;
    $('.navs a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents('ul').show();//因为选择器需要被“”包起来，而属性选择器的值也需要被“”包起来，所以要把双引号放在单引号里面

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

    try{
        userInfo=JSON.parse($.cookie('userInfor'));

    }catch(e){
        userInfo={};

    }
    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'weimingming');
    $('.aside .avatar>img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');
})
