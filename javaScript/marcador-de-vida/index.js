function marcadorVida (vida, classe) {
    let novaVida = 0;

    if (classe === 1) {
        novaVida = vida -20;     
    } else if (classe === 2) {
        novaVida = vida - 30;
    } else if (classe === 3) {
        novaVida = vida -40;
    } else {
        novaVida = vida - 50;
    }

    if (novaVida <= 0) {
        return "PERDEU";
    } else {
        return novaVida;
    }
}

