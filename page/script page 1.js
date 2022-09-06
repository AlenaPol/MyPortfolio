const imageLeft=document.querySelectorAll('.titul .titul_img');

const buttonNext=document.querySelectorAll('.titul .titul_further');
const buttonFon=document.querySelectorAll('.titul .titul_box');

// let imageNav=false;

imageLeft.addEventListener('mouseover',function()
{
    // imageNav=!imageNav;
    // if (imageNav) {
        imageLeft.style= 'display:none;';
        buttonNext.style= 'display:block;';
        buttonFon.style='display:block;';
    // }
    // imageLeft.style=imageNav ? 'color:black;' : 'color:red'; 
});

imageLeft.addEventListener('mouseup',function()
{
    // imageNav=!imageNav;
    // if (imageNav) {
        imageLeft.style= 'display:block;';
        buttonNext.style= 'display:none;';
        buttonFon.style='display:none;';
    // }
    // imageLeft.style=imageNav ? 'color:black;' : 'color:red'; 
});






