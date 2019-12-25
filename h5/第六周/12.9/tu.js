var music_data = [
    {
        url: "./images/寄.m4a",
        img: "./images/寄.jpg",
        name: "寄"
    },
    {
        url: "./images/光年之外.m4a",
        img: "./images/逃跑计划_世界_4.jpg",
        name: "光年之外"
    },
    {
        url: "./images/许嵩 - 幻听.mp3",
        img: "./images/许嵩_不如吃茶去_4.jpg",
        name: "许嵩 - 幻听"
    },
 
    {
        url: "./images/李瑨瑶 - 痴心绝对.mp3",
        img: "./images/周深_化身孤岛的鲸.jpg",
        name: "李瑨瑶 - 痴心绝对"
    },
    {
        url: "./images/春风吹.m4a",
        img: "./images/阿冷_春风吹_4.jpg",
        name: "春风吹"
    }
]

function create_row(obj) {
    var tmp_li = `
    <li class="row" onclick="row_fn(this)">
            <div>
                <div style="background-image:url(` + obj.img + `)" class="m_img "> </div>
                <div class="m_name"><span>`+ obj.name + `</span></div>
            </div>
            <div class="row_r">
                <div class="m_btns"> 
                    <audio  is_you="false" class="my_audio" src="" ></audio>
                   
                    <span onclick="playFn(this)"  url="` + obj.url + `" class="play_btn">播放</span> 
                </div>
                <div class="m_time">
                <span>00:00/00:00</span>
                </div>
            </div>
        </li>
    `
    return tmp_li
}
