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
    //查看讲师的个人详细信息
    $('#teacherList').on('click','#teacherView', function () {
        $.get('/v6/teacher/view',{tc_id:$(this).parent().attr('dataid')}, function (date) {
            if(date.code==200){
                console.log($(this).parent());
               var html=template('teacher-view-tpl',date.result);
                $('.modal-dialog').html(html);

            }
        })
    });
    //修改讲师状态:开启或者注销
    $('#teacherList').on('click','#teacherStatus', function () {
        //    $.post('/v6/teacher/handle',{tc_id:$(this).parent().attr('dataid'),tc_status:$(this).text()=="注销"?0:1}, function (data) {
        //        if(data.code==200){
        //            $(this).text(data.result.tc_status==0?'注销':'开启');
        //        }
        //    })
        //})
        var self=$(this);
    $.post('/v6/teacher/handle',{tc_id:$(this).parent().attr('dataid'),tc_status:$(this).parent().attr('dataStatus')}, function (data) {
        if(data.code==200){
            console.log($(this));
            self.html(data.result.tc_status==0?'注销':'开启');
            self.parent().attr('dataStatus',data.result.tc_status);
        }
    })
})

})
