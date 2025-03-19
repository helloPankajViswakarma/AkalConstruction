window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".header-bottom-nav");
    
    if (window.scrollY > 50) { // If scrolled down 50px
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});



// var loader =document.getElementById("preloader");
// window.addEventListener("load",function(){
//     loader.style.display="none"
    
// })

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000); // 1000 milliseconds (1 seconds) delay
});




