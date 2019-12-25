// var nian = 7
// yue = 2
//     if (nian <= 0) {console.log("输入有误");}
//        else  if (nian % 4 == 0 && nian % 100!= 0 || nian % 400 == 0) {
//             {console.log("闰年")}
//      if (yue == 1 || yue == 3 || yue == 5 || yue == 7 || yue == 8 || yue == 10 || yue == 12 ) {
//         console.log("31");      
//      }
//      else if (yue == 4 || yue == 6 || yue == 9 || yue == 11  ) {
//         console.log("30");      
//     } 
//     else if (yue == 2) {
//         console.log("29");    
//      }else   {
//     console.log("输入错误");      
//      }  


// }
// else{ {console.log("平年")}
//     if (yue == 1 || yue == 3 || yue == 5 || yue == 7 || yue == 8 || yue == 10 || yue == 12 ) {
//         console.log("31");      
//      }
//      else if (yue == 4 || yue == 6 || yue == 9 || yue == 11  ) {
//         console.log("30");      
//     } 
//     else if (yue == 2) {
//         console.log("28");    
//      }else   {
//     console.log("输入错误");      
//      }  
// }
// var nian = 0
//     yue  = 2
// if (nian ) {

// }else
// if (yue == 1 || yue == 3 || yue == 5 || yue == 7 || yue == 8 || yue == 10 || yue == 12 ) {
//     console.log("31");      
//  }
//  else  {
//     console.log("30");      
// } 
// var a = 4
// a += ++a
// console.log(a);

var nain = 1
yue = 5
ri = 12
tian = 0
switch (yue - 1) {
    case 12:
        tian = tian + 31
    case 11:
        tian = tian + 30
    case 10:
        tian = tian + 31
    case 9:
        tian = tian + 30
    case 8:
        tian = tian + 31
    case 7:
        tian = tian + 31
    case 6:
        tian = tian + 30
    case 5:
        tian = tian + 31

    case 4:
        tian = tian + 30
    case 3:
        tian = tian + 31
    case 2:
        tian = tian + 28
    case 1:
        tian = tian + 31
    default:
      break;

}

 tian = tian +ri 
console.log(tian);
