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
        common:'/js/common/common'
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

    }
})(window)