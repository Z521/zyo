
// 1. 求一组数中的所有数的和 和 平均值

// var arr = [12, 5, 21, 121, 3, 96]
// var b = 0
// for (var i = 0; i < arr.length; i++) {
//     b += arr[i]

// } console.log(b);
// var a = b / arr.length
// console.log(a);

// 2. 求一组数中的最大值和最小值，以及所在位置
// var arr = [12, 14, 3, 58, 455, 2, 45, 25, 65, 41, 96, 100, 9]
// var max = mar = arr[0]
// var wei = 0
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//         wei = i
//     }
//     if (arr[i] < mar) {
//         mar = arr[i]
//         we = i
//     }
// }
// console.log(max, wei, mar, we);
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < mar) {
//         mar = arr[i]
//         wei = i 
//     }
// }

// console.log(mar, wei);

// var arr = [ 2,5,78,15,36,15]
// var arr1 = [ 0,0,0,0,0,0,]
// for (var i = 0; i < arr.length; i++) {
//     arr1[arr.length - 1 - i] = arr[i]

// }
// console.log(arr1);

// 马亚飞 , 石振彪 , 郑金鹏 , 孙华建 , 🐒
//     年龄 依次为: 12 ,    21 ,     13   ,   24  ,  18
//     女朋友数量:  3  ,    2,       4    ,   1,  ,   6
// 打印, 女朋友数量做多的那个人
// var arr = [
//     {
//         xing: "老王",
//         nian: 12,
//         you: 3
//     },
//     {
//         xing: "小唐",
//         nian: 21,
//         you: 2
//     },
//     {
//         xing: "小李",
//         nian: 13,
//         you: 4
//     },
//     {
//         xing: "小张",
//         nian: 18,
//         you: 6
//     }
// ]
// var aa = arr[0].you
// var ming = ""
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].you > aa) {
//         aa = arr[i].you
//         ming = arr[i].xing
//     }
// }
// console.log(ming);
// 附加题2: 有一个数组, 里面有五个男孩, 
//     名词 依次叫: 马亚飞 , 石振彪 , 郑金鹏 , 孙华建 , 🐒
//     年龄 依次为: 12 ,    21 ,     13   ,   24  ,  18
//     女朋友数量:  ["凤姐" , "凤凤" , "小姐姐"]  ,   
//                 ["阿凤" , "潘金莲"],       
//                 ["张小平" , "马亚飞" , "孙华建" , "臧克男"]    ,
//                 ["萍儿"],    
//                 ["梅超风" , "陈旋风" , "李逵" , "武大郎" , "鲁智深"]
// 打印, 女朋友数量做多的那个人
// var arr = [
//     {
//         xing: "老王",
//         nian: 12,
//         you:  ["凤姐" , "凤凤" , "小姐姐"]  ,  
//     },
//     {
//         xing: "小唐",
//         nian: 21,
//         you: ["阿凤" , "潘金莲"],       
//     },
//     {
//         xing: "小李",
//         nian: 13,
//         you: ["张小平" , "马亚飞" , "孙华建" ]    
//     },
//     {
//         xing: "小张",
//         nian: 18,
//         you: ["萍儿", "李逵" , "武大郎" , "鲁智深", "臧克男"],    
//     },
//     {
//         xing: "小明",
//         nian: 15,
//         you:  ["梅超风" , "陈旋风" ]
//     }
// ]
// var aa = arr[0].you.length
// var ming = ""
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].you.length > aa) {
//         aa = arr[i].you.length
//         ming = arr[i].xing
//     }
// }
// console.log(ming);

// 附加题3: 有一个数组, 里面有五个男孩, 
//     名词 依次叫: 马亚飞 , 石振彪 , 郑金鹏 , 孙华建 , 🐒
//     年龄 依次为: 12 ,    21 ,     13   ,   24  ,  18


//     每个人的游泳时间:  [98 , 12 , 34]  144,   
//                 [34 , 45],    79   
//                 [44 , 56 , 78 , 88]    88

//                 [4 , 26 , 72 , 47 , 26]175
// 打印, 游泳时间持续最持久的那个人

// var arr = [
//     {
//         xing: "老王",
//         nian: 12,
//         you: [98, 12, 34]
//     },
//     {
//         xing: "小唐",
//         nian: 21,
//         you: [34, 45]
//     },
//     {
//         xing: "小李",
//         nian: 13,
//         you: [44, 56, 78, 88]
//     },
//     {
//         xing: "小张",
//         nian: 18,
//         you: [4, 26, 72, 47, 26]
//     }
// ]

// var aa = 0
//     var c = ""
//     for (var i = 0; i < arr.length; i++) {
//         var al = 0
//         for (var j = 0; j < arr[i].you.length; j++) {
//             al = al + arr[i].you[j]
//         }
//         if (al > aa) {

//             c = arr[i].xing
//             aa = al
//         }
//     }

//     console.log(aa,c);
// var arr = [
//         {
//             name: "张三",
//             age: 12 , 
//             money: [100 , 2 , 5 , 10]
//         } , 
//         {
//             name: "李四" , 
//             age:13,
//             money: [10 , 50 , 5 , 2]
//         },
//         {
//             name: "王五",
//             age: 15 , 
//             money: [50 , 100]
//         }
//     ]

//     var a = 0
//     // var b = ""
//     for (var i = 0; i < arr.length; i++) {
//         var all = 0
//         for (var j = 0; j < arr[i].money.length; j++) {
//             all = all + arr[i].money[j]
//         }
//         if (all > a) {
//             a = all
//             // b = arr[i]
//         }
//     }

//     console.log(a );