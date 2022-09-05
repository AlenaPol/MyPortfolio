const buttonSubmit=document.querySelector('.contact_feedback_button');
const contactForm=document.querySelector('.contact_form');
const contactInput=document.querySelector('.contact_form_input_name');
let buttonForm=false;

buttonSubmit.addEventListener('click',function()
{
    buttonForm=!buttonForm;
    contactForm.style=buttonForm ? 'display:block;' : 'display:none;';
    if(buttonForm) contactInput.focus();
});