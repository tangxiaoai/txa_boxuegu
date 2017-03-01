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
        jqueryCookie:'/lib/jquery-cookie/jquery.cookie',
        nprogress:'/lib/nprogress/nprogress',
        index:'/js/index'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
require(['jquery'], function ($) {
    $(document).on('ajaxStart', function () {
        console.log(123456333333);
        $('.overlay').show()
    }).on('ajaxStop', function () {
        $('.overlay').hide();
    })
})
require(['nprogress'], function (nprogress) {
    nprogress.start();
})
//���е�ҳ�涼��Ҫ������js���ȼ�������
require(['jquery','bootstrap','common']);
//�����ȡҳ���pathname,Ȼ���Ӧ�ļ���js

(function (window) {
    var pathname=window.location.pathname;
    //�ж����û���û�е�¼��Ϣ����¼��Ϣ�洢��PHPSESSID���cookie����
    require(['jquery','jqueryCookie'], function ($,undefined) {
        console.log(111);
        var sessId=$.cookie('PHPSESSID');
        if(sessId && pathname=='/html/home/login.html'){   //�ж��ǲ���ĳ��·��Ҳ��Ҫ�þ���·��
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
        case '/':
            require(['index']);
            break;
        case'/html/course/add.html':
            require(['courseAdd']);
            break;
        case'/html/course/add_step1.html':
            require(['CourseAddstep1']);
            break;
        case'/html/course/add_step2.html':
            require(['CourseAddstep2']);
            break;
        case'/html/course/add_step3.html':
            require(['CourseAddstep3']);
            break;
        case'/html/course/category.html':
            require(['courseCategory']);
            break;
        case'/html/course/category_add.html':
            require(['courseCategoryAdd']);
            break;
        case'/html/course/list.html':
            require(['courseList']);
            break;
        case'/html/course/topic.html':
            require(['courseTopic']);
            break;
        case '/html/home/repass.html':
            require(['homeRepass']);
            break;
        case '/html/home/setting.html':
            require(['homeSetting']);
            break;
        case '/html/teacher/add.html':
            require(['teacherAdd']);
            break;

    }
})(window)