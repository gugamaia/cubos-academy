function jogoSinuca (jogadorA, somaJogadorA, somaJogadorB) {
    for( let item of jogadorA) {
        somaJogadorA = somaJogadorA + item;
    }

    let somaJogadorB = 120 - somaJogadorA;

    if(somaJogadorA > somaJogadorB){
        return "JOGADOR A GANHOU"
    } else if (somaJogadorB > somaJogadorA){
        return "JOGADOR B GANHOU"
    } else {
        return "Empate"
    }
    }
