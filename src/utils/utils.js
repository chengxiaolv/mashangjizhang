// 获取cookie    getCookie(name)
// 设置cookie    setCookie(c_name, value, expiredays)
// 删除cookie    delCookie(name)
// 获得当前年月(yyyy-mm)    getNowMonth()
// 获得当前年月日(yyyy-mm-dd)    getNowDate()
// 获得当前年月日时分秒(yyyy-mm-dd hh:mm:ss)    getTime()


var util = {
    /**
     * 获取cookie、
     * @param {传入的cookie名} name 
     */
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    /**
     * 设置cookie,增加到vue实例方便全局调用
     * @param {cookie名} c_name 
     * @param {cookie值} value 
     * @param {设置时间戳} expiredays 
     */
    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },
    /**
     * 删除cookie
     * name  传入cookie的名字即可
     */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    /**
     * 获得当前年月格式时间  yyyy-mm
     */
    getNowMonth() { // 
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        let currentdate = year + seperator1 + month; // yyyy-mm
        return currentdate;
    },
    /**
     * 获得当前年月格式时间 yyyy-mm-dd
     */
    getNowDate() { // 
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate; // yyyy-mm-dd
        return currentdate;
    },
    /**
     * 获得当前年月格式时间  yyyy-mm-dd hh:mm:ss
     */
    getTime() {
        var date = new Date();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (hour >= 0 && hour <= 9) {
            hour = "0" + hour;
        }
        if (min >= 0 && min <= 9) {
            min = "0" + min;
        }
        if (sec >= 0 && sec <= 9) {
            sec = "0" + sec;
        }
        var time = date.getFullYear() + "-" + month + "-" + strDate + " " + " " + hour + ":" + min + ":" + sec;
        return time;
    }
}

export default util;