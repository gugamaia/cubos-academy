function solucaoNPS (respostas, quantidadeDetratores, quantidadePromotores, quantidadeTotal) {
    
    let quantidadePromotores = 0;
    let quantidadeDetratores = 0;

    for (let item of respostas) {
        if (item === 9 || item === 10) {
            quantidadePromotores++;
        } else if (item >= 0 && item <= 6) {
            quantidadeDetratores++;
        }
    }
    let quantidadeTotal = respostas.length;
    let nps = (quantidadePromotores - quantidadeDetratores) / quantidadeTotal * 100;
    return nps;
}
