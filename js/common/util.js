/**
 * Created by Administrator on 2017/3/2.
 */
define([],{
    //��ȡָ���Ĳ�ѯ�ַ���
    getQueryString: function (key) {
        var search=location.search.slice(1);//ȥ���ַ�������ĸ����
        var searchArr=search.split('&');//���ַ�����&�и�Ϊ����
        var tempArr=null;
        var searchObj={};
        for(var i=0;i<searchArr.length;i++){
            tempArr=searchArr[i].split('=');//�����е�ÿһ���ַ�����=���и�Ϊ�µ�����
            searchObj[tempArr[0]]=tempArr[1];
        }
        return arguments.length?searchObj[key]:searchObj;
    }
})
