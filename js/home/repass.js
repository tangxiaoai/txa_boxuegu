/**
 * Created by Administrator on 2017/2/25.
 */

define(['nprogress','jquery'], function (nprogress,$) {
    nprogress.done();
    $('#formRepass').on('submit', function () {
        $.post('/v6/teacher/repass',$(this).serialize(), function (data) {
            if(data.code==200){
                console.log(111);
                $('#logOut').trigger('click');
            }
        })
        return false;
    })
})
