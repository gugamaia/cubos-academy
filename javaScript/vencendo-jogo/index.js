function resultadoJogo (placar) {
    
    let quantidadeGolsTimeA = placar[0]
    let quantidadeGolsTimeB = placar[1]
    
    if (quantidadeGolsTimeA > quantidadeGolsTimeB){
        return "TIME A";
    } else if  (quantidadeGolsTimeA < quantidadeGolsTimeB) {
        return "TIME B";
    } else {
        return "EMPATE";
    }
}
