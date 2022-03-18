//渲染
$(function () {
  $.get(" http://jx.xuzhixiang.top/ap/api/bannerlist.php", {
    uid: 99701
  }, (r) => {
    let str = ""
    r.data.forEach(i => {
      str += `
      <div class="swiper-slide"><img src="${i.banner_img_url}"> </div>
    `

    });
    $("#sw1 .swiper-wrapper").html(str)
    sw1()
  })
  $.get(" http://jx.xuzhixiang.top/ap/api/bannerlist.php", {
    uid: 99703
  }, (r) => {
    let str = ""
    let str1 = ''
    r.data.forEach((i, index) => {
      if ((index + 1) % 3 === 0) {
        str1 += `<img src="${i.banner_img_url}"> `
        str += `<div class="swiper-slide">${str1}</div>`
        str1 = ''
      } else {
        str1 += `<img src="${i.banner_img_url}"> `
      }
    })
    $("#sw2 .swiper-wrapper").html(str)
    sw2()
  })
  $.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
    uid: 99704
  }, (res) => {
    let str = ""
    res.data.forEach(item => {
      str += `
                    <div class="swiper-slide"> 
                    <a href="detail.html?pid=${item.pid}" target="_blank">
                    <div class="seckill-item">
                        <img class="seckill-item__image" src="${item.pimg}">
                        <h6 class="seckill-item__name">${item.pname}
                        </h6>                                       
                        <div class="seckill-item__price">
                            <span class="price-origin">
                                <i>¥</i><span>${item.pprice}</span>
                            </span>
                        </div>
                    </div>
                </a></div>
                `
    });
    $("#sw3 .swiper-wrapper").html(str)
    sw3()
    
  })
  let sw1 = function () {
    let sw1 = new Swiper("#sw1", {
      autoplay: true,
      loop: true,
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  let sw2 = function () {
    let sw2 = new Swiper("#sw2", {
      autoplay: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  let sw3 = function () {
    let sw3 = new Swiper('#sw3', {
      autoplay: true,
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  var sw4 = new Swiper('#sw4', {
    autoplay: true,
    loop: true
  })
})