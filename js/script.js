SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
SearchForm.classList.toggle('active');

}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');

}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}


window.onscroll = () =>{

    SearchForm.classList.remove('active');

if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
}else{
    document.querySelector('.header .header-2').classList.remove('active');
}

}
// window.load = () =>{
// fadeOut();
// }

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader-container").style.visibility = "visible";
    } else {
        fadeOut();
        // document.querySelector(".loader-container").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


function loader (){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 500)
}



var swiper = new Swiper('.books-slider',{
loop: true,
centerdSlides:true,
autoplay: {
delay: 9500,
disableOnInteraction: false,
},


breakpoints: {
    0: {
        slidesPerView: 1,
        
    },
    768: {
        slidesPerView: 2,
        
    },
    1024: {
        slidesPerView: 3,
        
    },
    },
    });


var swiper = new Swiper('.featured-slider',{
    
    spaceBetween:10,
    loop: true,
    centerdSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
        breakpoints: {
            
            0: {
            slidesPerView: 1,
            
        },
        450: {
            slidesPerView: 2,
            
        },
        768: {
            slidesPerView: 3,
            
        },
        1024:{
            slidesPerView: 4,
        }
            },
            });

var swiper = new Swiper('.arrivals-slider',{

spaceBetween:10,
loop: true,
centerdSlides:true,
autoplay: {
    delay: 9500,
    disableOnInteraction: false,
},

    breakpoints: {
        
        0: {
        slidesPerView: 1,
        
    },
    
    768: {
        slidesPerView: 2,
        
    },
    1024:{
        slidesPerView: 3,
    }
        },
        });  
        
        var swiper = new Swiper('.reviews-slider',{
        grabCursor:true,

        spaceBetween:10,
        loop: true,
        centerdSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        
            breakpoints: {
                
                0: {
                slidesPerView: 1,
                
            },
            
            768: {
                slidesPerView: 2,
                
            },
            1024:{
                slidesPerView: 3,
            }
                },
                });    


var swiper = new Swiper('.blogs-slider',{
grabCursor:true,

spaceBetween:10,
loop: true,
centerdSlides:true,
autoplay: {
    delay: 9500,
    disableOnInteraction: false,
},

    breakpoints: {
        
        0: {
        slidesPerView: 1,
        
    },
    
    768: {
        slidesPerView: 2,
        
    },
    1024:{
        slidesPerView: 3,
    }
        },
        });    