/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
    $('form').on('submit', function () {
            console.log(11);
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),   //只要是表单里面设置了name属性然后提交的内容都可以通过jq的方法获取得到，并且是字符串的格式"tc_name=1324555&tc_pass=142424435"。
            success: function (result) {    //表单提交发ajax会得到一个返回结果，这个结果是对象{"code":200,"msg":"登录成功!","result":{"tc_name":"123456","tc_avatar":""},"time":1488103040}
                if(result.code===200){
                    $.cookie('userInfor',JSON.stringify(result.result),{path:'/'});     //在这里我们把得到的结果里面的result属性转成字符串的形式存在我们自己定义的cookie：userInfor里面，并且定义路径为当前域名，这样才能在该域名下任何路径都能找到这个cookie。

                    //console.log(document.cookie)
                    //VM2238:1 PHPSESSID=m1u9m65ur0554bdno8dj3f0m01; userInfor=%7B%22tc_name%22%3A%22123456%22%2C%22tc_avatar%22%3A%22%22%7D为什么我console的时候是这种情况？？？
                    location.href='/';
                }
            }

        });
        return false;
    })
})