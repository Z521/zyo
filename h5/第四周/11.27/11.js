// var all = [
//     {
//         ming: 111,
//         die:0
//     },
//     {
//         ming:222,
//         die:0
//     },
//     {
//         ming:333,
//         die:0
//     },
//     {
//         ming:444,
//         die:0
//     },
//     {
//         ming: 555,
//         die:0
//     }
// ]
// var siren = 0 
// var baoshu  = 1
// var xiao = 0
// while (siren < 5) {
//     var ren = all[xiao]
//      xiao++ 
//     xiao =xiao % 5
//     if (ren.die == 0) {
//         if (baoshu == 7) {

//             siren++
//             console.log(ren.ming);

//             ren.die = 1
//             baoshu = 1
//         }else{
//             baoshu++
//         }
//     }


// }

// var phone_book = [


// ]
// var cao_zuo = ""

// while (cao_zuo != "结束") {
//     cao_zuo = prompt("请输入内容..., 结束-->结束")
//     if (cao_zuo == "结束") {
//         break;
//         }
//          else {
//             var arr = cao_zuo.split(" ")
//             if (arr[0] == "+") {
//         // 添加
//             var ren = {
//                 name: arr[1],
//                 tel: arr[2]
//             }
//             phone_book.push(ren)
//             console.log(phone_book)
//         }  
// else {
// // 查询
// for (var i = 0; i  < phone_book.length; i++) {
//     if (phone_book[i].name == arr[1]) {
//         console.log(phone_book[i].tel)
//     }
// }}


//     var ben = []
//     var caozuo = " "
//     while (caozuo != "结束") {
//         caozuo = prompt("请输入内容..., 输入结束结束")
//         if (caozuo == "结束") {
//             break;
//         }else{
//             var tain = caozuo.split(" ")
//             if (tain[0] == "+") {
//                 ren = {
//                     ming : tain[1],
//                     dianhua : tain[2]
//                 }
//                 ben.push(ren)
//                 console.log(ben);

//             }else 
//             if (tain[0] == "-") {
//                 var ming = tain[1]
//                 var xiabiao = " "
//                 for (var  i = 0; i < ben.length; i++) {
//                     if (xiabiao ==" ") {
//                         ben[i].ming = ming

//                     }
//                 }
//                 if (i != "") {
//                     ben.splice(xiabiao , 1)

//                 }console.log(ben);


//             }else 

//                 for (var  i = 0; i < ben.length; i++) {
//                     if ( ben[i].ming = tain [1]) {
//                         console.log(ben[i].dianhua);

//                     }
//                   }



//         }

//     }

// console.log("代码结束....")


// ddddd?
// var phone_book = [

// ]
// var cao_zuo = ""

// while (cao_zuo != "结束") {
//     cao_zuo = prompt("请输入内容..., 结束-->结束")
//     if (cao_zuo == "结束") {
//         break;
//     } else {
//         var arr = cao_zuo.split(" ") 
//         if (arr[0] == "+") {
//             // 添加
//             var ren = {
//                 name: arr[1],
//                 tel: arr[2]
//             }
//             phone_book.push(ren)
//         } else if (arr[0] == "-") {
//             // 删除
//             var name = arr[1]
//             var xia_biao = " "
//             for (var i = 0; i < phone_book.length; i++) {
//                 if (phone_book[i].name == name) {
//                     xia_biao = i
//                 }
//             }
//             if (i != " ") {
//                 phone_book.splice(xia_biao , 1)
//             }
//             console.log(phone_book)
//         } 
//         else {
//             // 查询
//             for (var i = 0; i < phone_book.length; i++) {
//                 if (phone_book[i].name == arr[1]) {
//                     console.log(phone_book[i].tel)
//                 }
//             }
//         }
//     }
// }

// function zhao(a) {
//     for (var i = 0; i < ben.length; i++) {
//         if (ben[i].name == a) {
//             return
//         }

//     }

// }
function xxx(a) {
    for (var i = 0; i < ben.length; i++) {
       if (ben[i].name == a) {
           return i
       }
    }
    
}
function shan(a) {
    var xiabiao = xxx(a)
    if (xiabiao != undefined) {
        ben.splice(xiabiao, 1)
    }

}
function jia(a, b) {
    var ren = {
        name: a,
        dian: b
    }
    ben.push(ren)
}
function chaxun(a) {
    for (var i = 0; i < ben.length; i++) {
       if (ben[i].name == a) {
           console.log(ben[i].dian);
           
       }
        
    }
}

