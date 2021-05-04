
let userEmail = getCookie('email');
 console.log(userEmail);

ajax("core/get_user_data.php", 'POST', getUserData, { "email": userEmail });

 function getUserData(result){
    result = JSON.parse(result); 
    

    document.querySelector("#cab-name").value = result.name;
    document.querySelector("#cab-pass").value = result.password;
    document.querySelector("#cab-birthday").value = result.birthday;   
    M.updateTextFields();

}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.querySelector('#cab-submit').onclick = function (event) {
    event.preventDefault();

    let updateData = {
        "email" : userEmail,
        "name" : document.querySelector('#cab-name').value,
        "pass" : document.querySelector('#cab-pass').value,
        "birthday" : document.querySelector('#cab-birthday').value

    }
    // console.log(updateData);
       
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);




}

function updateUserData (result){
    console.log(result);
    if (result == 1){
        M.toast({html: 'Update complit'});
    } else {
        M.toast({html: 'Update error!'})
    }
}