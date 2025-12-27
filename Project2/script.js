const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
let backGround=document.querySelector('body')
let colorId=null
function setbg(){
    let x=Math.floor(Math.random()*256)
    let y=Math.floor(Math.random()*256)
    let z=Math.floor(Math.random()*256)

    backGround.style.backgroundColor=`rgb(${x},${y},${z})`
}
    
start.addEventListener('click',function(){
    if(colorId===null){
        colorId=setInterval(setbg,500)
    }
});

stop.addEventListener('click',()=>{
    clearInterval(colorId)
    colorId=null
});