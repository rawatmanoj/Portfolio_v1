const navSlide=(()=>{

const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav_links');
const navlinks= document.querySelectorAll('.nav_links li');

burger.addEventListener('click',()=>{

nav.classList.toggle('nav-active');



navlinks.forEach((link,index)=>{

    if(link.style.animation){
        link.style.animation='';
    }else{

    link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
    
    }
    });

    burger.classList.toggle('toggle');
    

});


})();



// function smoothScroll(target,duration){

// var target=document.querySelector(target);
// var targetPosition=target.getBoundingClientRect().top;
// var startPosition=window.pageYOffset;
// var distance=targetPosition-startPosition;
// var startTime=null;


// }

// smoothScroll('.secondanchor',1000);