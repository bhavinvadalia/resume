var count = 0;
invokeCount()

function invokeCount(){
    fetch('https://myapione.azure-api.net/myfirstvisitcounter/HttpTrigger1?name=getcount')
        .then(res =>{
                res.text().then(r => console.log(r))
        })
        
}