var cao  =  9
 
   if (cao == 0) {
      
       console.log("取钱");
       
   }
   else if (cao == 1){
       console.log("查账余额");
       
   }
   else if(cao == 2){
       console.log("修改密码");
       
   }
   else if (cao == 3){
    console.log("转账");
    
}
else if (cao == 4){
    console.log("退卡");
    
}
else if (cao == 5){
    console.log("退卡 ");
    
}
else if ( cao >= 6 && cao <= 9  ){
    console.log("系统正在处理这几个操作 请稍后 ");
    
}

else if (cao >= 10){
    console.log("别瞎输入 ");
    
}

//    0: 取钱 
// 1: 存钱
// 2: 
// 3: 修改密码
// 4: 转账
// 5: 退卡
// 6 ~ 9: 系统正在处理这几个操作 请稍后 
// >= 10: 别瞎输入