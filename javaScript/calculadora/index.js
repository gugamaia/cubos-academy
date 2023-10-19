function calculadora (numero1, numero2, operacao) {

    if(operacao === "soma") {
        return numero1 + numero2;
    } else if (operacao ==="subtracao") {
        return numero1 - numero2;
    } else if (operacao === "multiplicacao") {
        return numero1 * numero2;
    } else if (operacao === "divisao") {
        return numero1/ numero2;
    }

}
