/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress','jquery','template'], function (nprogress,$,template) {
    nprogress.done();
    //����������Ⱦҳ��
    $.get('/v6/course', function (data) {
        if(data.code==200){
            console.log(123);
            var html=template('courseList-tpl',{list:data.result});
            $('#courseList').append(html);
        }
    })

});

