var hour = document.querySelector(".timmer__unit--hour")
var minute = document.querySelector(".timmer__unit--minute")
var second = document.querySelector(".timmer__unit--second")
var inputTime = +new Date("2023-9-26 14:00:00")
countdown()
setInterval(countdown, 1000);

function countdown() {
    var nowTime = +new Date();
    var times = (inputTime - nowTime) / 1000;
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;

    
}