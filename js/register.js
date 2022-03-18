$(function () {
    $("#phone").on("bind", 'input propertychange', function () {
        $("#msg").css("display", "block");
    }).on("blur", function () {
        if ($("#phone").val() == null) {
            $("#msg").css("display", "none");
        } else {
            $("#msg").css("display", "block");
        }
    })
    $("#but2").on("click", function () {
        $("#mask").css("display", "none");
    })
    //判断用户名是否可用
    $("#phone").on("change", function () {
        $.get("http://jx.xuzhixiang.top/ap/api/checkname.php", {
            username: $("#phone").val()
        }, (res) => {
            if (res.msg == '用户名可用') {
                $("#msg").html(res.msg)
                $("#msg").css("color", "green")
            } else {
                $("#msg").html(res.msg)
                $("#msg").css("color", "red")
            }
        })
    })
    $('#zc').on("click", function () {
        let data = {
            username: $('#phone').val(),
            password: $(':password').val()
        }
        $.ajax({
            url: "http://jx.xuzhixiang.top/ap/api/reg.php",
            type: "get",
            data,
            success: function (res) {
                alert(res.msg)
                if (res.msg == "注册成功") {
                    localStorage.setItem("user", JSON.stringify(data))
                    location.href = './login.html';
                }
            },
        })
    })
})