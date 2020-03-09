function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function randRange(data) {
    var newTime = data[Math.floor(data.length * Math.random())];
    return newTime;
}

function lastpack(numpack) {
    var minNumPack = 2; // Минимальное количество упаковок
    var lastClass = $('.lastpack'); // Объект
    var numpackCookie = getCookie("lastpack");
    var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

    if (numpackCookie == undefined) {
        document.cookie = numpack;
    } else {
        var numpack = numpackCookie;
    }

    if (numpack > minNumPack) {
        numpack--;
        document.cookie = "lastpack=" + numpack;
        lastClass.text(numpack);
    } else {
        lastClass.text(minNumPack);
    }
    clearInterval(timer);
    timer = setInterval(lastpack, randRange(timeArray), numpack);
}

var timer = setInterval(lastpack, 0, 18);