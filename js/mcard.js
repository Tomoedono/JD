var user = JSON.parse(localStorage.getItem("user"))
if (user) {
    var {
        uid,
        username,
        token
    } = user
}
console.log(uid);


function loadList() {
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: uid
    }, (res) => {
        let str = ""
        res.data.forEach((item) => {
            str += `
        <div class="cart_item_inner">
        <div class="cart_img"><img src="${item.pimg}" alt=""></div>
        <div class="cart_name"><a href="detail.html?pid=${item.pid}">${item.pname}</a></div>
        <div class="cart_info"><div class="cart_price">¥${item.pprice}×${item.pnum}</div>
        <span style="
        cursor: pointer;
    "  onclick="delfn(${uid},${item.pid})">删除</span></div>
        </div>
`
        });
        if (res.data.length > 0) {
            $("#J_cart_pop").html(`<div class="cart_hd">
                                        <h4>最近加入的商品</h4>
                                        </div>
                                        <div class="cart_bd">
                                        </div>
                                        <div class="cart_ft">
                                            <div class="cart_num">共<span>${res.data.length}</span>件商品</div>
                                            <a href="cart.html">去购物车</a>
                                        </div>`)
            $(".cart_bd").html(str)
        } else {
            $("#J_cart_pop").html(`<span class="loading"></span></div>`)
        }
        $("#shopping-amount").html(res.data.length)
    })
}
if (token) {
    loadList()
}

function delfn(uid, pid) {
    $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
        uid,
        pid
    }, (res) => {
        if (res.msg == "删除成功") {
            $(".alert").css("opacity", "1")
            $(".alert").html('删除成功')
            loadList()
        } else {
            alert(res.msg)
        }

    })
}