function UserValidation(){
    var fnev = document.getElementById("felhaszanlonev").value;
    var email = document.getElementById("email").value;
    var jelszo = document.getElementById("jelszo").value;
    var mjelszo = document.getElementById("mjelszo").value;

    if(fnev === ''){
        document.getElementById("message").innerHTML = "Felhasználónév megadása kötelező";
    }
    if(email === ''){
        document.getElementById("message").innerHTML = "Email-cím megadása kötelező";
    }
    if(jelszo === ''){
        document.getElementById("message").innerHTML = "Jelszo megadása kötelező";
    }
    if(jelszo != mjelszo){
        document.getElementById("message").innerHTML = "A két jelszó nem egyezik";
    }
    
}