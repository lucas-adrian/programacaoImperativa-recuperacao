const consertos = require('./consertos');

/* Micro desafio 2 */
let listaProntoTrue = consertos.filter(item => item.pronto === true)
let listaProntoFalse = consertos.filter(item => item.pronto === false)

function listas() {

    console.log("    LISTA DE APARELHOS MARCADOS COMO TRUE:   ");

    listaProntoTrue.forEach(item => {
        console.log(`Aparelho: ${item.aparelho}`);
    });
    console.log('-----------------------------------------------');
    console.log("    LISTA DE APARELHOS  MARCADOS COMO FALSE:   ");

    listaProntoFalse.forEach(item => {
      console.log(`Aparelho: ${item.aparelho}`);
    
    });
}
listas();

/*Micro desafio  3*/
console.log('--------------------------------------------------------------');
console.log(" LISTA DE APARELHOS MARCADOS COMO TRUE COM SOMA DE VALORES: ");
let listaProntoSoma = consertos.map(item => item.pronto === true ? `Aparelho: ${item.aparelho}, itens consertados: ${item.itensConsertados.map(item2 => item2)}. Valor total : ${item.valores.reduce((a, b) => a + b)}` : '');
console.log(listaProntoSoma);