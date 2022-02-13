let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome (){
    let txtNome= document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.'))  {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    }else {
        txtNome.innerHTML = 'E-mail Válido'
        txtNome.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande. digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOK == true && emailok == true && assuntoOK == true){
        alert ('Formulário enviado com sucesso!')
    }else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
   mapa.style.width = '800px'
   mapa.style.length = '600px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.length = '250px'
}



