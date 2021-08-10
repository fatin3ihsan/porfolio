let burger= document.getElementById("burger");
burger.addEventListener("click",function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
  })

const logo = document.getElementsByClassName("logo")[0];

logo.addEventListener("mouseenter",function(){
    logo.classList.add ("animate__animated" ,"animate__rubberBand");
})

logo.addEventListener("mouseleave",function(){
    logo.classList.remove ("animate__animated" ,"animate__rubberBand");
})