document.querySelector("#submit").addEventListener("click",()=> {
    const user = document.querySelector('#login').value
    const pw = document.querySelector("#password").value
    const login = JSON.stringify({username: user, password: pw})
    url = 'https://supermercadoosarina.varejofacil.com/api/auth'
    fetch(url, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
          },
        body: login,

        

}).then((data)=>{
    console.log(data.status)
    if(data.status == 200){
        document.querySelector('.modal').classList.add('active')
    }
}).catch((err)=>{console.log(err)})
})