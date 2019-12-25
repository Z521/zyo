数据类型
基础数据类型  引用数据类型
参数的传递: 由实参到形参的传递过程,是一个值拷贝的过程
基础数据类型 拷贝的是 内容
引用数据类型 拷贝的是 地址

数据类型的转换
隐式转换
显示转换(强制转化)

number  --->  string
1. number + "abc"
2. number.toString()
3. String(number)


array   ----->   string
1. array.toString()
2. array.join("")
3. JOSN.stringify(array)
4. array + ""

dic   ----> string
1. dic.toString()   ----> [object , object]
2. String(dic)     -----> [object , object]
3. dic + ""    ----->  [object , object]
4. JOSN.stringify(dic)   ---->  dic字符串


点击事件
    任何一个函数 都会有this
    当一个函数作为元素事件的时候
    该函数内部会多出一个事件对象 event


    给元素绑定点击事件
    1. 在标签上直接写 onclick="xxx(this)"
        当标签被点击的时候, (window)去执行xxx()
        所以: xxx函数中的this代表window
        function (a) {} 中的a 会代表该标签
    2. 脚本先获取到元素
        给获取到的元素绑定 onclick事件
        让给onclick事件绑定到一个函数中
        所以: 该函数内部的this代表该元素
        只能添加一个监听者函数
    3. 脚本先获取到元素
        元素.addEventListener("click" , function () {
        })
        可以添加多个监听者函数

    
    capture: 捕获 ↓
    Propagation: 冒泡 ↑

    事件的捕获 和 事件的冒泡
    元素.addEventListener("click" , function () {

    } , useCapture(bool))
    useCapture: 是否使用 捕获阶段  默认:false
    addEventListener: 默认走冒泡阶段
    onclick: 默认走冒泡阶段

    阻止元素的冒泡
    event.stopPropagation()

函数
    函数要想执行, 一定的调用
    函数()---->调用
    函数的结果 一定是 return
    return : 两个作用
        1. 返回函数的结果
        2. 提前结束函数
    函数的参数 
    函数定义的时候: 形参 
    函数调用的时候: 实参
    函数的嵌套调用
    函数做为实参-----> 函数的回调


   // function my_http_fn(url , success , error) {
    //     var req = new XMLHttpRequest()
    //     req.open("GET" , url , true)
    //     req.send()
    //     req.onreadystatechange = function () {
    //         if (req.readyState == 4 && req.status == 200) {
    //             success(req.responseText)
    //         } else {
    //             error(req.error)
    //         }
    //     }
    // }

    // my_http_fn("网易...." , function (res) {
    //     console.log(res)
    // } , function (err) {
    //     console.log(err)
    // })

// var a = 8
// var b = String(a) + "abc"