let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.getElementById('#txtNome');
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido';
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome Válido';
        txt.style.color = 'green';
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.getElementById('#txtEmail');
    if (email.value('@') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido';
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'E-mail Válido';
        txt.style.color = 'green';
        emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.getElementById('#txtAssunto');
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Mínimo de 100 caracteres necessários';
        txt.style.color = 'red';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true
    }
}

function enviar () {
    if(nomeOk == true && emailOK == true && assuntoOK == true) {
        alert ('formulário enviado com sucesso!')
    }else{
        alert ('preencha o formulário corretamente...')
    }
}