// Aula 09 - 26/08/21
// Grupo 3 - Thiago Lima, Katherine Duarte, Juliana Rosa, Denny Ribeiro, Wallace Souza
// Objetivo - Microondas

/* O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.*/

function tempos(tempo, padrao) {
    if (tempo >= (2 * padrao) && tempo < ((3 * padrao))) {
        console.log("A comida queimou!")
    } else if (tempo < padrao) {
        console.log("Tempo insuficiente!")
    } else if (tempo >= (3 * padrao)) {
        console.log("Kabumm!")
    } else if (tempo = padrao && tempo < (2 * padrao)) {
        console.log("Prato pronto, bom apetite!!!")
    }
}

function microondas(selecao, tempo) {
    let padrao;
    switch (selecao) {
        case 1:
            padrao = 10;
            tempos(tempo, padrao);
            break;

        case 2:
            padrao = 8;
            tempos(tempo, padrao);
            break;

        case 3:
            padrao = 15;
            tempos(tempo, padrao);
            break;

        case 4:
            padrao = 12;
            tempos(tempo, padrao);
            break;

        case 5:
            padrao = 8;
            tempos(tempo, padrao);
            break;

        default:
            console.log("Prato inexistente!")
    }
}

microondas(6, 30);

/* Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";*/


/* Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"; */


/* Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”; */


/* No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!" */

