const projects_slideshow=document.querySelector('#projects')
const img=document.querySelectorAll('#projects img')

const prev =document.querySelector('.prev');
const next =document.querySelector('.next');
let slideIndex=0;

let clickedButton=false;

img[slideIndex].style.display='block';
prev.addEventListener('click',function()
{
    var i; 
    clickedButton=!clickedButton;
    if (clickedButton) {
        for (i = 0; i < img.length; i++) { img[i].style.display='none';} 

    slideIndex--;
    if (slideIndex < 0) {slideIndex=img.length-1};
    img[slideIndex].style.display='block';

    clickedButton=false;}
});

next.addEventListener('click',function()
{
    var i; 
    clickedButton=!clickedButton;
    if (clickedButton) {
        for (i = 0; i < img.length; i++) { img[i].style.display='none';} 
    
    slideIndex++;
    if (slideIndex > img.length-1) {slideIndex=0};
    img[slideIndex].style.display='block';

    clickedButton=false;}
});



