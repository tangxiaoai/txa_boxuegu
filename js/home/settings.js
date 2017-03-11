/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress'], function (nprogress) {
    nprogress.done();
})
require(['jquery','template','region'], function ($,template,undefined) {
    //编辑个人资料
    $.get('/v6/teacher/profile', function (data) {
        if(data.code==200){

            $('.settings').html(template('teacherProfile-tpl',data.result));

            //配置三级联动  !!!一定要把这个配置写在渲染完表单的后面  才会使其生效
            $('.hometown').region({
                url:'/lib/region/region.json',
            })
        }
    });

    //监听表单提交事件
    $('#teacherProfileParent').on('submit','.form-horizontal', function () {
        var hometown=$('.hometown select').map(function () {
            return $(this).find('option:selected').text();
        }).toArray().join('|');
        $.ajax({
            url:'/v6/teacher/modify',
            type:'post',
            data:$('.form-horizontal').serialize()+'&tc_hometown='+hometown,
            success: function (data) {
                if(data.code==200){
                    location.reload();
                }
            }
        })
        return false;
    })
})