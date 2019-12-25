// 1. 封装 求三个数 求最大值 最小值 的一个函数
// function max_or_min(a , b , c , leixing){
//     if (leixing == "zuida") {
//         var max = a > b ? (a > c ? a : c) : (b > c ? b : c)
//         return max
//     } else if (leixing == "zuixiao") {
//         var min = a < b ? (a < c ? a : c) : (b < c ? b : c)
//         return min
//     } else {
//         return "瞎写....."
//     }
// }
// var aaa = max_or_min(8 , 6 , 9 , "jklasd")
// console.log(aaa)





// 2. 封装 生成随机验证码(4位) 的一个函数
// function get_yanzhengma() {
//     var jieguo = ""
//     for (var i = 0; i < 4; i++) {
//         jieguo += parseInt(Math.random() * 10)
//     }
//     return jieguo
//     // return parseInt(Math.random() * (9999 - 1000 + 1)) + 1000 + ""
// }
// var aaa = get_yanzhengma()
// console.log(aaa)


// 3. 封装 数字 加密 和 反加密 的功能函数
//     (加密规则 扩大三倍 加25 在扩大两倍 再拼接一个"ABC")
// function jiami_fn(n){
//     var jieguo = (n * 3 + 25) * 2
//     jieguo = jieguo + "ABC"
//     return jieguo
// }

// function jiemi_fu(n) {
//     var jieguo = n.replace("ABC" , "")
//     jieguo = jieguo - 0
//     return parseInt((parseInt(jieguo / 2) - 25) / 3)
// }
// var aaa = jiemi_fu("3230ABC")
// console.log(aaa)

// 4. 封装 获取一个随机颜色的 函数
// function my_random(min , max){
//     return parseInt(Math.random() * (max - min + 1)) + min
// }
// function get_random_color() {
//     var r = my_random(0 , 255)
//     var g = my_random(0 , 255)
//     var b = my_random(0 , 255)
//     return "rgb(" + r + " , " + g + " , " + b + ")"
// }

// var col = get_random_color()
// console.log(col)

// 5. 封装一个函数 功能, 创建创n建行和m列的table表格
// function create_table(n , m){
//     var table = "<table>"
//     for (var i = 0; i < n; i++) {
//         var tr = "<tr>"
//         for (var j = 0; j < m; j++) {
//             tr = tr + "<td>xxx</td>"
//         }
//         tr += "</tr>"
//         table += tr
//     }
//     table += "</table>"
//     return table
// }
// var aaa = create_table(3 , 4)
// console.log(aaa)

// 6. 求 m ~ n 之间的 数字总和  要求 封装成函数
// function get_sum(m , n) {

//     var xxx = m + n
//     m = m > n ? n : m
//     n = xxx - m

//     var sum = 0
//     for (var i = m; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }
// var aaa = get_sum(4 , 9)
// console.log(aaa)

// 7. 根据r 求出圆的面积和周长 要求 将功能封装成函数
// function area_and_round(r){
//     var area = Math.PI * r * r
//     var round = 2 * Math.PI * r
//     var temp = {
//         "面积": area , 
//         "周长": round
//     }
//     return temp
// }
// var aaa = area_and_round(7)
// console.log(aaa)
// 8. m ~ n 之间 随机出来5个数, 并求出当中的最大值
//     将五个数和最大值都返回出来
//     m 在 5 ~ 12 之间
//     n 在 59 ~ 78 之间
//     封装成函数

// function my_random(min , max){
//     return parseInt(Math.random() * (max - min +  1)) + min
// }
// function get_5_randnum_and_max(m , n){
//     if ((m >= 5 && m <= 12) && (n >= 59 && n <= 78)) {
//         var max = 0
//         var arr = []
//         for (var i = 0; i < 5; i++) {
//             var one_rand = my_random(m , n)
//             arr.push(one_rand)
//             if (one_rand > max) {
//                 max = one_rand
//             }
//         }
//         return {
//             "arr": arr , 
//             "max": max
//         }
//     } else {
//         return "输入哟无...."
//     }
// }
// var aaa = get_5_randnum_and_max(7 , 75)
// console.log(aaa)



// 9. 封装一个反转数组功能的函数
// function fanzhuan_arr(arr){
//     var xxx = []
//     for (var i = arr.length - 1; i >= 0; i--) {
//         xxx.push(arr[i])
//     }
//     return xxx
// }
// var aaa = fanzhuan_arr([5 , 4 , 8 , 9])
// console.log(aaa)
// 10. 封装一个打印乘法口诀表的函数, 要求 能控制是多少行
// function chengfakoujue (n) {
//     var jieguo = ""
//     for (var i = 1; i <= n; i++) {
//         var xxx = ""
//         for (var j = 1; j <= i; j++) {
//             xxx += i + " * " + j + " = " + (i * j) + "  "
//         }
//         xxx += "\n"
//         jieguo += xxx
//     }
//     return jieguo

//     // 1 * 1
//     // 1 * 2 , 2 * 2
//     // 1 * 3 , 2 * 3  , 3 * 3
//     // ........
//     // 1 * n , 2 * n , 3 * n , ---->  n * n
// }
// var aaa = chengfakoujue(7)
// console.log(aaa)

// 11. 封装一个函数, 
//     功能 对 数组进行排序
//     可正序 也可 反序排序
// function paixu(arr , leixing){
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - i - 1; j++) {
//             var tiaojian = ""
//             if (leixing == "zheng") {
//                 tiaojian = arr[j] > arr[j + 1]
//             } else {
//                 tiaojian = arr[j] < arr[j + 1]
//             }
//             if (tiaojian) {
//                 var c = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = c
//             }
//         }
//     }
//     return arr
// }
// var aaa = paixu([6 , 8 , 3 , 2] , "fasdf")
// console.log(aaa)
// 12. 有一个数组, 里面有五个人,
//     每个人都有 姓名 年龄 成绩 身高 体重
//     要求, 制作一个函数, 能按照不同的属性进行排序
// var sz = [
//     {
//         name: "zhangsan" , 
//         age: 12 , 
//         height: 178
//     },
//     {
//         name:"lisi",
//         age: 32 , 
//         height: 130
//     },
//     {
//         name: "wangwu",
//         age: 11 , 
//         height: 141
//     }
// ]

// function paisu_diao(arr , leixing){
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - i - 1; j++) {
//             var tiaojian = 0
//             if (leixing == "name") {
//                 tiaojian = arr[j].name > arr[j + 1].name
//             } else if (leixing == "height") {
//                 tiaojian = arr[j].height > arr[j + 1].height
//             } else {
//                 tiaojian = arr[j].age > arr[j + 1].age
//             }

//             if (tiaojian) {
//                 var ren = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = ren
//             }
//         }
//     }
//     return arr
// }

// var aaa = paisu_diao(sz , "name")
// console.log(aaa)


// 13. 封装一个函数(要求该数字>3), 判断某一个数字是否是质数
// function zishu_fn(n) {
//     if (n <= 3) {
//         return '输入有误...'
//     }

//     var yuan_shuzi = n
//     var is_pendao = false
//     while (n > 2){
//         n--;
//         if (yuan_shuzi % n == 0) {
//             is_pendao = true
//         }
//     }

//     if (is_pendao) {
//         return "不是质数"
//     } else {
//         return "是质数"
//     }
// }

// var aaa = zishu_fn(17)
// console.log(aaa)
// 14. 封装一个数组去重的函数
// function quchong(arr){
//     var temp_dic = {

//     }
//     for (var i = 0; i < arr.length; i++) {
//         temp_dic[arr[i]] = "xxxx"
//     }

//     var xiao = []
//     for (key in temp_dic) {
//         xiao.push(key)
//     }
//     return xiao
// }

// var aaa = quchong([4 , "zhangsan" , 6 , 6 , "zhangsan" , 8 , 4 , 5])
// console.log(aaa)
// 15. 一个三位数, 求各个位置的数字之和, 
//     要求 封装成函数
// function san_sum(n){
//     if (n < 100 || n > 999) {
//         return "输入有误...."
//     }

//     var ge = n % 10 
//     var bai = parseInt(n / 100)
//     var shi = parseInt((n - bai * 100) / 10)

//     return ge + bai + shi
// }
// var aaa = san_sum(768)
// console.log(aaa)
// 16. 求 10! (10的阶乘)
// function jiecheng(n){
//     var jieguo = 1
//     while (n >= 1) {
//         jieguo = jieguo * n
//         n--
//     }

//     return jieguo
// }
// var aaa = jiecheng(6)
// console.log(aaa)
//     封装成函数
// 17. 珠峰海拔8848米，现在有足够大的纸，厚度是0.01米，折多少次高度可以超过珠穆朗玛峰
//     封装成函数
// function houdu() {
//     var cishu = 1

//     while (Math.pow(2 , cishu) * 0.01 < 8848) {
//         cishu++
//     }
//     return cishu

//     // 1 ci  ---->  2
//     // 2 ci ---->  4
//     // 3 ci ---->  2 的 3次方
//     // 4 ci ---->  2 的 4次方
//     // 5 ci ---->  2 的 5次方

//     // n  ---->   2 的 n次方 
// }

// var aaa = houdu()
// console.log(aaa)

// 18. 你爸给了你n(比如 10000)元, 
//     每天花一半,
//     几天可以花完(碰见毛钱, 直接扔掉)
//     要求, 封装成函数
// function huaqian(n) {
//     var tian = 0
//     while (n > 1) {
//         n = parseInt(n / 2)
//         tian++
//     }
//     return tian
// }
// var aaa = huaqian(100000000)
// console.log(aaa)
// 19. 有一个乒乓球, 从1000米的高空掉落, 
//     每次弹起一半的高度, (不足一米的, 直接忽略)
//     一共可以弹起多少次
//     封装成函数
// 20. 斐波那契数列, 要求函数封装来实现
//     (附加题, 可以不做)