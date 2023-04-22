let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n));
        
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass
}


function copyPassword(){
    if (navigator.clipboard) {
       navigator.clipboard.writeText(novaSenha)
         .then(() => alert("Senha copiada"))
         .catch(() => {
           
           const textarea = document.createElement('textarea');
           textarea.value = novaSenha;
           document.body.appendChild(textarea);
           textarea.select();
           document.execCommand('copy');
           document.body.removeChild(textarea);
           alert("Senha copiada")
         });
    } else {
    
       const textarea = document.createElement('textarea');
       textarea.value = novaSenha;
       document.body.appendChild(textarea);
       textarea.select();
       document.execCommand('copy');
       document.body.removeChild(textarea);
       alert("Senha copiada")
    }
 }
