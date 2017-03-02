/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress'], function (nprogress) {
    nprogress.done();
})
require(['template','jquery'], function (template,$) {
    $.get('/v6/teacher', function (data) {
        if(data.code==200){
            var html=template('teacherList-tpl',{list:data.result});
            $('tbody').html(html);
        }

    });
    $('#teacherList').on('click','#teacherView', function () {
        console.log(111);
        $.get('/v6/teacher/view',{tc_id:$(this).parent().attr('dataid')}, function (date) {
            if(date.code==200){
                console.log($(this).parent());
               var html=template('teacher-view-tpl',date.result);
                $('.modal-dialog').html(html);

            }
        })
    })
})
