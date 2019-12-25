// var a = 9
// console.log(a)


// 算术运算符
// + - * / % 

// number 2 , 4 , 8 , 87 , 8,9
// string "" 'asdfasdf' "阿斯顿发送到"
// bool  布尔值 类型
// bool: true , false


// 求 一个 东西 的类型
// typeof 东西

// var a = false
// console.log(typeof a)


// 逻辑运算符
// ! && ||
// 非 与 或
// ! 取相反值
// && 两个都是true ---> true
// || 有一个是true ---> true

// var a = false
// // var b = !a
// var b = false || false
// console.log(b)


// var ni_lao_pao = 0
// var kai_gong_zi = true
// var jian_qian = true

// ni_lao_pao = kai_gong_zi && jian_qian
// console.log(ni_lao_pao)


// = 赋值运算符
// // 比较(判断)运算符
// > < >= <= != ==


// var qi_che = 0
// var fen_shu = 101

// qi_che = fen_shu == 100
// console.log(qi_che)

// 程序的运行结构
// 顺序结构
// 分支结构
// 循环结构


// 非零即真
// var che = false
// var fen_shu = 58

// if (fen_shu > 60) {
//     console.log("我好牛逼,....")
// }

// if (fen_shu == 100) {
//     che = true
// } else {
//     che = false
// }

// console.log(fen_shu)


// var gongzi = 189
// if (gongzi > 100) {
//     console.log("买麻辣烫.....")
// }

// console.log("回家...")


// var fen_shu = 78
// if (fen_shu < 60) {
//     console.log("差....")
// } else {
//     if(fen_shu > 90) {
//         console.log("diao")
//     } else {
//         console.log("正常")
//     }
// }

// var fen_shu = 88
// if (fen_shu < 60) {
//     console.log("差....")
// } else if (fen_shu > 90) {
//     console.log("diao")
// } else {
//     console.log("正常")
// }


var tang = false
var fen_shu = 91
// if (fen_shu > 90) {
//     tang = true
// } else {
//     tang = false
// }
// 三目运算符
// 条件 ? 值1 : 值2
tang = fen_shu > 90 ? true : false
console.log(tang)


运算符
算术运算符
    + - * / %
逻辑运算符
    ! && ||
    ! 取反
    && 2真即真
    || 1真即真
比较/判断 运算符
    > < >= <= == != 
    判断元素符 -----> 必然是 真 或者 假
    判断元素符  ----> 肯定是 bool 值
    bool :  非零即真

分支结构
if (条件) {
    条件成立 执行...
} else {
    条件不成立 执行...
}

if (条件) {
    条件成立 执行....
}

嵌套1
if (条件1) {
    条件1成立 执行....
} else {
    if(条件2) {
        条件1 不成立  条件2 成立 执行....
    } else {
        条件1 不成立  条件2 不成立 执行...
    }
}

嵌套2
if (条件1) {
    条件1成立 执行....
} else if(条件2) {
    条件1 不成立  条件2 成立 执行....
} else {
    条件1 不成立  条件2 不成立 执行...
}

单目 运算符
-8
+8
!8

双目运算符
8 - 7
8 + 7
.....

三目运算符
? :
条件 ? 值1 : 值2
条件成立  走 值1
条件不成立 走 值2
if(条件) {
    11111
} else{
    22222
}



var cao_zuo = 3
0: 取钱 
1: 存钱
2: 查账户余额
3: 修改密码
4: 转账
5: 退卡
6 ~ 9: 系统正在处理这几个操作 请稍后 
>= 10: 别瞎输入







