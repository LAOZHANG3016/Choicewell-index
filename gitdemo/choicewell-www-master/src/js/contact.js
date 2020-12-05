requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min',
        common: 'common',
        validate: 'jquery.validate.min'
    },
    shim: {
        validate: {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'common', 'validate'], function ($, Common) {
    $(function () {
        var repeatClick = false;
        $.validator.setDefaults({
            submitHandler: function () {
                if (repeatClick) {
                    console.log("请勿重复点击")
                    return    
                }
                repeatClick = true;
                var lastName = $('#lastName').val();
                var firstName = $('#firstName').val();
                var companyName = $('#companyName').val();
                var email = $('#email').val();
                var phoneNum = $('#phoneNum').val();
                Common.asynGetdata('sendEmail', JSON.stringify({
                    firstName: firstName, // 姓
                    lastName: lastName, // 名
                    companyName: companyName, // 公司名字
                    email: email, // 邮件
                    phoneNum: phoneNum, // 电话号
                })).then(res => {
                    $('#lastName').val('')
                    $('#firstName').val('')
                    $('#companyName').val('')
                    $('#email').val('')
                    $('#phoneNum').val('')
                    $('.register-form-success').addClass('show')
                    setTimeout(() => {
                        $('.register-form-success').removeClass('show')
                    }, 2000)
                }).finally(res => {
                    repeatClick = false
                })
            }
        })
        $("#regForm").validate({
            rules: {
                firstName: { required: true },
                lastName: { required: true },
                email: { required: true, email: true },
                companyName: { required: true },
                phoneNum: { required: true, minlength: 11, maxlength: 11, number: true, digits: true },
            },
            messages: {
                firstName: '请输入姓氏',
                lastName: "请输入名字",
                email: "请输入电子邮件地址",
                phoneNum: {
                    required: "请输入电话号"
                },
                companyName: "请输入公司名字"
            }
        }); 
    })
});
