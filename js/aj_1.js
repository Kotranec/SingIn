// ajax(url, method, functionName, dataArray)

let data = {
    "name" : "Fedya",
    "year" : 45
}
ajax('core/back.php', 'POST', showP, data);

function showP(data){
    console.log('data');
}