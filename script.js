const resposta = document.getElementById("resposta");
const pergunta = document.getElementById("pergunta");

function responder() {
  const texto = pergunta.value.trim();

  if (!texto) {
    resposta.innerHTML = "💭 Digite uma pergunta para eu te ajudar!";
    return;
  }

  resposta.innerHTML = `
    <strong>🤖 Prof-IA:</strong><br><br>
    Entendi sua pergunta! 💗<br><br>
    Para responder de forma correta, preciso analisar o conteúdo.
    Em breve esta versão estará conectada a uma inteligência artificial
    de verdade. 📚✨
  `;
}

pergunta.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    responder();
  }
});