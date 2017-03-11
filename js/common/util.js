/**
 * Created by Administrator on 2017/3/2.
 */
define([],{
    //获取指定的查询字符串
    getQueryString: function (key) {
        var search=location.search.slice(1);//去掉字符串首字母？号
        var searchArr=search.split('&');//将字符串以&切割为数组
        var tempArr=null;
        var searchObj={};
        for(var i=0;i<searchArr.length;i++){
            tempArr=searchArr[i].split('=');//数组中的每一个字符串以=号切割为新的数组
            searchObj[tempArr[0]]=tempArr[1];
        }
        return arguments.length?searchObj[key]:searchObj;
    }
})
