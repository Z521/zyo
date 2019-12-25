
// $(".shop_list").append(yyy)
var content_str = ""
// 遍历数据 做界面
for (var i = 0; i < goods.length; i++) {
    var one_data = goods[i]
    content_str += `
            <div class="yijiadian">
                <input type="checkbox" name="" id="quanxuan" class="selectOne shop_checkbox">
                <span class="shop_name">店铺：` + one_data.shop_name + `</span>
   `
    for (var j = 0; j < one_data.goods.length; j++) {
        one_goods = one_data.goods[j]
        content_str += `
       <div class="diyi">
       <div class="yi">
           <input type="checkbox" name="" class="selectOne goods_checkbox">
           <div class="tupian">
               <img src="./images/` + one_goods.img + `" alt="">
               <span>` + one_goods.name + `</span>
               <span>` + one_goods.params + `</span>
           </div>
       </div>
       <div class="er">
           <div class="shuang">
               <span class="shanchu">￥` + one_goods.origin_price + `</span>
               <span>￥` + one_goods.price + `</span>
           </div>
       </div>
       <div class="san">
           <button class="jianjian" >-</button>
           <input type="text" class="selectOne goods_num" value="` + one_goods.num + `">
           <button class="jiajia" >+</button>
       </div>
       <div class="si">
           <p>￥124.90</p>
       </div>
       <div class="wu">
           <div class="caozuo">
               <p>移入收藏夹</p>
               <p class="shanchuniu">删除</p>
           </div>
       </div>
   </div>
       `

    }
    content_str += `</div>`
}


$(".shop_list").append($(content_str))
$(".jiajia").click(function () {
    var row = $(this).parents(".diyi")
    var input_ = row.find(".goods_num")
    var num = (input_.val() - 0) + 1
    
    input_.val(num)
    chage_row_money(row, num)
    // change_all_num()  
    // change_all_money()
})
$(".jianjian").click(function () {
    var row = $(this).parents(".diyi")
    var input_ = row.find(".goods_num")
    var num = (input_.val() - 0) - 1
    if (num > 0) {
        input_.val(num)
        chage_row_money(row, num)
    }
    // change_all_num()
    // change_all_money()
})

// 控制单行money
function chage_row_money(row,num) {
    var money_ele = row.find(".si>p")
    var price_ele = row.find(".shuang>span").eq(1)
    var price = price_ele.text().replace("￥","") - 0
    var row_money = num * price
    row_money = keepTwoDecimalFull(row_money)
    money_ele.html("￥" + row_money)
}

// 删除按钮的点击事件
$(".shanchuniu").click(function () {
        var yijiadian = $(this).parents(".yijiadian")
        $(this).parents(".diyi").remove()
        if (yijiadian.find(".diyi").length == 0) {
            yijiadian.remove()
        }
    }
)
// // 界面全选按钮的监听事件
// $(".all_checkbox").change(function () {
//     var is_select = $(this).prop("checked")
//     // 让界面上的所有 按钮 被选中 或 不被选中
//     $("input:checkbox").each(function (index, item) {
//         $(item).prop("checked", is_select)
//     })
// })



// 界面全选按钮的监听事件
$(".all_checkbox").change(
    function () {
        var is_select = $(this).prop("checked")
        $("input:checkbox").each(function (index,item) {
            $(item).prop("checked",is_select)
        })
      
    }
)


// // 改变整个界面的总价
// function change_all_money() {
//     var all_money = 0
//     $(".si>p").each(function (index, item) {
//         all_money += ($(item).text().replace("￥", "") - 0)
//     })
//     all_money = keepTwoDecimalFull(all_money)
//     $(".zongji>span").text(all_money)
// }

// // 改变已选中 商品的 总数量 
// function change_all_num() {
//     var all_num = 0
//     $(".goods_num").each(function (index, item) {
//         all_num += ($(item).val() - 0)
//     })
//     $(".xiaoer>span").eq(0).text("已选商品" + all_num + "件")
// }




// // 店铺全选按钮的点击事件
// $(".shop_checkbox").change(function () {
//     var is_select = $(this).prop("checked")
//     if (is_select == false) {
//         $(".all_checkbox").prop("checked", false)
//     } else {
//         check_page_is_all()
//     }
//     // 让当前店铺 按钮 被选中 或 不被选中
//     $(this).parents(".yijiadian").find(".goods_checkbox").each(function (index, item) {
//         $(item).prop("checked", is_select)
//     })
// })

// // 商品选择按钮的点击事件
// $(".goods_checkbox").change(function () {
//     var is_select = $(this).prop("checked")
//     if (is_select == false) {
//         // 店铺 肯定取消全选
//         $(this).parents(".yijiadian").find(".shop_checkbox").prop("checked", is_select)
//         // 界面 肯定取消全选
//         $(".all_checkbox").prop("checked", is_select)
//     } else {
//         // 看一下 店铺是否全选
//         check_shop_is_all($(this).parents(".yijiadian"))
//         // 看一下 界面是否全选
//         check_page_is_all()
//     }
// })

// // 看一下 店铺是否全选
// function check_shop_is_all(row) {
//     var is_all = true
//     row.find(".goods_checkbox").each(function (index, item) {
//         if ($(item).prop("checked") == false) {
//             is_all = false
//         }
//     })
//     row.find(".shop_checkbox").prop("checked", is_all)
// }
// // 看一下 界面是否全选
// function check_page_is_all() {
//     var is_all = true
//     $(".shop_checkbox").each(function (index, item) {
//         if ($(item).prop("checked") == false) {
//             is_all = false
//         }
//     })
//     $(".all_checkbox").prop("checked", is_all)
// }
















