var APP = {
    "PageIsSignup": false
};

(function ($) {
    APP.notify = function (message) {
        alert(message);
    };

    // render markdown
    APP.renderMarkdown = function () {
        var $pre = $('.markdown').find('pre > code').parent();
        $pre.addClass("prettyprint");
        //prettyPrint();
    };
})(jQuery);


(function ($) {
    $(function () {
        /* main code was here */

    });
})(jQuery);