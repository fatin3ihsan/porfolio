const logo = document.querySelector("li");

logo.addEventListener("mouseenter",function(){
    logo.classList.add ("animate__animated" ,"animate__rubberBand");
})

logo.addEventListener("mouseleave",function(){
    logo.classList.remove ("animate__animated" ,"animate__rubberBand");
})