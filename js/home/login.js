/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
    $('form').on('submit', function () {
            console.log(11);
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),   //ֻҪ�Ǳ�����������name����Ȼ���ύ�����ݶ�����ͨ��jq�ķ�����ȡ�õ����������ַ����ĸ�ʽ"tc_name=1324555&tc_pass=142424435"��
            success: function (result) {    //���ύ��ajax��õ�һ�����ؽ�����������Ƕ���{"code":200,"msg":"��¼�ɹ�!","result":{"tc_name":"123456","tc_avatar":""},"time":1488103040}
                if(result.code===200){
                    $.cookie('userInfor',JSON.stringify(result.result),{path:'/'});     //���������ǰѵõ��Ľ�������result����ת���ַ�������ʽ���������Լ������cookie��userInfor���棬���Ҷ���·��Ϊ��ǰ���������������ڸ��������κ�·�������ҵ����cookie��

                    //console.log(document.cookie)
                    //VM2238:1 PHPSESSID=m1u9m65ur0554bdno8dj3f0m01; userInfor=%7B%22tc_name%22%3A%22123456%22%2C%22tc_avatar%22%3A%22%22%7DΪʲô��console��ʱ�����������������
                    location.href='/';
                }
            }

        });
        return false;
    })
})