var img = document.getElementById("csshead3")
var up = document.getElementById("up")
var left = document.getElementById("left")
var right = document.getElementById("right")
var down = document.getElementById("down") 
img.style.bottom = '20px';
img.style.left = '20px';
img.style.scale = '1';

up.addEventListener("click",()=>{
    var imgTop = parseInt(img.style.bottom);
    console.log(imgTop);    
    if(imgTop <= 200){
        img.style.bottom = `${parseInt(img.style.bottom) + 5}px`
    }else{
        img.style.bottom = '20px';
    }
})
down.addEventListener("click",()=>{
    var imgDown = parseInt(img.style.bottom)
    console.log(imgDown);
    if(imgDown >= -50){
        img.style.bottom = `${parseInt(img.style.bottom) - 5}px`
    } else{
        img.style.bottom = '20px';
    }
    
})
left.addEventListener("click",()=>{
    var imgleft = parseInt(img.style.left);
    console.log(imgleft);
    if (imgleft >= 0) {
        img.style.left = `${parseInt(img.style.left) - 5}px`
    } else{
        img.style.left = '20px';
    }
    
    
})
right.addEventListener("click",()=>{
    var imgRight = parseInt(img.style.left);
    console.log(imgRight);
    if (imgRight <= 280) {
        img.style.left = `${parseInt(img.style.left) + 5}px`
    } else{
        img.style.left = '20px';
    }
    
})
function double(){
    img.style.scale = `${parseInt(img.style.scale)  + 0.2}`
}

