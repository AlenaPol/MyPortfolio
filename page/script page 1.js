const imageLeft_1=document.querySelector('.titul_nav_left_1');
const imageRight_1=document.querySelector('.titul_nav_right_1');
const imageLeft_2=document.querySelector('.titul_nav_left_2');
const imageRight_2=document.querySelector('.titul_nav_right_2');

const textLeft_1=document.querySelector('.titul_text_left_1');
const textRight_1=document.querySelector('.titul_text_right_1');
const textLeft_2=document.querySelector('.titul_text_left_2');
const textRight_2=document.querySelector('.titul_text_right_2');
let imageNav=false;

imageLeft_1.addEventListener('mouseover',function()
{
    imageNav=!imageNav;
    textLeft_1.style=imageNav ? 'color:black;' : 'color:red'; 
});




