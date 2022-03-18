$(function () {
    /*顶部shorcut定位*/
    var province = ['北京', '上海', '天津', '重庆', '河北', '山西', '河南', '辽宁', '吉林', '江苏', '内蒙古', '江苏', '山东', '安徽', '浙江', '福建', '湖北', '湖南', '广东', '广西', '江西', '四川', '海南', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '港澳', '台湾', '钓鱼岛', '海外']
    for (var i = 0; i < province.length; i++) {
        $("#pt .gn").append("<a href='javascript:;'>" + province[i] + "</a>");
    }
    $("#pt .gn a:eq(0)").addClass("active");
    $("#pt .gn a:eq(10)").css("margin-right", "3px");
    $("#pt .gn a:eq(" + (province.length - 2) + ")").css("margin-right", "3px");
    $(".gn a").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#nowpt").html($(this).html());
    });
    /*左侧导航栏*/
    $("#J_cate").on("mouseover", function () {
        $("#tul li").on("mouseover", function () {
            $("#J_popCtn").children(".cate_part:eq(" + $(this).index() + ")").show().siblings(".cate_part").hide();
        });
        $("#J_popCtn").show();
    }).on("mouseleave", function () {
        $("#J_cate").children(".cate_part").hide();
        $("#J_popCtn").hide();
    })
    //欢迎
    
    huanying = function () {
        let user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            let {
                uid,
                username,
                token
            } = user
            $(".sc_ts2").html("<a href = 'index.html' id='login'>" + user.username + "</a><span>&nbsp;|&nbsp;</span><a href='' class='col-red' onclick='tuichu()'>退出</a>")
            $(".top_user .text").html("<p>"+user.username+"</p>" +"<p id='kljkl'></a>&nbsp;&nbsp;<a href='' class='col-red' onclick='tuichu()'>退出</a></p>")
        }
    }
    huanying()

    tuichu = function () {
        localStorage.removeItem("user")
        huanying()
    }
    
})