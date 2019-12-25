var music_data = [
    {
        url: "./sources/audio/海阔天空.m4a",
        img: "./sources/image/海阔天空.jpg",
        name: "海阔天空"
    },
   
    {
        url: "./sources/audio/断点.m4a",
        img: "./sources/image/断点.jpg",
        name: "断点"
    }
]




function create_row(obj) {
    var tmp_li = `
        <li class="row" onclick="row_fn(this)">
            <div class="row_l">
                <div style="background-image:url(` + obj.img + `)" class="m_img"></div>
                <div class="m_name">
                    <span>` + obj.name + `</span>
                </div>
            </div>
            <div class="row_r">
                <div class="m_btns">
                    <audio is_you="false" class="my_audio" src=""></audio>
                    <span onclick="playFn(this)" url="` + obj.url + `" class="play_btn">播放</span>
                </div>
                <div class="m_time">
                    <span>00:00/00:00</span>
                </div>
            </div>
        </li>
    `

    return tmp_li
}