const botao = document.querySelector("#botaoMensagem");
const mensagem =document. querySeclector("#mensagemInterativa")
botao. addEventListener("click", mostrarMensagem);
function mostrarMensagem() {
    mensagem.textContent=
    "Vocẽ acabou de criar uma interação com JavaScript"
}