var user = JSON.parse(localStorage.getItem("user"))
let pimg = $(".pimg");
let zoom = $(".zoom");
let mask = $("#mask");
let zoomImg = $(".zoom img");
let url = localStorage.getItem("url")
if (url) {
    localStorage.removeItem("url")
}
if (user) {
    var {
        uid,
        username,
        token
    } = user

}
const params = new URLSearchParams(location.search);
let pid = params.get('pid')
$.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
    id: pid
}, (res) => {
    let str = ""
    str = `
                <h3>${res.data.pname}</h3>
                <p><span>秒杀价:</span><span>￥</span><span>${res.data.pprice}</span></p>
                <p>${res.data.pdesc}</p>
                `
    $(".detail").html(str)
    $(".pimg img").attr("src", res.data.pimg)
    $(":text").on("change", function () {
        if (this.value < 1 || isNaN(this.value)) {
            this.value = 1
        }
    })
    $(".add").on("click", function () {
        if (user) {
            let pnum = $(".num").val()
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                uid,
                pid,
                pnum,
            }, (res) => {
                console.log(res);
                if (res.msg == "插入成功" || "修改成功") {
                    $("body").append("<div class='alert'></div>")
                    $(".alert").show()
                    $(".alert").html('加入购物车成功 ')
                    setTimeout(() => {
                        location.href = 'cart.html'
                    }, 800);
                } else {
                    alert(res.msg)
                }
            })
        } else {
            alert('您还没有登陆')
            let url = location.href
            localStorage.setItem("url", url)
            location.href = 'login.html'
        }
    })
});

$(".pimg").hover(
    function () {
        let zoomImgWidth = (zoom.width() * pimg.width()) / mask.width();
        console.log(zoomImgWidth);
        zoomImg.width(zoomImgWidth)
        $(".zoom").show()
        $("#mask").show()

    },
    function () {
        $(".zoom").hide()
        $("#mask").hide()
    }
)
pimg.on("mousemove", (evt) => {
    let offsetX = evt.pageX - pimg.offset().left;
    let offsetY = evt.pageY - pimg.offset().top;
    let maskX = offsetX - mask.width() / 2;
    let maskY = offsetY - mask.height() / 2;
    if (maskY <= 0) {
        maskY = 0;
    }
    if (maskX <= 0) {
        maskX = 0;
    }
    if (maskY >= pimg.height() - mask.height()) {
        maskY = pimg.height() - mask.height();
    }
    if (maskX >= pimg.width() - mask.width()) {
        maskX = pimg.width() - mask.width();
    }
    mask.css("left", maskX)
    mask.css("top", maskY)
    let zoomImgX = (-maskX * zoomImg.width()) / pimg.width();
    let zoomImgY = (-maskY * zoomImg.width()) / pimg.width();
    zoomImg.css("left", zoomImgX)
    zoomImg.css("top", zoomImgY)
})
$(".jia").on("click", () => {
    let num = $(".num").val()
    num++
    $(".num").val(num)
})
$(".jian").on("click", () => {
    let num = $(".num").val()
    num--
    if (num <= 0) {
        num = 1
        $(".jian")
    }
    $(".num").val(num)
})