const html_p = document.querySelector('#html')
const style = document.querySelector('#style')

let p = `/*这是一段文字，现在，
 *我用这段文字展示一下js与css的基础能力
 *首先，准备一个div
 **/
#div{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来，我要把这个div变成一个太极图
 *首先把div变成一个圆
 */
#div{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0.5);
    border: none;
}
/*太极分阴阳，
 *用一黑一白划分这个div
 **/
#div{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个神秘的小球 */
#div::before{
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div::after{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
 `
let temp = ''

let count = 0

function step() {
    setTimeout(() => {
        console.log(count)
        if (count < p.length - 1) {
            step()
        }
        switch (p[count]) {
            case '\n':
                temp += '<br>';
                break;
            case ' ':
                temp += '&nbsp;';
                break;
            default:
                temp += p[count]
        }
        count++
        html_p.innerHTML = temp
        style.innerHTML = p.substring(0,count)
        window.scrollTo(0,window.innerHeight)
        html_p.scrollTo(0,html_p.scrollHeight)
    }, 0)
}

step()
