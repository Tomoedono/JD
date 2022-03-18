var date = new Date();
var desc = document.querySelector(".countdown-desc-tip");
var hours = date.getHours();
countdown_desc();
setInterval(countdown_desc, 1000);

function countdown_desc() {
    var h = parseInt(hours)
    if (hours % 2 == 0) {
        desc.innerHTML = h + ":00";
    } else {
        desc.innerHTML = h - 1 + ":00";
    }
}