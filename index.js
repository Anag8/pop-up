

const btnEl = document.getElementById("btn");
const okEl = document.getElementById("ok")
const popupEl = document.getElementById("pop-up")
btnEl.addEventListener("click",()=>{
    
    popupEl.style.display = "block"
    popupEl.style.transition = "all ease .3s"
})
okEl.addEventListener('click',()=>{
    popupEl.style.display = "none"
})