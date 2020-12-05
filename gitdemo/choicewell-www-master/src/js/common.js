define(['jquery', 'promise'], function ($) {
    /**
     * cookie操作
     */
    var getCookie = function (name, value, options) {
        if (typeof value != 'undefined') { // name and value given, set cookie
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }
            var path = options.path ? '; path=' + options.path : '';
            var domain = options.domain ? '; domain=' + options.domain : '';
            var s = [cookie, expires, path, domain, secure].join('');
            var secure = options.secure ? '; secure' : '';
            var c = [name, '=', encodeURIComponent(value)].join('');
            var cookie = [c, expires, path, domain, secure].join('')
            document.cookie = cookie;
        } else { // only name given, get cookie
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    };

    // 请求数据
    var asynGetdata = function(router, params, type) {
        var mainUrl = "http://47.93.63.169:8080/api/";
        var promise = new Promise(function (resolve, reject) {
            $.ajax({
                type: type ? type : "post",
                url: mainUrl + router,
                dataType: "json",
                data: params,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                success: function (res) {
                    resolve(res);
                },
                error: function (err) {
                    console.log(err);
                    reject(err)
                }
            });
        });
        return promise;
    }

    return {
        getCookie: getCookie,
        asynGetdata: asynGetdata
    }
})