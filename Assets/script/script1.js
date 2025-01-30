const hide = document.getElementById("hide");
const show = document.getElementById("reveal");
const img = document.getElementById("img");


console.log(hide);

hide.addEventListener("mouseover",()=>{
    img.style.display = "none";
})
reveal.addEventListener("mouseover",()=>{
    img.style.display = "";
})
