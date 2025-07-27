const opcoes = ["papel", "tesoura", "pedra"];

function sorteio() {
    const escolhadaMaquina = Math.floor(Math.random() * opcoes.length);
    return opcoes[escolhadaMaquina];
}

function vencedor(jogador, maquina) {
    if (maquina === jogador) {
        return "empate!";
    } else if (
        (jogador === "pedra" && maquina === "tesoura") ||
        (jogador === "papel" && maquina === "pedra") ||
        (jogador === "tesoura" && maquina === "papel")
    ) {
        return "jogador Venceu!";
    } else {
        return "máquina venceu!";
    }
}

let pontuacaoJogador = 0;
let pontuacaoMaquina = 0;

const placarJogador = document.querySelector("h2 span");
const placarMaquina = document.querySelector("h3 span");
const resultadoTela = document.querySelector(".resultadoTela");

function jogar(escolhaDoJogador) {
    const escolhaDaMaquina = sorteio();
    const resultado = vencedor(escolhaDoJogador, escolhaDaMaquina);
    resultadoTela.textContent = resultado;

    if (resultado === "jogador Venceu!") {
        pontuacaoJogador++;
        placarJogador.textContent = pontuacaoJogador;
    } else if (resultado === "máquina venceu!") {
        pontuacaoMaquina++;
        placarMaquina.textContent = pontuacaoMaquina;
    }
}

// Adiciona os eventos de clique
document.getElementById("pedra").addEventListener("click", () => jogar("pedra"));
document.getElementById("papel").addEventListener("click", () => jogar("papel"));
document.getElementById("tesoura").addEventListener("click", () => jogar("tesoura"));