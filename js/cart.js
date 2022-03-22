var user = JSON.parse(localStorage.getItem("user"))
if(user){
var {
    uid,
    username,
    token
} = user
}
function loadList() {
    let str = ""
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: uid
    }, (res) => {
        res.data.forEach((item,index) => {
            str += `
                <ul>
                    <li>
                        <input type="checkbox" name="" id="" class="dxckb" onclick="dxckb(this)">
                        <img src="${item.pimg}">
                        <span>${item.pname}</span>
                    </li>
                    <li>
                        ${item.pprice}
                    </li>
                    <li>
                        <button onclick="jian(${uid},${item.pid},${item.pnum},${item.pprice},this)">-</button>
                        <input type="text" value="${item.pnum}" onchange="updata(${uid},${item.pid},${item.pnum},${item.pprice},this)" >
                        <button onclick="jia(${uid},${item.pid},${item.pnum},${item.pprice},this)">+</button>
                    </li>
                    <li class="xj">
                        <span>${(item.pprice*item.pnum).toFixed(2)}</span>
                    </li>
                    <li>
                        <button onclick="delFN(${uid},${item.pid},this)">删除</button>
                    </li>
                </ul>
            `

        });
        $(".tl").html(str)
        js()
        allckb()
    })
}
loadList()

function updata(uid, pid, pnum, pprice, is) {
    let xj = is.parentNode.parentNode.querySelector(".xj span")
    if (is.value < 1 || isNaN(is.value)) {
        is.value = 1
    }
    pnum = is.value
    $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
        uid,
        pid,
        pnum
    }, (res) => {
        if (res.msg == "修改成功") {
            xj.innerHTML =( pnum * pprice).toFixed(2)
            js()
        } else {
            alert(res.msg)
        }

    })

}
function jian(uid, pid, pnum, pprice, is) {
    is = is.nextElementSibling
    is.value--
    if (is.value < 1) {
        is.value = 1
    }
    updata(uid, pid, pnum, pprice, is)
}

function jia(uid, pid, pnum, pprice, is) {
    is = is.previousElementSibling
    is.value++
    updata(uid, pid, pnum, pprice, is)
}

function delFN(uid, pid,is) {
    console.log($(is).parent().parent());
    $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
        uid,
        pid
    }, (res) => {
        if (res.msg == "删除成功") {
            $(".alert").css("opacity", "1")
            $(".alert").html('删除成功')
            $(is).parent().parent().remove()
            dxckb()
            allckb()
            setTimeout(() => {
                $(".alert").css("opacity", "0")
            }, 500);

        } else {
            alert(res.msg)
        }
        
    })
}
function allckb() {
   let quanx=document.querySelector('#quanx')
    let dxckbs = document.querySelectorAll(".dxckb")
    dxckbs.forEach((v) => {
        v.checked = quanx.checked
    })
    if(dxckbs){
         quanx.checked=false
    }
    dxckb()
}
function dxckb() {
    let allckb = document.querySelector("#quanx")
    let dxckbs = document.querySelectorAll(".dxckb")
    let i = 0
    dxckbs.forEach((v) => {
        if (v.checked) {
            i++
        } 
        console.log(i);
        if (i == dxckbs.length) {
            allckb.checked = true

        } else {
            allckb.checked = false
        }
    })
    js()
}
function js() {
    let num = 0
    let dxckbs = document.querySelectorAll(".dxckb")
    dxckbs.forEach((v) => {
        if (v.checked) {
            num += Number(v.parentNode.parentNode.querySelector(".xj span").innerHTML)
        }else{
            // num =0
        }
    })
    $(".zongji").html(num)
}
js()