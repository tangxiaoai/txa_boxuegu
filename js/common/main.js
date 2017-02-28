/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        jquery:'/lib/jquery/jquery.min',
        bootstrap:'/lib/bootstrap/js/bootstrap.min',
        userList:'/js/user/list',
        userProfile:'/js/user/profile',
        teacherAdd:'/js/teacher/add',
        teacherList:'/js/teacher/list',
        homeLogin:'/js/home/login',
        homeRepass:'/js/home/repass',
        homeSettings:'/js/home/settings',
        courseAdd:'/js/course/add',
        courseAddstep1:'/js/course/add_step1',
        courseAddstep2:'/js/course/add_step2',
        courseAddstep3:'/js/course/add_step3',
        courseCategory:'/js/course/category',
        courseCategoryAdd:'/js/course/category_add',
        courseList:'/js/course/list',
        courseTopic:'/js/course/topic',
        common:'/js/common/common',
        jqueryCookie:'/lib/jquery-cookie/jquery.cookie'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});

//所有的页面都需要这两个js，先加载它们
require(['jquery','bootstrap','common']);
//这里获取页面的pathname,然后对应的加载js

(function (window) {
    var pathname=window.location.pathname;
    //判断有用户有没有登录信息，登录信息存储在PHPSESSID这个cookie里面
    require(['jquery','jqueryCookie'], function ($,undefined) {
        console.log(111);
        var sessId=$.cookie('PHPSESSID');
        if(sessId && pathname=='/html/home/login.html'){   //判断是不是某个路径也需要用绝对路径
            location.href='/';
        }else if(!sessId && pathname!='/html/home/login.html') {
            location.href='/html/home/login.html';
        }
    });

    switch (pathname){
        case '/html/user/list.html':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
        case '/html/teacher/list.html':
            require(['teacherList']);
            break;
        case '/html/home/login.html':
            require(['homeLogin']);
            break;
    }
})(window)