var botaoModoEscuro = document.getElementById('botaoModoEscuro')
var inputEmail = document.getElementById('emailLogin')
var inputSenha = document.getElementById('senhaLogin')
var camposLogin = document.getElementById('camposLogin')
var botaoEnviar = document.getElementById('botaoEnviar')
var emailSalvo = localStorage.getItem("email")
var senhaSalva = localStorage.getItem("senha")
var body = document.getElementsByTagName('body')[0]
var estadoModoEscuro = false

botaoModoEscuro.addEventListener('click', ativarModoescuro)
botaoEnviar.addEventListener('click', validarEmail)


function validarEmail(event) {
    event.preventDefault()

    if (inputEmail.value === emailSalvo && inputSenha.value === senhaSalva)
        window.location.href = "./chatbot.html"


    else {
        alert("Email ou senha incorreto, Tente novamente!")
    }
}

function ativarModoescuro() {
    if (estadoModoEscuro) {
        document.body.classList.remove('modoEscuro')

        botaoModoEscuro.style.background = '#504c41'
        body.style.background = '#eeeeee'
        botaoModoEscuro.style.borderColor = '#0c0c0c'

        botaoModoEscuro.innerHTML = '⚫'

        estadoModoEscuro = !estadoModoEscuro
    }
    else {
        document.body.classList.add('modoEscuro')

        botaoModoEscuro.style.background = '#f3f3f3ff'
        body.style.background = '#444444ff'
        botaoModoEscuro.style.borderColor = '#7e7e7eff'

        botaoModoEscuro.innerHTML = '⚪'

        estadoModoEscuro = !estadoModoEscuro
    }
}