/* First Slideshow */
const slideshowSlide = document.querySelector('.slideshow-slide');
const slideshowImage = document.querySelectorAll('.slideshow-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let count = 0
const width = slideshowImage[count].clientWidth;

slideshowSlide.style.transform = 'translateX(' + (-width * count) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(count >= 12){
        return;
    }
    slideshowSlide.style.transition = "transform 0.4 ease in out";
    count++;
    slideshowSlide.style.transform = 'translateX(' + (-width * count) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(count <= 0){
        return;
    }
    slideshowSlide.style.transition = "transform 0.4 ease in out";
    count--;
    slideshowSlide.style.transform = 'translateX(' + (-width * count) + 'px)';
});

slideshowSlide.addEventListener('transitioned', ()=>{
    if(slideshowImage[count].id === 'lastItem'){
        slideshowSlide.style.transition = "none";
        count = slideshowImage.length - 2;
        slideshowSlide.style.transform = 'translateX(' + (-width * count) + 'px)';
    }
    if(slideshowImage[count].id === 'firstItem'){
        slideshowSlide.style.transition = "none";
        count = slideshowImage.length - count;
        slideshowSlide.style.transform = 'translateX(' + (-width * count) + 'px)';
    }    
});

/* Second SlideShow */

const slideshowSlide2 = document.querySelector('.slideshow-slide2');
const slideshowImage2 = document.querySelectorAll('.slideshow-slide2 img');
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

let count2 = 0
const width2 = slideshowImage2[count2].clientWidth;

slideshowSlide2.style.transform = 'translateX(' + (-width2 * count2) + 'px)';

nextBtn2.addEventListener('click',()=>{
    if(count2 >= 12){
        return;
    }
    slideshowSlide2.style.transition = "transform 0.4 ease in out";
    count2++;
    slideshowSlide2.style.transform = 'translateX(' + (-width2 * count2) + 'px)';
});

prevBtn2.addEventListener('click',()=>{
    if(count2 <= 0){
        return;
    }
    slideshowSlide2.style.transition = "transform 0.4 ease in out";
    count2--;
    slideshowSlide2.style.transform = 'translateX(' + (-width2 * count2) + 'px)';
});

slideshowSlide2.addEventListener('transitioned', ()=>{
    if(slideshowImage2[count2].id === 'lastItem'){
        slideshowSlide2.style.transition = "none";
        count2 = slideshowImage2.length - 2;
        slideshowSlide.style.transform = 'translateX(' + (-width2 * count2) + 'px)';
    }
    if(slideshowImage2[count2].id === 'firstItem'){
        slideshowSlide2.style.transition = "none";
        count2 = slideshowImage.length - count;
        slideshowSlide2.style.transform = 'translateX(' + (-width2 * count2) + 'px)';
    }    
});

