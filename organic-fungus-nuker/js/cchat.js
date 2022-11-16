!function(e){"function" == typeof define && define.amd?define(["jquery"], e):"object" == typeof exports?module.exports = e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0 === e.indexOf('"') && (e = e.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try{return e = decodeURIComponent(e.replace(c, " ")), u.json?JSON.parse(e):e} catch (e){}}function r(n, o){var i = u.raw?n:t(n); return e.isFunction(o)?o(i):i}var c = /\+/g, u = e.cookie = function(t, c, s){if (arguments.length > 1 && !e.isFunction(c)){if ("number" == typeof (s = e.extend({}, u.defaults, s)).expires){var d = s.expires, f = s.expires = new Date; f.setMilliseconds(f.getMilliseconds() + 864e5 * d)}return document.cookie = [n(t), "=", i(c), s.expires?"; expires=" + s.expires.toUTCString():"", s.path?"; path=" + s.path:"", s.domain?"; domain=" + s.domain:"", s.secure?"; secure":""].join("")}for (var a = t?void 0:{}, p = document.cookie?document.cookie.split("; "):[], l = 0, m = p.length; l < m; l++){var x = p[l].split("="), g = o(x.shift()), j = x.join("="); if (t === g){a = r(j, c); break}t || void 0 === (j = r(j)) || (a[g] = j)}return a}; u.defaults = {}, e.removeCookie = function(n, o){return e.cookie(n, "", e.extend({}, o, {expires: - 1})), !e.cookie(n)}});
// Bot Detection
        !function(e, n){var t = {tests:{}, isBot:!0, isUser:!1}, o = [], s = {}, r = function(e, n, t){e.addEventListener?e.addEventListener(n, t, !1):e.attachEvent && e.attachEvent("on" + n, t)}, i = function(n, t, o){if (e.removeEventListener)n.removeEventListener && n.removeEventListener(t, o, !1); else{var s = "on" + t; n.detachEvent && (void 0 === n[s] && (n[s] = null), elem.detachEvent(s, o))}}; function c(){var e, n = 0; for (e in s)s.hasOwnProperty(e) && (t.tests[e] = !0 === s[e], !0 === s[e] && n++); if (t.isUser = n > 0, t.isBot = !t.isUser, t.isUser)for (; o.length; ){o.shift().call(t)}}n.botDetect = t, s.scroll = function(){var t = function(){s.scroll = !0, c(), i(n, "scroll", t), i(e, "scroll", t)}; r(e, "scroll", t), r(n, "scroll", t)}, s.mouse = function(){var e = function(){s.mouse = !0, c(), i(n, "mousemove", e)}; r(n, "mousemove", e)}, s.key = function(){var e = function(){s.key = !0, c(), i(n, "keyUp", e)}; r(n, "keyUp", e)}, t.onUser = function(e){t.isUser?e.call(t):o.push(e)}, function(){for (var e in s)s.hasOwnProperty(e) && s[e].call(); c()}()}(document, window);
        
function makeFileList() {
    var input = document.getElementById("my-file");
    var ul = document.getElementById("lswa-file-return");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (var i = 0; i < input.files.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = input.files[i].name;
        ul.appendChild(li);
    }
    if (!ul.hasChildNodes()) {
        var li = document.createElement("li");
        li.innerHTML = '';
        ul.appendChild(li);
    }
}

botDetect.onUser(function () {
    var cookie_name = 'lswa-chat';
    var domainError = 0;
    var acc = 0;
    var currentHour = 0;
    var startHour = 0;
    var endHour = 0;
    var cchat_enabled = 0;
    var default_message = '';
    var thisLocation = 'https://c-chat.live/e';
    var inTime = false;
    var thisDomainURL = window.location.protocol + '//' + window.location.hostname;
    function CheckDomain(domURL) {
        $.ajax({
            type: 'GET',
            async: false,
            url: thisLocation + '/scripts/checkDomain.php?d=' + domURL,
            success: function (data) {
                var data = $.parseJSON(data);
                domainError = data['error'];
                acc = data['account'];
                currentHour = data['currentHour'];
                startHour = data['startHour'];
                endHour = data['endHour'];
                default_message = data['default_message'];
                inTime = data['inTime'];
                cchat_enabled = data['enabled'];
            }
        });
    }
    CheckDomain(thisDomainURL);
    function SetCookieChatID() {
        $.ajax({
            type: 'GET',
            async: false,
            url: thisLocation + '/scripts/setCookie.php',
            success: function (data) {
                var cookies = jQuery.cookie();
                jQuery.cookie(cookie_name, null);
                jQuery.cookie(cookie_name, data + '/0/0');
            }
        });
    }

    if (domainError == 0 && cchat_enabled == 1) {

        function getIDChat() {
            return jQuery.cookie(cookie_name).split('/')[0];
        }

        function getStatusChat() {
            return jQuery.cookie(cookie_name).split('/')[1];
        }

        if (!jQuery.cookie(cookie_name)) {
            SetCookieChatID();
        } else {
            if (getStatusChat() == 0) {
                SetCookieChatID();
            }
        }

        var firstTime = true;
        function scrollReplies() {
            var elem = $('#lswa-chat-content');
            if (firstTime == true) {
                elem.animate({scrollTop: elem[0].scrollHeight}, 500);
                firstTime = false;
            } else {
                if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight()) {
                    elem.animate({scrollTop: elem[0].scrollHeight}, 500);
                }
            }
        }

        if (inTime) {
            var ticketID = getIDChat();
            window.setInterval(function () {
                var ticketID = getIDChat();
                var sts = getStatusChat();
                if (sts == 1) {
                    if ($('#lswa-chat-box').is(":visible")) {
                        getReplies(ticketID);
                        scrollReplies();
                    }
                }
            }, 3000);
        }



        var sourceFile = thisLocation + "/templates/chat.php?chat=" + ticketID + "&d=" + thisDomainURL;
        if (!inTime) {
            sourceFile += "&email=yes";
        }
        $("head").append('<link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet">');
        $("head").append("<link href='" + thisLocation + "/css/lswa-default.css' type='text/css' rel='stylesheet' />");
        $.get(sourceFile, function (data) {
            $('body').append(data);
            if (getStatusChat() == 0) {
                $('#lswa-chat-content').html('<div class="msg-lswa loadingMessages repliComm" data-reply="0"><div class="msg-lswa-not-my-msg">' + default_message + '</div></div>');
            }
        });
        
        var OpenChatButton = '#lswa-open-chat-box';
        var CloseChatButton = '#lswa-close-chat-box';
        var LSWAChat = '#lswa-chat-box';
        
        $('body').on('click', OpenChatButton, function () {
            $(this).hide();
            $(LSWAChat).show(500);
        });
        
        $('body').on('click', CloseChatButton, function () {
            $(LSWAChat).hide(500);
            $(OpenChatButton).show(500);
        });
        
        $("body").on("submit", "#userInfo-form", function (event) {
            var ticketID = getIDChat();
            var ticketStatus = getStatusChat();
            event.preventDefault();
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: thisLocation + '/scripts/createChat.php?ticket=' + ticketID + '&acc=' + acc + '&d=' + thisDomainURL + '&type=1&p=' + document.URL,
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    $("#lswa-hidden-peopleInfo-form").hide();
                    jQuery.cookie(cookie_name, ticketID + '/1/0');
                },
                complete: function (data) {
                    $("#lswa_form").submit();
                }
            });
            return false;
        });
        
        $("body").on("submit", "#lswa_form", function (event) {
            var ticketID = getIDChat();
            var ticketStatus = getStatusChat();
            event.preventDefault();
            var formData = new FormData($(this)[0]);
            if (ticketStatus == 0) {
                $('#lswa-hidden-peopleInfo-form').show();
                return false;
            } else {
                $.ajax({
                    url: thisLocation + '/scripts/reply.php?ticket=' + ticketID + '&acc=' + acc + '&d=' + thisDomainURL + '&type=1&p=' + document.URL,
                    type: 'POST',
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        $('#lswa-file-return').text('');
                        $('#my-file').val('');
                        $('.lswa-textarea').val("");
                        jQuery.cookie(cookie_name, ticketID + '/1/0');
                    }
                });
            }
            return false;
        });
        
        $("body").on("submit", "#lswa_form_email", function (event) {
            var ticketID = getIDChat();
            event.preventDefault();
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: thisLocation + '/scripts/createChat.php?ticket=' + ticketID + '&acc=' + acc + '&d=' + thisDomainURL + '&type=2&p=' + document.URL,
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    SetCookieChatID();
                    $('#lswa-file-return').text('');
                    $('.lswa-input').val("");
                    $('#email_form_return').html('<div class="lswa-s25"></div><span class="lswa-bold lswa-f18">Thank you for getting in touch!</span><br/><br/>We appreciate you contacting. One of our colleagues will get back to you shortly.<br/><br/><span class="lswa-bold lswa-f18">Have a great day!</span>');
                    $('#lswa_form_email').hide();
                }
            });
            return false;
        });
        
        $('body').on('click', '.lswa-feedLabel', function () {
            $('.lswa-feedLabel').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        });
        
        $('body').on('click', '#feedOk', function () {
            $('#lswa-feed-value').val(1);
        });
        
        $('body').on('click', '#feedBad', function () {
            $('#lswa-feed-value').val(0);
        });
        
        $('body').on('click', '#feed_Ok', function () {
            $('#lswafeed-value').val(1);
        });
        
        $('body').on('click', '#feed_Bad', function () {
            $('#lswafeed-value').val(0);
        });
        
        $('body').on('click', '.lswa-feedbIcon', function () {
            $('#feed_Ok').addClass('active');
            $('#feed_Bad').removeClass('active');
            $('#lswafeed-value').val(1);
            $('#lswa-hidden-feedback-form').show();
            $('#lswa-feedform-form-return').html('');
            $('.lswa-textarea').val('');
            $('#lswaform_review').show();
        });
        
        $('body').on('click', '#lswa-close-feedback-box', function () {
            $('#lswa-hidden-feedback-form').hide();
            return false;
        });
        
        $("body").on("submit", "#lswaform_review", function (event) {
            var ticketID = getIDChat();
            event.preventDefault();
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: thisLocation + '/scripts/feedback.php?t=' + ticketID,
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    $('#lswa-feedform-form-return').html(data);
                    $('#lswaform_review').hide();
                }
            });
            return false;
        });
        
        $("body").on("submit", "#saveChat-form", function (event) {
            event.preventDefault();
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: thisLocation + '/scripts/saveChat.php',
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    $('#lswa-saveChat-form-return').html(data);
                    $('.lswa-input').each(function () {
                        $(this).val('');
                    });
                }
            });
            return false;
        });
        
        $("body").on("submit", "#openChat-form", function (event) {
            event.preventDefault();
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: thisLocation + '/scripts/openChat.php',
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data == 1) {
                        $('#lswa-openChat-form-return').html();
                        $('#lswa-openChat-form-return').html("<p class='text-center lswa-bold lswa-red'>Chat id must be a number !</p>");
                    } else if (data == 2) {
                        $('#lswa-openChat-form-return').html();
                        $('#lswa-openChat-form-return').html("<p class='text-center lswa-bold lswa-red'>Invalid chat id !</p>");
                    } else if (data == 3) {
                        $('#lswa-openChat-form-return').html();
                        $('#lswa-openChat-form-return').html("<p class='text-center lswa-bold lswa-red'>Invalid pin code !</p>");
                    } else if (data == 4) {
                        $('#lswa-openChat-form-return').html();
                        $('#lswa-openChat-form-return').html("<p class='text-center lswa-bold lswa-red'>Wrong pin code !</p>");
                    } else if (data == 5) {
                        $('#lswa-openChat-form-return').html();
                        $('#lswa-openChat-form-return').html("<p class='text-center lswa-bold lswa-red'>This chat was closed !</p>");
                    } else {
                        $('#lswa-hidden-openChat-form').hide();
                        jQuery.cookie('lswa-chat', data + '/1/0');
                        $('.lswa-input').each(function () {
                            $(this).val('');
                        });
                    }
                }
            });
            return false;
        });
        
        $('body').on('click', '#lswa-show-options', function () {

            var optionsBox = $('.lswa-options-box');
            if (optionsBox.hasClass('visible')) {
                optionsBox.removeClass('visible');
            } else {
                optionsBox.addClass('visible');
            }

        });
        
        $('body').on('click', '#saveThisChat', function () {
            $('#lswa-hidden-saveChat-form').show();
            $('#lswa-hidden-openChat-form').hide();
            $('.lswa-options-box').removeClass('visible');
            return false;
        });
        
        $('body').on('click', '#lswa-close-saveChat-box', function () {
            $('#lswa-hidden-saveChat-form').hide();
            return false;
        });
        
        $('body').on('click', '#openAnotherChat', function () {
            $('#lswa-hidden-openChat-form').show();
            $('#lswa-hidden-saveChat-form').hide();
            $('.lswa-options-box').removeClass('visible');
            return false;
        });
        
        $('body').on('click', '#lswa-close-openChat-box', function () {
            $('#lswa-hidden-openChat-form').hide();
            return false;
        });
        
        function getReplies(ticketID) {
            var el = '#lswa-chat-content';
            var lastReply = $(el + ' .repliComm').last().attr('data-reply');
            $.ajax({
                type: 'GET',
                url: thisLocation + '/scripts/getReplies.php?d=' + thisDomainURL + '&ticket=' + ticketID + '&last_reply=' + lastReply,
                success: function (data) {
                    if (data) {
                        $('#lswa-chat-content .loadingMessages').hide();
                        $('#lswa-chat-content').append(data);
                        if ($('#lswa-chat-content')[0].scrollHeight - $('#lswa-chat-content').scrollTop() == $('#lswa-chat-content').outerHeight()) {
                            setTimeout(function () {
                                scrollReplies();
                            }, 500);
                        }
                    }
                }
            });
        }

        function online_user() {
            $.ajax({
                type: 'GET',
                url: thisLocation + '/scripts/user_online.php?acc=' + acc,
                success: function (data) {
                }
            });
        }

        $('body').on('keyup', '.lswa-textarea', function () {
            checkTyping();
        });
        var lastTyping = 0;
        function checkTyping() {
            var differenceTime = $.now() - lastTyping;
            if (differenceTime >= 7000) {
                $.ajax({
                    type: 'GET',
                    url: thisLocation + '/scripts/typing.php?ticket=' + ticketID,
                    success: function (data) {
                    }
                });
                lastTyping = $.now();
            }
        }
        online_user();
        window.setInterval(function () {
            online_user();
        }, 10000);
    }
});