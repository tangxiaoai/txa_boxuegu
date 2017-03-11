/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress','jquery'], function (nprogress,$) {
    nprogress.done();
    $('.form-horizontal').on('submit', function () {
        $.ajax({
            type:'post',
            url:'/v6/course/create',
            data:$(this).serialize(),
            success: function (data) {
                if(data.code==200){
                    location.href='/html/course/add_step1.html?cs_id='+data.result['cs_id'];
                }
            }
        })
        return false;
    })
})
