$(function () {
    let url = localStorage.getItem("url")
    if(url==null){
        url='index.html'
    }
    /*登录*/
    /*扫码登录和账号登录切换*/
    $("#sm").on("click", function () {
        $(this).addClass("active");
        $("#zh").removeClass("active");
        $("#sm_box").css("display", "block");
        $("#zh_box").css("display", "none");
    })
    $("#zh").on("click", function () {
        $(this).addClass("active");
        $("#sm").removeClass("active");
        $("#zh_box").css("display", "block");
        $("#sm_box").css("display", "none");
    })
    let data = JSON.parse(localStorage.getItem("user"))
    if (data) {
       $("#loginName").val(data.username) 
    }
    $('#denglu').on("click", function () {
        let data = {
            username: $("#loginName").val(),
            password: $("#loginPw").val()
        }
        $.ajax({
            type: "get",
            url: "http://jx.xuzhixiang.top/ap/api/login.php",
            data,
            success: function (res) {
                alert(res.msg)
                if (res.msg == "登录成功") {
                    console.log(res.data);
                    let token = res.data.token
                    let uid = res.data.id
                    let username = res.data.username
                    localStorage.setItem("user", JSON.stringify({
                        uid,
                        token,
                        username
                    }))
                    location.href = url
                }
            }
        });
    })
})