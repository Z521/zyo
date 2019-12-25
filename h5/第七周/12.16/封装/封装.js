function $(name, b) {
    function css(a) {
        for (var key in a) {
            this.style[key] = a[key]
            // console.log(a[key]);
        }
        return this
    }
    function click(call_back ) {
                this.onclick = function () {
                    call_back()
                }
        
                return this 
            }
    var ele
    if (b == undefined) {
        ele = document.querySelector(name)
        ele.css = css
        ele.click = click
    }

    return ele
}
// function $(name , b) {
//     function css(a) {
//         for (var key in a) {
//             this.style[key] = a[key]
//         }

//         return this
//     }


//     function click(call_back , index) {
//         this.onclick = function () {
//             call_back(index)
//         }

//         return this 
//     }

//     var ele
//     if (b == undefined) {
//         ele = document.querySelector(name)
//     } else if (b == "all") {
//         ele = document.querySelectorAll(name)
//     }
//     if (ele.length === undefined) {
//         // 一个元素
//         ele.css = css
//         ele.click = click
//     } else {
//         // 多个元素
//         for (var i = 0; i < ele.length; i++) {
//             ele[i].css = css
//             ele[i].click = click
//         }
//     }
//     return ele
// }