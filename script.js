
const mensagens = document.getElementById("mensagens");
const pergunta = document.getElementById("pergunta");
const materiaEscolhida = document.getElementById("materiaEscolhida");

let materiaAtual = "";

// Trocar de tela
function mostrarTela(tela) {
    document.querySelectorAll(".tela").forEach(secao => {
        secao.classList.remove("ativa");
    });

    document.getElementById(tela).classList.add("ativa");
}

function mostrarEstudo() {
    mostrarTela("estudo");
}

function voltarInicio() {
    mostrarTela("inicio");
}

// Escolher matéria
function selecionarMateria(materia) {
    materiaAtual = materia;
    materiaEscolhida.textContent = materia;

    mensagens.innerHTML = "";

    adicionarMensagem(
        "professora",
        `Olá! 💗 Vamos estudar ${materia}! Qual conteúdo você gostaria de aprender hoje?`
    );

    mostrarTela("chat");
}

// Adicionar mensagens na conversa
function adicionarMensagem(tipo, texto) {
    const mensagem = document.createElement("div");
    mensagem.className = `mensagem ${tipo}`;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = tipo === "professora" ? "🤖" : "👩🏻‍🎓";

    const conteudo = document.createElement("div");

    const nome = document.createElement("strong");
    nome.textContent = tipo === "professora" ? "Prof IA" : "Você";

    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;

    conteudo.appendChild(nome);
    conteudo.appendChild(paragrafo);

    mensagem.appendChild(avatar);
    mensagem.appendChild(conteudo);

    mensagens.appendChild(mensagem);

    mensagens.scrollTop = mensagens.scrollHeight;
}

// Resposta provisória da professora
function gerarResposta(texto) {
    const textoNormalizado = texto.toLowerCase();

    if (textoNormalizado.includes("exercício") ||
        textoNormalizado.includes("exercicio")) {
        return `Vamos praticar ${materiaAtual}! 📚

Me diga qual conteúdo dessa matéria você está estudando para eu preparar um exercício.`;
    }

    if (textoNormalizado.includes("dica")) {
        return `💡 Minha dica: tente identificar os conceitos principais de ${materiaAtual} e entender como eles se relacionam.

Qual é o assunto específico em que você está com dificuldade?`;
    }

    if (textoNormalizado.includes("resumo")) {
        return `Claro! 💗 Qual conteúdo de ${materiaAtual} você quer que eu resuma? Posso explicar de maneira simples e organizada.`;
    }

    return `Entendi sua dúvida sobre ${materiaAtual}! 💗

Para te ajudar melhor, me conte qual conteúdo específico você está estudando. Assim podemos trabalhar na explicação passo a passo.`;
}

// Enviar pergunta
function enviarPergunta() {
    const texto = pergunta.value.trim();

    if (!texto) {
        pergunta.focus();
        return;
    }

    adicionarMensagem("aluna", texto);

    pergunta.value = "";

    const resposta = gerarResposta(texto);

    adicionarMensagem("professora", resposta);

    pergunta.focus();
}

// Botões de atalho
function atalho(texto) {
    pergunta.value = texto;
    enviarPergunta();
}

// Enviar usando Enter
function verificarEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enviarPergunta();
    }
}
