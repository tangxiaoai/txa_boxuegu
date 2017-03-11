/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress','jquery','template','util'], function (nprogress,$,template,util) {
    nprogress.done();
    var csid=util.getQueryString('cs_id');
    $.ajax({
        type:'get',
        url:'/v6/course/basic',
        data:{cs_id:csid},
        success: function (data) {
            if(data.code==200){
                var html=template('addStep1-tpl',data.result);
                $('#courseAddstep1').append(html);
                console.log(data.result.category.childs);
            }
        }
    })
})
