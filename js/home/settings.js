/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress'], function (nprogress) {
    nprogress.done();
})
require(['jquery','template','region'], function ($,template,undefined) {
    //�༭��������
    $.get('/v6/teacher/profile', function (data) {
        if(data.code==200){

            $('.settings').html(template('teacherProfile-tpl',data.result));

            //������������  !!!һ��Ҫ���������д����Ⱦ����ĺ���  �Ż�ʹ����Ч
            $('.hometown').region({
                url:'/lib/region/region.json',
            })
        }
    });

    //�������ύ�¼�
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