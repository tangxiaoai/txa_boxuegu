/**
 * Created by Administrator on 2017/2/25.
 */

require(['nprogress'], function (nprogress) {
    nprogress.done();
})
require(['jquery'], function ($) {
    $.ajax({
        type:'post',
        url:'/v6/teacher/add',
        data:{}
    })
})
