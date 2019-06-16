$(document).ready(function () {
    $("a[rel^='fancybox-button']").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        beforeShow: function () {
            var is_https = this.type == 'iframe' ? 'http' : '';
            var is_img_video = this.type == 'iframe' ? 'video' : 'picture';
            var ori_title = $(this.element).attr("data-title");
            var page_url = $(this.element).attr("data-url");
            this.title = '<span style="display:inline-block; width:60%">' + this.title + '</span>';
            this.title += '<span style="float:right;">';

            var fb_arg = "'" + page_url + "','" + ori_title + "','','Share " + is_img_video + " from Narendramodi.in'";
            this.title += '<a target="_blank" href="javascript:void(0);" onclick="facebook_share(' + fb_arg + ')" class="share_fb"></a>';
            this.title += '<a target="_blank" href="http://twitter.com/home?status=' + ori_title + '+' + page_url + '&url= http://www.narendramodi.in/&source=tweetbutton&via=narendramodi" class="share_twt"></a>';
            this.title += '</span>';
        },
        helpers: {
            media: {},
            title: {type: 'inside'},
            buttons: {}

        }
    });
    $("a[rel^='fancybox-screensaver']").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        beforeShow: function () {
            var is_https = this.type == 'iframe' ? 'http' : '';
            var is_img_video = this.type == 'iframe' ? 'video' : 'picture';
            var ori_title = $(this.element).attr("data-title");
            var page_url = $(this.element).attr("data-url");
            this.title = '<span style="display:inline-block; width:60%">' + this.title + '</span>';
            this.title += '<span style="float:right;">';

            var fb_arg = "'" + page_url + "','" + ori_title + "','','Share " + is_img_video + " from Narendramodi.in'";
            this.title += '<a target="_blank" href="javascript:void(0);" onclick="facebook_share(' + fb_arg + ')" class="share_fb"></a>';
            this.title += '<a target="_blank" href="http://twitter.com/home?status=' + ori_title + '+' + page_url + '&url= http://www.narendramodi.in/&source=tweetbutton&via=narendramodi" class="share_twt"></a>';
            this.title += '</span>';
        },
        helpers: {
            media: {},
            title: {type: 'inside'},
            buttons: {}

        }
    });
    $("a[rel^='fancybox-highresphoto']").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        beforeShow: function () {
            var is_https = this.type == 'iframe' ? 'http' : '';
            var is_img_video = this.type == 'iframe' ? 'video' : 'picture';
            var ori_title = $(this.element).attr("data-title");
            var page_url = $(this.element).attr("data-url");
            this.title = '<span style="display:inline-block; width:60%">' + this.title + '</span>';
            this.title += '<span style="float:right;">';

            var fb_arg = "'" + page_url + "','" + ori_title + "','','Share " + is_img_video + " from Narendramodi.in'";
            this.title += '<a target="_blank" href="javascript:void(0);" onclick="facebook_share(' + fb_arg + ')" class="share_fb"></a>';
            this.title += '<a target="_blank" href="http://twitter.com/home?status=' + ori_title + '+' + page_url + '&url= http://www.narendramodi.in/&source=tweetbutton&via=narendramodi" class="share_twt"></a>';
            this.title += '</span>';
        },
        helpers: {
            media: {},
            title: {type: 'inside'},
            buttons: {}

        }
    });
    $(".langitem").each(function () {

        if ($(this).text() == $("#nmlang").text().trim())
        {

            $(this).addClass("active");
        }
    });
});

function facebook_share(link, description, picture, name) {
    if (name == "") {
        name = "narendramodi.in";
    }
    var hostname = location.hostname;
    if (hostname == "narendramodi.in") {
        hostname = "www.narendramodi.in";
    }
    var redirect_uri = "http://" + hostname;
    //var redirect_uri = "http://nm.fe.local:33/";
//    var app_id="741646939299741"; // local
    var app_id = "398836320185104"; //live   .
    PopupCenter("https://www.facebook.com/dialog/feed?app_id=" + app_id + "&link=" + link + '&name=' + name + '&description=' + description + '&redirect_uri=' + encodeURI(redirect_uri) + '&picture=' + picture);
}
function PopupCenter(pageURL) {
    var w = 600;
    var h = 400;
    var title = '';
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=yes, scrollbars=no, resizable=no, copyhistory=no, width=' + 800 + ', height=' + 650 + ', top=' + top + ', left=' + left)
    return false;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getFbShareCount() {
    $('.fbcount').each(function (i, obj) {
        var url = $(obj).attr('data-url');
        $(obj).attr('href', 'javascript:void(0)')
        jQuery.getJSON('https://graph.facebook.com/?id=' + url + '', function (data) {
            if (data.shares == null) {
                $(obj).html('<i class="fa fa-facebook"></i>' + 0 + ' Shares');
            } else {
                $(obj).html('<i class="fa fa-facebook"></i>' + data.shares + ' Shares');
            }
        });
    });
}


function htmltoimageTweeter(quoteid, url, image_name, count, shareText) {
    $("#search_loader").css("display", "block");
    $.ajax({
        type: "GET",
        url: JS_BASE_URL + "quotes/sharesocialimage",
        data: "quoteid=" + quoteid + '&image_name=' + image_name + '&count=' + count,
        beforeSend: function () {

        },
        success: function (html) {
            if (html != "") {
                $("#tweetShareModal").modal({
                    backdrop: 'static',
                    show: true
                });
                $("#shareTweetImg").attr("src", html);
                $("#tweetText").val(shareText);
                $("#shareButton").unbind().click(function (e) {
                    e.preventDefault();
                    var tweetText = "";
                    if ($("#tweetText").val() == "") {
                        alert("Please enter the twitter text.");
                        return;
                    } else if ($("#tweetText").val().length > 117) {
                        alert('can not exceed more than 117 characters')
                        return;
                    }
                    else {
                        tweetText = $("#tweetText").val();
                        $("#tweetShareHide").click();
//                        html = html.replace("www", "cdn");
                        html = html.replace("stagenew", "cdn");
                        $("#search_loader").css("display", "none");
                        var page_url = JS_BASE_URL + 'embed/sharetweet?img=' + html + '&txt=' + encodeURIComponent(tweetText).replace(/'/g, "%27");
                        var w = 800;
                        var h = 650;
                        var left = (screen.width / 2) - (w / 2);
                        var top = (screen.height / 2) - (h / 2);
                        window.open(page_url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
                        return true;
                    }
                });
            }
        }
    });

}
function htmltoimage(quoteid, url, image_name, count) {
    $("#search_loader").css("display", "block");
    $.ajax({
        type: "GET",
        url: JS_BASE_URL + "quotes/sharesocialimage",
        data: "quoteid=" + quoteid + '&image_name=' + image_name + '&count=' + count,
        beforeSend: function () {
        },
        success: function (html) {
            if (html != "") {
                $("#search_loader").css("display", "none");
                var index = html.lastIndexOf("/") + 1;
                var filename = html.substr(index);
                facebook_share(url, "", html, "Share Quotes From Narendramodi.in")
            }
        }
    });
}
function getAutocomplete(id) {
    $('#' + id).autocomplete({
        source: function (request, response) {
            $.ajax({
                url: JS_BASE_URL + 'article/getsearchdata',
                data: {term: request.term},
                dataType: "json",
                type: 'GET',
                success: function (data) {
                    if (data != null) {
                        response($.map(data, function (item) {
                            return {
                                value: item.value,
                                label: item.label,
                                id: item.id,
                            };
                        }))
                    }
                }
            })
        },
        select: function (event, ui) {


        }
    }).data("ui-autocomplete")._renderItem = function (ul, item) {
        var inner_html = "";
        if (item != "") {
            inner_html = '<div class="image_title">' + item.value + '</div></div></a>';
        } else {
            inner_html = '<div class="image">No Records Find</div>';

        }
        return $("<li></li>")
                .data("ui-autocomplete-item", item)
                .append(inner_html)
                .appendTo(ul);

    };
}

function shareThenAndNow(title, url) {
    $("#search_loader").css("display", "block");
    var page_url = JS_BASE_URL + 'embed/sharetweet?img=' + url + '&txt=' + title;
    var w = 800;
    var h = 650;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open(page_url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
    $("#search_loader").css("display", "none");
}

function shareInfographics(title, url) {
    $("#tweetShareModal").modal({
        backdrop: 'static',
        show: true
    });

    $.fancybox.close();
    if (title != null) {
        title += ". http://nm4.in/1gENiTX";
    } else {
        title += "http://nm4.in/1gENiTX";
    }

    $("#shareTweetImg").attr("src", url);
    $("#tweetText").val(title);
    $("#shareButton").unbind().click(function (e) {
        e.preventDefault();
        var tweetText = "";
        if ($("#tweetText").val() == "") {
            alert("Please enter the twitter text.");
        }
        else if ($("#tweetText").val().length > 117) {
            alert('can not exceed more than 117 characters')
            return;
        } else {
            tweetText = $("#tweetText").val();
            $("#tweetShareHide").click();
//            url = url.replace("www", "cdn");
            url = url.replace("stagenew", "cdn");
            $("#search_loader").css("display", "none");
            var page_url = JS_BASE_URL + 'embed/sharetweet?img=' + url + '&txt=' + encodeURIComponent(tweetText).replace(/'/g, "%27");
            var w = 800;
            var h = 650;
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);
            window.open(page_url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
            return true;
        }
    });
}

function shareStalwartFb(content_id, url, type) {
    $("#search_loader").css("display", "block");
    $.ajax({
        type: "GET",
        url: JS_BASE_URL + "stalwart/sharesocialimage",
        data: "content_id=" + content_id + '&type=' + type,
        beforeSend: function () {
        },
        success: function (html) {
            if (html != "") {
                $("#search_loader").css("display", "none");
                var index = html.lastIndexOf("/") + 1;
                var filename = html.substr(index);
                facebook_share(url, "", html, "Share Stalwarts From Narendramodi.in")
            }
        }
    });
}

function shareStalwartTweeter(content_id, url, type, shareText) {
    $("#search_loader").css("display", "block");
    $.ajax({
        type: "GET",
        url: JS_BASE_URL + "stalwart/sharesocialimage",
        data: "content_id=" + content_id + '&type=' + type,
        beforeSend: function () {

        },
        success: function (html) {
            if (type != 'special') {
                if (html != "") {
                    $("#tweetShareModal").modal({
                        backdrop: 'static',
                        show: true
                    });
                    $("#shareTweetImg").attr("src", html);
                    $("#tweetText").val(shareText);
                    $("#shareButton").unbind().click(function (e) {
                        e.preventDefault();
                        var tweetText = "";
                        if ($("#tweetText").val() == "") {
                            alert("Please enter the twitter text.");
                        } else if ($("#tweetText").val().length > 117) {
                            alert('can not exceed more than 117 characters')
                            return;
                        } else {
                            tweetText = $("#tweetText").val();
                            $("#tweetShareHide").click();
                            html = html.replace("www", "cdn");
                            html = html.replace("stagenew", "cdn");
                            $("#search_loader").css("display", "none");
                            var page_url = JS_BASE_URL + 'embed/sharetweet?img=' + html + '&txt=' + encodeURIComponent(tweetText).replace(/'/g, "%27");
                            var w = 800;
                            var h = 650;
                            var left = (screen.width / 2) - (w / 2);
                            var top = (screen.height / 2) - (h / 2);
                            window.open(page_url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
                            return true;
                        }
                    });
                }
            } else {
                if (html != "") {
                    $("#search_loader").css("display", "none");
//                 html = html.replace("www", "cdn");
                    html = html.replace("stagenew", "cdn");
                    var page_url = JS_BASE_URL + 'embed/sharetweet?img=' + html;
                    var w = 800;
                    var h = 650;
                    var left = (screen.width / 2) - (w / 2);
                    var top = (screen.height / 2) - (h / 2);
                    window.open(page_url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
                    return true;
                }
            }
        }
    });

}

function SignupPopup()
{
    $("#Login").css("display", "none");
    $("#sign_up").css("display", "block");
}
function LoginPopup()
{
    $('#access_searchbox').slideUp(200, 'easeInCirc');
    $("#sign_up").css("display", "none");
    $("#Forgot").css("display", "none");
    $("#Login").css("display", "block");

}
function sb_newsletter()
{
    $("#loginModal").modal('show');
    $("#Login").css("display", "none");
    $("#sign_up").css("display", "block");
}
function setCookie(cname, cvalue, exmin) {
    var date = new Date();
    date.setTime(date.getTime() + (1000 * 60 * exmin));
    var cvalue = escape(cvalue) + "; expires=" + date.toUTCString() + "; path=/";
    document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


$(".infoshare").fancybox({
    prevEffect: true,
    nextEffect: true,
    closeBtn: false,
    beforeShow: function () {
        var is_https = this.type == 'iframe' ? 'http' : '';
        var is_img_video = this.type == 'iframe' ? 'video' : 'picture';
        var twt_title = $(this.element).attr("data-title").replace(/'/g, "%27");
        var special_url = $(this.element).attr("data-url");
        var twt_icon = "";

        if (is_img_video == "picture") {
            special_url = special_url.replace('cdn', 'www');
            var fb_arg = "'" + special_url + "','" + '' + "','" + special_url + "','" + twt_title + "'";
        }
        var twt_arg = "'" + twt_title + "','" + this.href + "'";
        twt_icon = '<a style="cursor:pointer;" onclick="shareInfographics(' + twt_arg + ')" class="share_twt"></a>';
        this.title = '<span style="display:inline-block; width:60%">' + $(this.element).attr("data-title") + '</span>';
        this.title += '<span style="float:right;">';
        this.title += '<a href="javascript:void(0);" onclick="facebook_share(' + fb_arg + ')" class="share_fb"></a>';

        this.title += twt_icon;
        this.title += '</span>';
    },
    helpers: {
        media: {},
        title: {type: 'inside'},
        buttons: {}

    }
});