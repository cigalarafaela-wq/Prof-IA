const resposta = document.getElementById("resposta");
const pergunta = document.getElementById("pergunta");

function responder() {
    const texto = pergunta.value.trim();

    if (!texto) {
        resposta.innerHTML = "💭 Digite uma pergunta primeiro!";
        return;
    }

    resposta.innerHTML = `
        <strong>🤖 Prof IA:</strong><br><br>
        Entendi sua pergunta! 💗<br><br>
        Você perguntou:<br>
        <strong>"${texto}"</strong><br><br>
        📚 Estou preparando uma resposta para você!
    `;

    pergunta.value = "";
}

function enviarPergunta() {
    responder();
}

pergunta.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        responder();
    }
});