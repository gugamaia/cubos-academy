function solution (pesoLadoA1, pesoLadoA2, pesoLadoB1, pesoLadoB2 ) {
    const somaLadoA = pesoLadoA1 + pesoLadoA2;
    const somaLadoB = pesoLadoB1 + pesoLadoB2;

    if(somaLadoA > somaLadoB) {
        return "LADO A";
    } else if (sumSideB > sumSideA) {
        return "LADO B";
    } else {
        return "EQUILIBRIO";
    }
    
}
