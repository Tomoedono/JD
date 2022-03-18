window.onload = function() {
    var obtn = $(".feed-tab li");
    var oElec = document.getElementsByClassName("feed-item");
    var i = 0;
    for (i = 0; i < obtn.length; i++) {
        obtn[i].index = i; //记录索引值
        obtn[i].onclick = function() {
            for (var j = 0; j < obtn.length; j++) {
                obtn[j].className = "";
                oElec[j].style.display = 'none';
            }
            this.className = "feed-tab-active";
            oElec[this.index].style.display = "block";
        };
    }
};