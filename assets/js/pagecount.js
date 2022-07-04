var count = 0;
invokeCount()

function invokeCount(){
    fetch('https://myapione.azure-api.net/myfirstvisitcounter/HttpTrigger1?name=getcount')
        .then(res => console.log('d',res.text()))
}