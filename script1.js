let signupBtn = document.querySelector('.signupBtn');
let logoBox = document.querySelector('.logoBox');
let signupForm = document.querySelector('form');

signupBtn.addEventListener('click', ()=>{
    mainCont.classList.add('opacity');
    setTimeout(()=>{
        mainCont.classList.add('noDisp');
        logoBox.classList.remove('noDisp');
        logoBox.classList.add('fadeIn');
        signupForm.classList.remove('noDisp');
        signupForm.classList.add('formFadeIn');
    }, 1000)
});