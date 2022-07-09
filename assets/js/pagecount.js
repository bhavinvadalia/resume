

(function invokeCount(){
    fetch('https://myapione.azure-api.net/myfirstvisitcounter/HttpTrigger1?name=getcount')
        .then(response => response.text())
        .then(data => {
            myval = JSON.parse(data)
            console.log(myval.count)
            document.getElementById('pagec').innerHTML = myval.count
        });
    fetch('https://myapione.azure-api.net/myfirstvisitcounter/put-item?name=setcount')
        .then(response => response.text())
})();