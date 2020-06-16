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

        

}).then(r =>  r.json().then(data => ({status: r.status, body: data})))
.then(obj => console.log(obj)).catch(function(err){
    console.log("Deu um erro aqui ó", err)
})
    console.log(login)

})