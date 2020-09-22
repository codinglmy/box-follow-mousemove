//简化querySelector
function $(selector){
    return document.querySelector(selector)
}

const box = $('#box')
const body = $('body')

box.style.left = localStorage.getItem('posX') - 50 + "px"
box.style.top = localStorage.getItem('posY') - 50 + "px" 

let isDown = false

box.addEventListener('mousedown',()=>{
    isDown = true
})
box.addEventListener('mouseup',()=>{
    isDown = false
})
box.addEventListener('mouseleave',()=>{
    isDown = false
})

box.addEventListener('mousemove',(e)=>{
    if(isDown){
        let x = e.pageX
        let y = e.pageY
        console.log(x + "," +y)
        box.style.left = x - 50 + "px"
        box.style.top = y - 50 + "px" 
        localStorage.setItem('posX',x)
        localStorage.setItem('posY',y)
    }
})

