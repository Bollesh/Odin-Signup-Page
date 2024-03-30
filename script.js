let mainCont = document.querySelector('.mainCont');
let passInp = document.getElementById('password');
let passCheck = document.querySelector('#passCheck');
let submitBtn = document.querySelector('#submitBtn');
let inputs = document.querySelectorAll('input');
let emailInp = document.getElementById("email");
let nameInp = document.getElementById('username');

nameInp.addEventListener('input', (e)=>{
    if(e.target.checkValidity()){
        document.querySelector(`label[for = "${nameInp.id}"]`).style.textShadow = "1px 1px 1px green";
        document.querySelector(`label[for = "${nameInp.id}"]`).style.color = "rgb(200,255,200)";
    }
    else{
        document.querySelector(`label[for = "${nameInp.id}"]`).style.textShadow = "0 0 1px red";
        document.querySelector(`label[for = "${nameInp.id}"]`).style.color = "rgb(255,200,200)";
    }
});

emailInp.addEventListener('input', (e)=>{
    if(e.target.checkValidity()){
        document.querySelector(`label[for = "${emailInp.id}"]`).style.textShadow = "1px 1px 1px green";
        document.querySelector(`label[for = "${emailInp.id}"]`).style.color = "rgb(200,255,200)";
    }
    else{
        document.querySelector(`label[for = "${emailInp.id}"]`).style.textShadow = "0 0 1px red";
        document.querySelector(`label[for = "${emailInp.id}"]`).style.color = "rgb(255,200,200)";
    }
});

passInp.addEventListener('input', ()=>{
    document.querySelectorAll('.circle').forEach(circ=>{
        circ.style.display = "block";
    });
    if(passInp.value === ""){
        document.getElementById('bad').style.opacity = "0.2";
        document.getElementById('good').style.opacity = "0.2";
        document.getElementById('ok').style.opacity = "0.2";
    }
    if(/[A-Z]|[a-z]/.test(passInp.value) || /[0-9]/.test(passInp.value) || /[\W]/.test(passInp.value)){
        document.getElementById('bad').style.opacity = "1";
        document.getElementById('ok').style.opacity = "0.2";
        document.getElementById('good').style.opacity = "0.2";
    }
    if(/[A-Za-z]/.test(passInp.value) && /[0-9]/.test(passInp.value) || /[A-Za-z]/.test(passInp.value) && /[\W]/.test(passInp.value) || /[0-9]/.test(passInp.value) && /[\W]/.test(passInp.value)){
        document.getElementById('ok').style.opacity = "1";
    }
    if(/[A-Za-z]/.test(passInp.value) && /[\W]/.test(passInp.value) && /[\W]/.test(passInp.value)){
        document.getElementById('good').style.opacity = "1";
    }

    if(passCheck.value != ''){
        confirmPass();
    }
});

passCheck.addEventListener('input', ()=>{
    confirmPass();
});

submitBtn.addEventListener('click', (evt)=>{
    if(!passMatch()){
        evt.preventDefault();
    }
});

function passMatch(){
    if(passCheck.value == passInp.value){
        return true;
    }
    else{
        return false;
    }
}

function confirmPass(){
    if(passMatch()){
        document.querySelector(`label[for = "${passCheck.id}"]`).style.textShadow = "1px 1px 1px green";
        document.querySelector(`label[for = "${passCheck.id}"]`).style.color = "rgb(200,255,200)";
        document.querySelector(`label[for = "${passInp.id}"]`).style.textShadow = "1px 1px 1px green";
        document.querySelector(`label[for = "${passInp.id}"]`).style.color = "rgb(200,255,200)";
        document.querySelector(`label[for = "${passCheck.id}"]`).innerHTML = "Confirm Password";
    }
    else{
        document.querySelector(`label[for = "${passCheck.id}"]`).style.textShadow = "0 0 1px red";
        document.querySelector(`label[for = "${passCheck.id}"]`).style.color = "rgb(255,200,200)";
        document.querySelector(`label[for = "${passCheck.id}"]`).innerHTML = "Confirm Password (passwords don't match)";
    }
}