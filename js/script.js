$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

$(function() {
    // countdownStart
    var storageCountdownReset = "countdownResetAirbag",
        storageCountdownTime = "countdownTimeAirbag",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
        localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
        if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
            var countdownTime = (new Date).getTime() + 24e5;
            localStorage.setItem(storageCountdownTime, countdownTime);
            localStorage.setItem(storageCountdownReset, nowDateTime);
        }
    }

    if (localStorage.getItem(storageCountdownTime)) {
        var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
        countdownTime = (new Date).getTime() + 24e5;
    }

    $(".countdown").countdown(countdownTime, function(s) {
        $(this).html(s.strftime('' +
            '<div class="countdown__item hour">%H</div>' +
            '<div class="countdown__item minute">%M</div>' +
            '<div class="countdown__item second">%S</div>'
        ));
    }).on('update.countdown', function(e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function(e) {
        $('.countdown').countdown('stop');
    });
    // countdownEnd
})