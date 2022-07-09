

(function invokeCount(){
    fetch('https://myapione.azure-api.net/myfirstvisitcounter/HttpTrigger1?name=getcount')
        .then(response => response.text())
        .then(data => console.log(data));
        
})();