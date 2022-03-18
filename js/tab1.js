function tab() {
    var btn = $(".top_tab_head_item li");
    var item = document.getElementsByClassName("new_joy_list");
    var i = 0;
    for (i = 0; i < btn.length; i++) {
        btn[i].index = i; //记录索引值
        btn[i].onmouseover = function() {
            for (var j = 0; j < btn.length; j++) {
                btn[j].className = "";
                item[j].style.display = 'none';
            }
            this.className = "new_joy_tit_active";
            item[this.index].style.display = "block";
        };
    }
};
tab();