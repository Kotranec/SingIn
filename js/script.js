document.querySelector("#signup-submit").onclick = function(event){
    event.preventDefault();
   
let name = document.querySelector('#signup-name').value;
let pass = document.querySelector('#signup-pass').value;
let email = document.querySelector('#signup-email').value;
let birthday = document.querySelector('#signup-birthday').value;
let sex = document.querySelectorAll('.sex');

//Работает, но нельзя сделать break;
// let sexChecked = "";
// sex.forEach(function(event){
//     if (event.checked) {
//         sexChecked = event.value;        
//     }
// });

for(i = 0; i <= 2; i++) {
    if (sex[i].checked) {
        sex = sex[i].value;
        break;
    }
}

let data = {
    "name" : name,
    "pass" : pass,
    "email" : email,
    "birthday" : birthday,
    "sex" : sex
}

ajax('core/signup.php', 'POST', signup, data);

function signup(e){
    
    if (e == 2){
        // alert("Error! Please fill in all the fields");    
        M.toast({html: 'Error! Please fill in all the fields'});    
    } else if (e == 1) {
        // alert('Successfully. Now you can enter your account');
        M.toast({html: 'Successfully. Now you can enter your account'});  
        closeModal();
        
    } else {
        // alert('Error! Please register again later');
        M.toast({html: 'Error! Please register again later'});  
    }

}


}



document.querySelector("#login-submit").onclick = function(event){
    event.preventDefault();
   
let email = document.querySelector('#login-email').value;
let pass = document.querySelector('#login-pass').value;



let data = {
    "email" : email,
    "pass" : pass
}

ajax('core/login.php', 'POST', login, data);

function login(e){
    
    if (e == 2){
        // alert("Error! Please fill in all the fields");
        M.toast({html: 'Error! Please fill in all the fields'});  
              
    } else if (e == 0) {
        // alert('Error! User is not found');
        M.toast({html: 'Error! User is not found'});

    } else {
        console.log(e);
        e = JSON.parse(e);
        console.log(e);

        var d = new Date();
        d.setTime(d.getTime() + (100*60*1000));
        var expires = d.toUTCString();

        document.cookie = `email = ${e.email}; expires=${expires}; path=/`;
        location.reload();
        location.href="cabinet.php";

    }

}
}



document.querySelector(".rules-agree").onclick = function (){
    // if (e.checked) {
    //     e.classList.remove('disabled');  
    // } else {
    //     e.classList.add('disabled');  

    // }
    if (this.checked) {
        document.querySelector(".rul-ag").classList.remove('disabled');  
    } else {
        document.querySelector(".rul-ag").classList.add('disabled');  

    }
}
