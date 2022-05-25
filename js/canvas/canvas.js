let canvas = document.getElementById('board')
let ctx = canvas.getContext('2d')
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
ctx.fillStyle = 'black'
ctx.strokeStyle = 'black'
ctx.lineWidth = 10
ctx.lineCap = 'round'

let painting = false
let last = []

let isTouchDevice = 'ontouchstart' in document.documentElement
console.log(isTouchDevice)

if (isTouchDevice) {
    canvas.ontouchstart = (e)=>{
        last = [e.touches[0].clientX,e.touches[0].clientY]
    }
    canvas.ontouchmove = (e)=>{
        // console.log(e)
        drawLine(last[0],last[1],e.touches[0].clientX,e.touches[0].clientY)
        last = [e.touches[0].clientX,e.touches[0].clientY]
    }
} else {
    canvas.onmousedown = (e) => {
        painting = true
        last = [e.clientX,e.clientY]
    }
    canvas.onmousemove = (e) => {
        if (painting === true) {
            drawLine(last[0],last[1],e.clientX,e.clientY)
            last = [e.clientX,e.clientY]
        } else {
            console.log('do nothing')
        }
    }
    canvas.onmouseup = () => {
        painting = false
    }
}

function drawLine(startX,startY,endX,endY){
    ctx.beginPath()
    ctx.moveTo(startX,startY)
    ctx.lineTo(endX,endY)
    ctx.stroke()
}