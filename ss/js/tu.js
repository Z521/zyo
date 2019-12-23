$(".zongyi4").css({
    "height": $(".zongyi4").width() * 194 / 345 + "px"
})

var zongzong = [{
            img: "./images/新建文件夹/1.jpg",
            wenzi: "【猎毒人】吕云鹏计划通楚天南中风下线？",
            wenzi2: " 热剧精选 ",
            zongz: [{
                    img: "./images/新建文件夹/图片 3.jpeg",
                    img2: "./images/新建文件夹/图片 3 (1).jpeg",
                    wenzi1: "扶摇[会员抢先看]",
                    wenzi2: "沙海[会员抢先看]",
                    wenzi3: "戏精赢了！五福成功闯天煞",
                    wenzi4: "哈哈毛不易本色出演男护士"
                },
                {
                    img: "./images/新建文件夹/图片 3.jpeg",
                    img2: "./images/新建文件夹/图片 3 (1).jpeg",
                    wenzi1: "扶摇[会员抢先看]",
                    wenzi2: "沙海[会员抢先看]",
                    wenzi3: "戏精赢了！五福成功闯天煞",
                    wenzi4: "哈哈毛不易本色出演男护士"
                },
                {
                    img: "./images/新建文件夹/图片 3.jpeg",
                    img2: "./images/新建文件夹/图片 3 (1).jpeg",
                    wenzi1: "扶摇[会员抢先看]",
                    wenzi2: "沙海[会员抢先看]",
                    wenzi3: "戏精赢了！五福成功闯天煞",
                    wenzi4: "哈哈毛不易本色出演男护士"
                }
            ]

        },
        {
            img: "./images/新建文件夹/1.jpg",
            wenzi: "【猎毒人】吕云鹏计划通楚天南中风下线？",
            wenzi2: " 热剧精选 ",
            zongz: [{
                    img: "./images/新建文件夹/图片 3.jpeg",
                    img2: "./images/新建文件夹/图片 3 (1).jpeg",
                    wenzi1: "扶摇[会员抢先看]",
                    wenzi2: "沙海[会员抢先看]",
                    wenzi3: "戏精赢了！五福成功闯天煞",
                    wenzi4: "哈哈毛不易本色出演男护士"
                },
                {
                    img: "./images/新建文件夹/图片 3.jpeg",
                    img2: "./images/新建文件夹/图片 3 (1).jpeg",
                    wenzi1: "扶摇[会员抢先看]",
                    wenzi2: "沙海[会员抢先看]",
                    wenzi3: "戏精赢了！五福成功闯天煞",
                    wenzi4: "哈哈毛不易本色出演男护士"
                },
                {
                    img: "./images/新建文件夹/图片 3.jpeg",
                    img2: "./images/新建文件夹/图片 3 (1).jpeg",
                    wenzi1: "扶摇[会员抢先看]",
                    wenzi2: "沙海[会员抢先看]",
                    wenzi3: "戏精赢了！五福成功闯天煞",
                    wenzi4: "哈哈毛不易本色出演男护士"
                }
            ]

        }
    ]
    //页面

var zongyiz = ""
for (var i = 0; i < zongzong.length; i++) {
    var zongg = zongzong[i]
    zongyiz += `
    <div class="zongyi3">
        <img class="zongyi4" src="` + zongg.img + `" alt="">
        <div class="zongyi5">
                ` + zongg.wenzi + `
        </div>
        <div class="zongyi6">
            ` + zongg.wenzi2 + `
        </div>`
    for (var j = 0; j < zongg.zongz.length; j++) {
        var zongo = zongg.zongz[j]
        zongyiz += `<img class="zongyi7 zongyi8" src="` + zongo.img + `" alt="">
        <img class="zongyi7" src="` + zongo.img2 + `" alt="">
        <div class="zongyi9">
           <div>` + zongo.wenzi1 + `</div>
           <div>` + zongo.wenzi2 + `</div>
        </div>
        <div class="zongyi10">
                <div>` + zongo.wenzi3 + `</div>
                <div>` + zongo.wenzi4 + `</div>
        </div>
    
    </div>
    `
    }

}
$(".warp31").append($(zongyiz))
$(".wo1").css({
    "height": $(".wo1").width() * 66 / 66 + "px"
})
$(".wo7 img").css({
    "height": $(".wo7 img").width() * 78 / 136 + "px"
})
