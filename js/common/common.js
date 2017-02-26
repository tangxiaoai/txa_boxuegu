/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery'], function ($) {
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    })
    $.ajax({
        url:'v6/login',
        type:'post',
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success: function () {
            console.log('³É¹¦')
        },
        errow: function () {
            console.log('Ê§°Ü')
        }
    })
})
