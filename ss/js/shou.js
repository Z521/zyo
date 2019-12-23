// 内容区域的高度
var screen_h = window.screen.height
var screen_w = window.screen.width

$(".img").css({
    "height": screen_h - $(".bottom").outerHeight() + "px"
})

// 底部导航上的图片
var img1 = $(".bottom div img")
img1.css({
        "height": img1.width() + "px"
    })
    //底部换图片
$(".botteml").click(function() {
    var tian = this
    var dian = $(this).index()

    $(".botteml").each(function(index, item) {
        if (dian == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src", cur_src.replace(".png", "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src", cur_src.replace("_a", ""))

        }
    })
    $(".img>div").each(function(index, item) {
        if ($(tian).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})


$(".lunbo1").css({
    "height": $(".lunbo1").width() * 194 / 345 + "px"
})





//页面
var shujiaa = [{
        shus: "暑假刷片看这里！",
        shua: "./images/首页/小/图标 6.svg",
        spann: "换一批试试",
        goodd: [{
                img: "./images/首页/1.jpeg",
                imgg: "./images/首页/11.jpeg",
                zi: "小戏骨MV·外卖小哥",
                zii: "惹上冷殿下·8.8首播",
                ziz: "萌娃致敬烈日下劳动者",
                zizz: "迷妹撩爱豆 饭圈高糖恋"

            },
            {
                img: "./images/首页/3.jpeg",
                imgg: "./images/首页/22.jpeg",
                zi: "南方有乔木 TV版",
                zii: "爱情进化论·8.2首播",
                ziz: "陈伟霆腹黑开撩白百何",
                zizz: "张若昀偷吻张天爱"


            },
            {
                img: "./images/首页/4.jpeg",
                imgg: "./images/首页/66.jpeg",
                zi: "明日之子·第二季",
                zii: "入戏·李宏毅",
                ziz: "华晨宇痛哭不舍文兆杰",
                zizz: "25岁前结婚这想法没变！"


            },
            {
                img: "./images/首页/7.jpeg",
                imgg: "./images/首页/88.jpeg",
                zi: "幸福三重奏悠享版",
                zii: "火箭少女101研究所",
                ziz: "S姐妹召开消灭四害研讨会",
                zizz: "宣仪跳浮夸舞蹈wink超可爱"


            }
        ]
    },
    {
        shus: "热闻一览",
        shua: "./images/首页/小/图标 6.svg",
        spann: "换一批试试",
        goodd: [{
                img: "./images/首页/1.jpeg",
                imgg: "./images/首页/11.jpeg",
                zi: "马航MH370事件“终极报告”今天将出炉！",
                zii: "8月起这些新规将实施 我们都将收到这样一条短信",
                ziz: "",
                zizz: ""

            },
            {
                img: "./images/首页/3.jpeg",
                imgg: "./images/首页/22.jpeg",
                zi: "孟美岐演讲实录：我就是那个拿了第一名的女孩",
                zii: "迷妹专访101|yamy：很喜欢有遗憾的感觉",
                ziz: "",
                zizz: ""


            },
            {
                img: "./images/首页/4.jpeg",
                imgg: "./images/首页/66.jpeg",
                zi: "SNH48总决选前三专访：李艺彤自称未来一片辉煌",
                zii: "真正的金缕玉衣！古人葬礼都这么奢侈吗",
                ziz: "",
                zizz: ""


            }
        ]
    }

]

var contentr = ""

// 遍历数据 做界面
for (var i = 0; i < shujiaa.length; i++) {
    var one_data = shujiaa[i]
    contentr += `
            <div class="shujia">
                          ` + one_data.shus + `
            </div>
            
                   
    `
    for (var j = 0; j < one_data.goodd.length; j++) {
        var one_goods = one_data.goodd[j]
        contentr += `
        <div class="shujia1">
            <img class="shujia2" src="` + one_goods.img + `">
             <img src="` + one_goods.imgg + `" alt="">  
            </div>  
            <div class="xigu1">
            <div class="xigu">` + one_goods.zi + `</div>
            <div class="xigu">` + one_goods.zii + `</div>
        </div>

        <div class="xigu1">
            <div class="xigu">` + one_goods.ziz + `</div>
            <div class="xigu"> ` + one_goods.zizz + `</div>
        </div> 
        
            
    `
    }

    contentr += `
       <div class="shua1">
        <img class="shua"src="` + one_data.shua + `" ><span>` + one_data.spann + `</span>
    </div> 
       `
}
$(".lunbo3").append($(contentr))

var jiemian = [{
        "img": "./images/短视频/1.jpg",
        "wenzi": " 王者荣耀：英雄就是比普通人更变态的辩变态，张飞这种玩法最无敌！！",
        "imgi": "./images/短视频/图片 70.jpeg",
        "wenzi1": "朋程说游",
        "wenzi2": "王者荣耀",
        "imgg1": "./images/短视频/图标 16.svg",
        "imgg2": "./images/短视频/图标 17.svg",
        "imgg3": "./images/短视频/图片 71.png"
    },
    {
        "img": "./images/短视频/2.jpg",
        "wenzi": "  王者荣耀搞笑：最强射手鲁班",
        "imgi": "./images/短视频/图片 70 (1).jpeg",
        "wenzi1": "搞笑",
        "wenzi2": "王者荣耀",
        "imgg1": "./images/短视频/图标 16.svg",
        "imgg2": "./images/短视频/图标 17.svg",
        "imgg3": "./images/短视频/图片 71.png"
    },
    {
        "img": "./images/短视频/3.jpg",
        "wenzi": " 貂蝉",
        "imgi": "./images/短视频/图片 70.jpeg",
        "wenzi1": "游戏制作",
        "wenzi2": "王者荣耀",
        "imgg1": "./images/短视频/图标 16.svg",
        "imgg2": "./images/短视频/图标 17.svg",
        "imgg3": "./images/短视频/图片 71.png"
    },
    {
        "img": "./images/短视频/4.jpg",
        "wenzi": " 王者荣耀：英雄就是比普通人更变态的辩变态，张飞这种玩法最无敌！！",
        "imgi": "./images/短视频/图片 70.jpeg",
        "wenzi1": "动画",
        "wenzi2": "王者荣耀",
        "imgg1": "./images/短视频/图标 16.svg",
        "imgg2": "./images/短视频/图标 17.svg",
        "imgg3": "./images/短视频/图片 71.png"
    }
]

var jiemian2 = ""
for (var i = 0; i < jiemian.length; i++) {
    var jie = jiemian[i]
    jiemian2 += `
    <div class="shipin11">
                    <div class="shipin112">
                        <img src="` + jie.img + `" alt="">
                        <div class="zhang">
                           ` + jie.wenzi + `
                        </div>
                    </div>
                </div>
                <div class="peng">
                    <img src="  ` + jie.imgi + `" class="shipinn" alt="">
                    <span>  ` + jie.wenzi1 + `</span>
                    <span>  ` + jie.wenzi2 + `</span>
                    <img class="shipin113" src="  ` + jie.imgg1 + `" alt="">
                    <img class="shipin113" src="  ` + jie.imgg2 + `" alt="">
                    <img class="duan2" src="  ` + jie.imgg3 + `" alt="">
                </div>
    `

}
$(".zongyi7").css({
    "height": $(".zongyi7").width() * 94 / 168 + "px"
})
$(".wo3 img").css({
    "height": $(".wo3 img").width() * 20 / 20 + "px"
})

$(".top3").append($(jiemian2))


$(".kan3").css({
    "height": $(".kan3").width() * 74 / 130 + "px"
})
