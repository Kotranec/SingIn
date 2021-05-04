/*
let xhttp = new XMLHttpRequest();
xhttp.open('post', 'back.php', true); //true - значит асинхронный режим

xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("name=Petya");

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this);
    }
}
*/
function ajax(url, method, functionName, dataArray){
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true); //true - значит асинхронный режим

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(requestData(dataArray));

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            functionName(this.response);
        } 
    }

}

function requestData(dataArr){
    let out = '';
    for (let key in dataArr){
        out += `${key}=${dataArr[key]}&`;        
    }
    return out;
}

// function f1(data){
//     console.log(data);
// }

// let a = {
//     "name" : "ivan",
//     "age" : 53
// }

// ajax('back.php', 'POST', f1, a);