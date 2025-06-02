const form = document.querySelector('#form');

const user = document.querySelector('#felhasznalonev');

const email = document.querySelector('#email');

const password = document.querySelector('#jelszo');

const check = document.querySelector('#mjelszo');

let registeredUser = {};

form.addEventListener('submit', (e) => {
   e.preventDefault();

    if(validateInputs()){
    registeredUser = {
        username: user.value,
        email: email.value,
        password: password.value
    };
    console.log(registeredUser);

    document.getElementById('pmessage').textContent = "Regisztráltál";
    document.getElementById('link').textContent = "Vissza a főoldalra";
    form.querySelector('button[type="submit"]').disabled = true;
  }
});



function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.errMessage');
    errorElement.innerText = message;
    inputGroup.classList.add('.errMessage');
    inputGroup.classList.remove('.success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.errMessage');
    errorElement.innerText = ' ';
    inputGroup.classList.add('.success');
    inputGroup.classList.remove('.errMessage');
}


function validateInputs(){
    const usernameValid = user.value.trim();
    const emailValid = email.value.trim();
    const passValid = password.value.trim();
    const checkValid = check.value.trim();

    let success = true;

    if(usernameValid === ''){
        success = false;
        setError(user, 'Felhasználónév megadása kötelező');
    }
    else{
        setSuccess(user);
    }
    if(emailValid === ''){
        success = false;
        setError(email, 'E-mail cím megadása kötelező');
    }
    else{
        setSuccess(email);
    }
    if(passValid === ''){
        success = false;
        setError(password, 'Jelszó megadása kötelező');
    }
    else if(passValid.length < 8){
        setError(password, 'A jelszónak legalább 8 karakter hosszúnak kell lennie');
    }
      else if(passValid.length > 128){
        setError(password, 'A jelszó hosszúsága nem mehet 128 karakter fölé');
    }
    else{
        setSuccess(password);
    }
    if(checkValid === ''){
        success = false;
        setError(check, 'Erősítsd meg a jelszavad');
    }
    else{
        setSuccess(check);
    }

    return success;
};



const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function(){
    form.reset();
    form.querySelector('button[type="submit"]').disabled = false;
    registeredUser = {};
});
