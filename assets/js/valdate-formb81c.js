$(document).ready(function () {
    // Generate a simple captcha

    $('#datePicker45t')
            .datepicker({
                format: 'dd-mm-yyyy',
                endDate: '+0d'
            })
            .on('changeDate', function (e) {
                // Revalidate the date field
                $('#form-signup').formValidation('revalidateField', 'user_date_of_birth');
            });
    $('#datePicker90')
            .datepicker({
                dateFormat: 'dd-mm-yy',
                endDate: '+0d',
            })
            .on('change', function (e) {
                // Revalidate the date field
                $('#form-letter').formValidation('revalidateField', 'user_date_of_birth');
            });

    $('#form-signup').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'first name is required'
                    }
                }
            },
            user_title: {
                validators: {
                    notEmpty: {
                        message: 'title is required'
                    }
                }
            },
            country_code: {
                validators: {
                    notEmpty: {
                        message: 'Please select country code'
                    }
                }
            },
            user_profession: {
                validators: {
                    notEmpty: {
                        message: 'Please select profession'
                    }
                }
            },
            user_area_of_interest: {
                validators: {
                    notEmpty: {
                        message: 'Please select area of interest'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'last name is required'
                    }
                }
            },
            email: {
                threshold: 4,
                validators: {
                    notEmpty: {
                        message: 'email address is required'
                    },
                    emailAddress: {
                        message: ' '
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Please enter a valid email address'
                    },
                    remote: {
                        url: JS_BASE_URL + 'user/checkemail',
                        type: 'POST',
                        message: 'email already exist',
                    }
                }
            },
            user_password: {
                validators: {
                    notEmpty: {
                        message: 'password is required'
                    },
                    different: {
                        field: 'user_name',
                        message: 'password cannot be the same as username'
                    },
                }
            },
            confirm_password: {
                validators: {
                    notEmpty: {
                        message: 'confirm password is required'
                    },
                    identical: {
                        field: 'user_password',
                        message: 'password and its confirm are not the same'
                    }
                }
            },
            phone_number: {
                validators: {
                    notEmpty: {
                        message: 'phone number is required'
                    },
                    integer: {
                        message: 'not a valid number'
                    },
                    regexp: {
                        regexp: '^[0-9]{10}$',
                        message: 'Please enter a valid mobile number'
                    }

                }
            },
            user_date_of_birth: {
                validators: {
                    notEmpty: {
                        message: 'date of birth is required'
                    },
                    date: {
                        format: 'DD-MM-YYYY',
                        message: 'date of birth is not valid'
                    }
                }


            }
        }
    }).on('success.form.fv', function (e) {
        // Prevent form submission
        e.preventDefault();
        $('#user_register_submit').removeAttr('disabled');
        $('#user_register_submit').removeClass('disabled');

        var $form = $(e.target),
                fv = $form.data('formValidation');

        $.ajax({
            url: JS_BASE_URL + 'user/signup',
            type: 'POST',
            data: $("#form-signup").serialize(),
            success: function (result) {
                console.log(result);
                if (result == 'success') {
                    window.location.reload();
                } else if (result == 'captcha_error') {
                    alert("Please validate your captcha first");
                } else {
                    alert("Please try again");
                    window.location.reload();
                }
            }
        });
    });

    $('#form-letter').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        row: {
            selector: 'li',
            valid: 'has-success',
            invalid: 'has-error'
        },
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'first name is required'
                    }
                }
            },
            user_title: {
                validators: {
                    notEmpty: {
                        message: 'title is required'
                    }
                }
            },
            country_code: {
                validators: {
                    notEmpty: {
                        message: 'Please select country code'
                    }
                }
            },
            user_profession: {
                validators: {
                    notEmpty: {
                        message: 'Please select profession'
                    }
                }
            },
            user_area_of_interest: {
                validators: {
                    notEmpty: {
                        message: 'Please select area of interest'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'last name is required'
                    }
                }
            },
            email: {
                threshold: 4,
                validators: {
                    notEmpty: {
                        message: 'email address is required'
                    },
                    emailAddress: {
                        message: ' '
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Please enter a valid email address'
                    },
                    remote: {
                        url: JS_BASE_URL + 'user/checkemail',
                        type: 'POST',
                        message: 'email already exist',
                    }
                }
            },
            user_password: {
                validators: {
                    notEmpty: {
                        message: 'password is required'
                    },
                    different: {
                        field: 'user_name',
                        message: 'password cannot be the same as username'
                    },
                }
            },
            confirm_password: {
                validators: {
                    notEmpty: {
                        message: 'confirm password is required'
                    },
                    identical: {
                        field: 'user_password',
                        message: 'password and its confirm are not the same'
                    }
                }
            },
            phone_number: {
                validators: {
                    notEmpty: {
                        message: 'phone number is required'
                    },
                    integer: {
                        message: 'not a valid number'
                    },
                    regexp: {
                        regexp: '^[0-9]{10}$',
                        message: 'Please enter a valid mobile number'
                    },
                }
            },
            user_date_of_birth: {
                validators: {
                    notEmpty: {
                        message: 'date of birth is required'
                    },
                    date: {
                        format: 'DD-MM-YYYY',
                        message: 'date of birth is not valid'
                    }
                }


            }
        }
    }).on('success.form.fv', function (e) {
        // Prevent form submission
        e.preventDefault();
        var responseCapt = grecaptcha.getResponse();
        if (responseCapt.length == 0) {
            alert('Please validate captcha first.');
            $('#form-letter').formValidation('revalidateField', 'user_date_of_birth');
        } else {
            $('#user_register_submit').removeAttr('disabled');
            $('#user_register_submit').removeClass('disabled');
            var $form = $(e.target),
                    fv = $form.data('formValidation');
            $.ajax({
                url: JS_BASE_URL + 'user/signup',
                type: 'POST',
                data: $("#form-letter").serialize(),
                beforeSend: function () {
                    $(".loading").css("display", "block");
                },
                success: function (result) {

                    var response = $.parseJSON(result);
                    if (response.code == 'success') {
                        $(".loading").css("display", "none");
                        $("#nw_signup").css("display", "none");
                        $("#nw_success").css("display", "block");
                        alert(response.message);
//                    $('.response_div').show();
//                    $('.response_div').addClass('success');
//                    $('.response_div').html(response.message);
                        window.location.reload();
                    } else if (response.code == 'error') {
                        alert(response.message);
                        $('.loading').hide();
                        $('#form-letter').formValidation('revalidateField', 'user_date_of_birth');
//                    $('.response_div').show();
//                    $('.response_div').addClass('success');
//                    $('.response_div').html(response.message);
                        // window.location.reload();
                    }
                }
            });
        }
    });
    $('#form-update-profile').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        row: {
            selector: 'li',
            valid: 'has-success',
            invalid: 'has-error'
        },
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'first name is required'
                    }
                }
            },
            country_code: {
                validators: {
                    notEmpty: {
                        message: 'Please select country code'
                    }
                }
            },
            user_profession: {
                validators: {
                    notEmpty: {
                        message: 'Please select profession'
                    }
                }
            },
            user_area_of_interest: {
                validators: {
                    notEmpty: {
                        message: 'Please select area of interest'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                        message: 'last name is required'
                    }
                }
            },
            email: {
                threshold: 4,
                validators: {
                    emailAddress: {
                        message: ' '
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Please enter a valid email address'
                    }

                }
            },
            phone_number: {
                validators: {
                    notEmpty: {
                        message: 'phone number is required'
                    },
                    integer: {
                        message: 'not valid number'
                    },
                    regexp: {
                        regexp: '^[0-9]{10}$',
                        message: 'Please enter a valid mobile number'
                    },
                }
            },
            user_date_of_birth: {
                validators: {
                    notEmpty: {
                        message: 'date of birth is required'
                    }
                }


            },

        }
    }).on('success.form.fv', function (e) {
        // Prevent form submission
        e.preventDefault();
        var responseCapt = grecaptcha.getResponse();
        console.log(responseCapt);
        if (responseCapt.length == 0) {
            alert('Please validate captcha first.');
            $('#form-update-profile').formValidation('revalidateField', 'user_date_of_birth');
        } else {

            var $form = $(e.target),
                    fv = $form.data('formValidation');
            $(".loading").css("display", "block");
            $('#user_register_submit').removeAttr('disabled');
            $('#user_register_submit').removeClass('disabled');
            $.ajax({
                url: JS_BASE_URL + 'user/updateprofile',
                type: 'POST',
                data: $("#form-update-profile").serialize(),
                success: function (result) {
                    if (result == 'success') {
                        $(".loading").css("display", "none");
                        $("#nw_update").css("display", "none");
                        $("#nw_profile_success").css("display", "block");
                        window.location.reload();
                    } else {
                        alert("Please try again");
                        //window.location.reload();
                    }
                }
            });
        }
    });

});

$(document).ready(function () {
    $(".loginClose").click(function () {
        $(".email_address").val("");
        $(".password").val("");
        $(".alert-success").css({"display": "none"});
        $(".alert-danger").css({"display": "none"});

    });
    $(".email_address").focusout(function () {
        var email = $(".email_address").val();
        if (email == '') {
            $(".email_address").focus();
            $(".alert-danger").css({"display": "block"});
            $(".alert-danger").html("Email cannot be blank.!");
            $(".email_address").css({"border": "1px solid #a94442"});
            $(".email_address").css({"background": "#f2dede"});
            $("label[for='email_address']").css({"color": "#a94442"});
        }
    });
    $(".email_address").keypress(function () {
        $(".alert-danger").css({"display": "none"});
        $(".email_address").css({"border": "1px solid #A9A9A9"});
        $(".email_address").css({"background": "#ffffff"});
        $("label[for='email_address']").css({"color": "#333 !important"});

    });
    $(".password").focusout(function () {
        var password = $(".password").val();
        if (password == '') {
            $(".alert-danger").css({"display": "block"});
            $(".alert-danger").html("Password cannot be blank.!");
            $(".password").css({"border": "1px solid #a94442"});
            $(".password").css({"background": "#f2dede"});
            $("label[for='password']").css({"color": "#a94442"});
        }
    });
    $(".password").keypress(function () {
        $(".alert-danger").css({"display": "none"});
        $(".password").css({"border": "1px solid #A9A9A9"});
        $(".password").css({"background": "#ffffff"});
        $("label[for='password']").css({"color": "#333 !important"});
    });
    $('#login_form').on("submit", function (e) {
        var email = $(".email_address").val();
        var password = $(".password").val();
        if (password == '') {
            $(".alert-danger").css({"display": "block"});
            $(".alert-danger").html("Password cannot be blank.!");
            $(".password").css({"border": "1px solid #a94442"});
            $(".password").css({"background": "#f2dede"});
            $("label[for='password']").css({"color": "#a94442"});
            return false;

        }
        if (email == '') {
            $(".email_address").focus();
            $(".alert-danger").css({"display": "block"});
            $(".alert-danger").html("Email cannot be blank.!");
            $(".email_address").css({"border": "1px solid #a94442"});
            $(".email_address").css({"background": "#f2dede"});
            $("label[for='email_address']").css({"color": "#a94442"});
            return false;

        }
        if (email == '') {
            if (password == '') {
                $(".email_address").focus();
                $(".alert-danger").css({"display": "block"});
                $(".alert-danger").html("Email and Password cannot be blank.!");
                $(".email_address").css({"border": "1px solid #a94442"});
                $(".email_address").css({"background": "#f2dede"});
                $("label[for='email_address']").css({"color": "#a94442"});
            }
            return false;
        }
        e.preventDefault();
        if (window.location.protocol != "https:") {
            var NEW_BASE = JS_BASE_URL.replace("https:", "http:");
        } else {
            var NEW_BASE = JS_BASE_URL;
        }
        $.ajax({
            url: NEW_BASE + 'user/login',
            type: 'POST',
            crossDomain: true,
            cache: false,
            data: $("#login_form").serialize(),
            beforeSend: function (result) {
                $(".loading").css({"display": "inline-block"});
            },
            success: function (result) {
                if (result == 'success') {
                    window.location.reload();
                } else {
                    if (result == 'verify') {
                        location.href = JS_BASE_URL;
                    } else {
                        $("#message").css({"display": "block"});
                        $("#message").html(result);
                    }
                }
                $(".loading").css({"display": "none"});
            }
        });
    });

    $(".email_add").keypress(function () {
        $(".alert-danger").css({"display": "none"});
        $(".email_add").css({"border": "1px solid #A9A9A9"});
        $(".email_add").css({"background": "#ffffff"});
        $("label[for='email_add']").css({"color": "#333 !important"});

    });
});
function forgotPassword() {
    var email = $("#email_add").val();
    $("#Forgot .alert-danger").html('').hide();
    var regexp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email == '') {
        $(".email_add").focus();
        $(".alert-danger").css({"display": "block"});
        $(".alert-danger").html("Email cannot be blank.!");
        $(".email_add").css({"border": "1px solid #a94442"});
        $(".email_add").css({"background": "#f2dede"});
        $("label[for='email_add']").css({"color": "#a94442"});
        return false;

    }
    if (!regexp.test(email)) {
        $(".email_add").focus();
        $(".alert-danger").css({"display": "block"});
        $(".alert-danger").html("Please enter a valid email address");
        $(".email_add").css({"border": "1px solid #a94442"});
        $(".email_add").css({"background": "#f2dede"});
        $("label[for='email_add']").css({"color": "#a94442"});
        return false;
    }
    if (grecaptcha.getResponse(recaptcha_forgot_password_widget).length == 0) {
        // $(".email_add").focus();
        $(".alert-danger").css({"display": "block"});
        $(".alert-danger").html("Please validate captcha first..");
        // $(".email_add").css({"border": "1px solid #a94442"});
        //  $(".email_add").css({"background": "#f2dede"});
        // $("label[for='email_add']").css({"color": "#a94442"});
        return false;
    } else {

        $.ajax({
            url: JS_BASE_URL + 'user/forgot',
            type: 'POST',
            data: {email: email, captcha: grecaptcha.getResponse(recaptcha_forgot_password_widget)},
            beforeSend: function () {
                $(".loading").css({"display": "inline-block"});
            },
            success: function (result){
				console.log(result);
				//result = JSON.stringyfy(responseJson);
               // var result = jQuery.parseJSON(responseJson);
               // var result = JSON.stringyfy(responseJson);
                console.log(result.message);
                $("#message_forgot").css({"display": "block"});
                $("#message_forgot").html(result.message);
                $(".loading").css({"display": "none"});
                grecaptcha.reset();
                if (result.response) {
					return true;
                } else {
                    return false;
                }


            }
        });

    }
}
