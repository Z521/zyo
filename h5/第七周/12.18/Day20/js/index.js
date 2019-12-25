var left_space = $(".min_div")[0].offsetLeft
var top_space = $(".min_div")[0].offsetTop

var big_x = 0
var big_y = 0

// 鼠标进入事件的监听
$(".min_div").mouseenter(function () {
    $(".max_div , .kuai").css({
        "display": "block"
    })
})

// 鼠标移动事件的监听
$(".min_div").mousemove(function () {
    var kuai_x = event.clientX - left_space - 100
    var kuai_y = event.clientY - top_space - 100
    if (kuai_x <= 0) {
        kuai_x = 0
    }
    if (kuai_x >= 200) {
        kuai_x = 200
    }
    if (kuai_y <= 0) {
        kuai_y = 0
    } 
    if (kuai_y >= 200) {
        kuai_y = 200
    }
    $(".kuai").css({
        "left": kuai_x + "px",
        "top": kuai_y + "px"
    })

    $(".max_div").css({
        "background-position": (kuai_x * -2) + "px " + (kuai_y * -2) + "px"
    })
})

// 鼠标移出事件
$(".min_div").mouseleave(function () {
    $(".max_div , .kuai").css({
        "display": "none"
    })
})


