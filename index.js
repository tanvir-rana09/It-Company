
// (function(){
//     // Scroll Event
//     (window).on('scroll', function(){
//         var scrolled = (window).scrollTop();
//         if (scrolled > 600) ('.navbar').addClass('go-top');
//         if (scrolled < 600) ('.navbar').removeClass('go-top');
//     });  
//     // Click Event
//     // $('.go-top').on('click', function() {
//     //     $("html, body").animate({ scrollTop: "0" }, 100);
//     // });
// });

/*
// Header Sticky
$(window).on('scroll',function() {
    if ($(this).scrollTop() > 120){  
        $('.navbar-area').addClass("is-sticky");
    }
    else{
        $('.navbar-area').removeClass("is-sticky");
    }
});
*/

let bar = document.querySelector(".bars");

bar.addEventListener("click", () => {
    document.querySelector("#active").classList.toggle('extra')
    if (document.querySelector("#active").classList.contains('extra')) {
        bar.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else {
        bar.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
});

let navbar = document.querySelector('.navbar');
window.addEventListener("scroll",()=>{
    navbar.classList.toggle('sticky',window.scrollY)
})
let header = document.querySelector('header');
let chutkil = document.querySelector('.chutkil');
window.addEventListener("scroll",()=>{
    chutkil.classList.toggle('chutki',window.scrollY)
})

chutkil.addEventListener("click",()=>{
    ("html, body").animate({ scrollTop: "0" }, 100)
})