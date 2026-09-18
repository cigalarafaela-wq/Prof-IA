// ===============================
// PROF IA - SCRIPT PRINCIPAL
// ===============================

function mostrarEstudo() {
    document.getElementById("inicio").classList.remove("ativa");
    document.getElementById("chat").classList.remove("ativa");
    document.getElementById("estudo").classList.add("ativa");

    window.scrollTo(0, 0);
}

function voltarInicio() {
    document.getElementById("estudo").classList.remove("ativa");
    document.getElementById("chat").classList.remove("ativa");
    document.getElementById("inicio").classList.add("ativa");

    window.scrollTo(0, 0);
}

function selecionarMateria(materia) {
    document.getElementById("estudo").classList.remove("ativa");
    document.getElementById("inicio").classList.remove("ativa");
    document.getElementById("chat").classList.add("ativa");

    document.getElementById("materiaEscolhida").textContent = materia;

    const mensagens = document.getElementById("mensagens");

    mensagens.innerHTML = `
        <div class="mensagem professora">
            <div class="avatar">🤖</div>
            <div>
                <strong>Prof IA</strong>
                <p>
                    Oi! 👋 Você escolheu <strong>${materia}</strong>!
                    <br><br>
                    Qual é a sua dúvida? Vou tentar explicar de uma forma simples. 💗
                </p>
            </div>
        </div>
    `;

    window.scrollTo(0, 0);
}

function enviarPergunta() {
    const campo = document.getElementById("pergunta");
    const texto = campo.value.trim();

    if (!texto) {
        return;
    }

    adicionarMensagem("Você", texto, "aluno");

    const resposta = gerarResposta(texto);

    setTimeout(function() {
        adicionarMensagem("Prof IA 🤖", resposta, "professora");
    }, 400);

    campo.value = "";
}

function adicionarMensagem(nome, texto, tipo) {
    const mensagens = document.getElementById("mensagens");

    const mensagem = document.createElement("div");
    mensagem.className = "mensagem " + tipo;

    mensagem.innerHTML = `
        <div class="avatar">${tipo === "professora" ? "🤖" : "👩‍🎓"}</div>
        <div>
            <strong>${nome}</strong>
            <p>${texto}</p>
        </div>
    `;

    mensagens.appendChild(mensagem);

    mensagens.scrollTop = mensagens.scrollHeight;
}

function gerarResposta(pergunta) {
    const texto = pergunta.toLowerCase();

    if (texto.includes("2 + 2") || texto.includes("2+2")) {
        return "2 + 2 = <strong>4</strong>! 🧮";
    }

    if (texto.includes("oi") || texto.includes("olá") || texto.includes("ola")) {
        return "Oi! 💗 Estou pronta para estudar com você. Pode me mandar sua dúvida!";
    }

    if (texto.includes("não entendi") || texto.includes("nao entendi")) {
        return "Sem problema! 😊 Vou tentar explicar de um jeito mais simples. Me diga qual parte você não entendeu.";
    }

    if (texto.includes("ajuda")) {
        return "Claro! 💗 Me diga qual é a matéria e qual é a sua dúvida.";
    }

    return "Entendi! 📚 Ainda estou aprendendo a responder esse tipo de pergunta. Tente escrever sua dúvida de forma mais específica ou use um dos atalhos acima. 💗";
}

function atalho(texto) {
    const campo = document.getElementById("pergunta");

    campo.value = texto;
    enviarPergunta();
}

function verificarEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enviarPergunta();
    }
}