
//scroll top meno change background start 
let top_meno = document.querySelector("#top_meno");
let scroll_top = document.querySelector(".scroll_top");
window.onscroll = function(){
    let SCROLL = window.scrollY;
    if(SCROLL >= 10){
        top_meno.classList.add("new_top_meno")
        scroll_top.style.display="block"
    }else{
        top_meno.classList.remove("new_top_meno")
        scroll_top.style.display="none"
    }
 }

//scroll top meno change background end





// click top meno item show start
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let news = document.querySelector("#news");
let galary = document.querySelector("#galary");
let blog = document.querySelector("#blog");
let contact = document.querySelector("#contact");

home.addEventListener("click", function(){
    window.scrollTo(0,0);
})
about.addEventListener("click", function(){
    window.scrollTo(0,550);
})
news.addEventListener("click", function(){
    window.scrollTo(0,1000);
})
galary.addEventListener("click", function(){
    window.scrollTo(0,3460);
})
blog.addEventListener("click", function(){
    window.scrollTo(0,4220);
})
contact.addEventListener("click", function(){
    window.scrollTo(0,4740);
})


scroll_top.addEventListener("click", function(){
    window.scrollTo(0,0);
})

// click top meno item show end




















































































// Img animaation slider start
let big_img = document.querySelector("#big_img");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");

img2.addEventListener("click", function(){
    big_img.src = "img2.jpg"
})
img3.addEventListener("click", function(){
    big_img.src = "img3.jpg"
})
img4.addEventListener("click", function(){
    big_img.src = "img4.jpg"
})
img5.addEventListener("click", function(){
    big_img.src = "img5.jpg"
})
img6.addEventListener("click", function(){
    big_img.src = "img6.jpeg"
})
// Img animaation slider end



// auto change background start

let image = ['22.jfif','33.jfif','44.jfif','55.jfif','66.jfif'];
let index = 0 ;

let img = document.querySelector("#img");
setInterval(change,2000);
function change(){
    index++;
    if(index >= image.length){
        index = 0;
        img.src = image[index];
    }
    else{
        img.src = image[index];
    }
}
// auto change background end