
// for (var i = 0; i < 100; i++) {
//     shi = i % 10
//     ge = parseInt(i / 10)
//     if (i % 6 != 0 && shi != 6 && ge != 6) {
//         console.log(i);
//     }

// }


// 1. for 循环 逢6过



// 2. 1 ~ 100 , 打印出里面 各位不是7的倍数的 奇数
// for (var i = 1; i < 101; i++) {
//    if (i%7!=0 &&  i%2!=0) {
//        console.log(i);
//    }
// }



// 3. 50 ~ 98  将数字反过来打印
// Eg: 78  ----> 87


// for (var i = 50; i < 98; i++) {
//     bai = parseInt(i / 10)
//     g = i % 10

//     console.log( bai + g * 10 );
// }




// 4. 100 ~ 999   打印 水仙花数
//     865  --->  8立方 + 6立方 + 5立方 ==? 865
// for (var i = 100; i < 999; i++) {
//     bai = parseInt(i / 100)
//     ge = i % 10
//     shi = parseInt((i - bai * 100) / 10)
//     if (i == bai *  bai * bai +  shi * shi* shi + ge * ge *ge) {
//         console.log(i);
//     }
// }


//
// 5. 准备个数组 [12 ~ 36] , 实现 第2题的功能

//  var age = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 23 ,24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
// for (var i = 0; i < age.length ; i++) {

//     if (age  [ i ] % 7 != 0 && age[ i ] % 2 != 0) {
//         console.log(age[ i ]);
//     }


// }

// 6. 将第5题中的数组 按照第3题的功能 实现
// age = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
// for (var i = 0; i < age.length; i++) {
//     shi = parseInt(age[i] / 10)
//     g = age[i] % 10

//     console.log( shi + g * 10 );
// }




// 7. 准备一个数组 [20 ~ 45], 实现伪水仙花
//     34  --->  3立方 + 4立方 ==? 34

// var   age=[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,3,5,36,37,38,39,40,,41,42,43,44,45]
// for (var i = 0; age[i]<  age.length; i++) {
//     shi = parseInt(age[i]  / 10)
//     ge = age[i] % 10

//     if (age[i]==shi * shi* shi + ge * ge * ge *ge) {
//         console.log(age[i]  );
//     }
//     else{
//         console.log('没有' );
//     }
// }



// 8. 数组 [8 , 23 , 12 , 6 , 9]
//         求最大值, 并打印
// var age = [8, 23, 12, 6, 9]
// var max = min = age[0]
// for (var i = 1; i < age.length; i++) {
//     if (age[i] < min) {
//         min = age[i]
//     }
//     if (age[i] > max) {
//         max = age[i]
//     }
// } console.log(min, max);

// var age = [-1, -23, -22, -6, -96]
// max = xiao =age[0]
// for (var i=1 ; i < age.length ; i++){
//   if (age[i] > max) {
//     max = age[i]
//   }
//   if (age[i] < xiao) {
//     xiao = age[i]

//   }

// } console.log(max,xiao);


// var age = [8, 23, 12, 6, 9]
// var max = age[0]
// for (var i = 1; i < age.length; i++) {

//   max <  age[1] ? max  =  age[1] : null

// }console.log(max);


// var age = [18, 23, 6 , 12,19,10]
// var max = age[0]
// for (var i = 1; i < age.length; i++) {

//   max <  age[i] ? max  =  age[i] : null

// }console.log(max);
// 9. 第八题的数组 求 第二大值


// var age = [18, 230, 6, 120, 19, 10]
// var max = age[0]
// var max2 = age[0]

// for (var i = 0; i < age.length; i++) {
//     if (age[i] > max2) {
//         if (age[i] > max) {
//             max2 = max
//             max = age[i]
//         }
//         else {
//             max2 = age[i]
//         }
//     }
// }
// console.log(max, max2);


// var aaa = ["软件","按键", "屏幕", qq ]
// console.log(aaa);

// var  arr = [
//   {
//     name : "张一",
//     nain : 19,
//     fen :98 ,
//   },
//   {
//     name : "张二",
//     nain : 19,
//     fen :110 ,
//   },
//   {
//     name : "张三",
//     nain : 19,
//     fen :50 ,
//   },
//   {
//     name : "张四",
//     nain : 19,
//     fen :140 ,
//   }
// ]
// var fe = 0
//     ren = ""
//     for (var i = 0; i < arr.length; i++) {
//      if (arr[i].fen > fe) {
//        fe =arr[i].fen
//        ren = arr[i]

//      }

//     }console.log(ren.name);


// var  aa = {
//   mu : 1,
//   m : 12,
//   s: "电脑"
// }
// aaa = {
//   mu : 1,
//   m : 12,
//   s: "电脑"
// }
// console.log(aa.s,aaa.m);

// var arr = [
//   [1,2,3,4],
//   ["q","w","d","v"],
//   ["玩","嗯啊","嗯"],
//   [415445,44512,455,4512,]
// ]

// for (var i = 0; i < arr.length; i++) {
// var  er = arr[i]
//   for (var e = 0; e < er.length; e++) {
//     console.log(er[e]);
//   }
// }

// var arr = [
//   [1, 2, 3, 4],
//   ["q", "w", "d", "v"],
//   ["玩", "嗯啊", "嗯"],
//   [415445, 44512, 455, 4512,]
// ]
// for (var i = 0; i < arr.length; i++) {
//   var di = arr[i]
//   for (var y = 0; y < di.length; y++) {
//     console.log(di[y]);
//   }
// }


// for (var q = 0; q < arr.length; q++) {
//   var sa = arr[q]
//   for (var ib = 0; ib < sa.length; ib++) {
//     console.log(sa[ib]);

//   }
// }  
// for (var i = 1; i <= 9; i++) {
//   for (   var l=1 ; l<=i;l++){

//     console.log(i +"*" +"*"l==i,l);
//   }
// }
// for (var i = 1; i <= 9; i++) {
//   for (var index = ; index <= i; index++) {
//     console.log(i,index); 
//   }
// }
// for (var index = 1; index <= 9; index++) {
//  var kong=""
//   for (let i = 1; i <= index; i ++) {
//     kong += index + "*" + i  + "=" +   index * i +"  "


//   }
//   console.log(kong );
// }
// var format='\n',sum=format;
// for(var i=1;i<=9;i++){
//     for(var j=1;j<=i;j++){
//         sum+=i+'*'+j+"="+i*j+" ";

//     }
//     sum+=format;
// }
// console.log(sum);
