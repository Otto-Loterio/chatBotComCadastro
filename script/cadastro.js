var botaoModoEscuro = document.getElementById('botaoModoEscuro')
var camposLogin = document.getElementById('camposLogin')
var botaoEnviar = document.getElementById('botaoEnviar')
var nomeCadastrado = document.getElementById('cadastrarNome')
var emailCadastrado = document.getElementById('cadastrarEmail')
var senhaCadastrado = document.getElementById('cadastrarSenha')
var body = document.getElementsByTagName('body')[0]
var estadoModoEscuro = false

botaoModoEscuro.addEventListener('click', ativarModoescuro)
botaoEnviar.addEventListener('click', cadastrar)


function cadastrar(event) {
    event.preventDefault()  
    localStorage.setItem("email", emailCadastrado.value)
    localStorage.setItem("senha", senhaCadastrado.value)
    localStorage.setItem("nome", nomeCadastrado.value)

    alert("Cadastro realizado com sucesso!")
    window.location.href = "./index.html"
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