const btnCesar = document.querySelector('#btn-cesar');
const btnTranspo = document.querySelector('#btn-transpo');
const formCesar = document.querySelector('#form-cesar');
const formTranspo = document.querySelector('#form-transpo');

const btnCifrarCesar = document.querySelector('#cifrar-cesar');
const btnDescifrarCesar = document.querySelector('#descifrar-cesar');
const cesarOutput = document.querySelector('#cesar-cifrado');
const cesarInput = document.querySelector('#cesar-original');
const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

btnCesar.addEventListener('click', () => {
    formCesar.style.display = 'block';
    formTranspo.style.display = 'none';
});

btnTranspo.addEventListener('click', () => {
    formCesar.style.display = 'none';
    formTranspo.style.display = 'block';    
});

cesarInput.addEventListener('keyup', () => {    
    const texto = cesarInput.value.toUpperCase();
    const cesarRango = document.querySelector('#cesar-rango').value;
    cesarOutput.value = cesar(texto, cesarRango);
});

const cesar = (texto, desp) => {
    let resultado = "";
    let despl = (desp % 27 + 27) % 27;

    for(let i = 0; i<texto.length; i++){
        if(abecedario.indexOf(texto[i]) != -1){
            let posicion = ((abecedario.indexOf(texto[i]) + despl) % 26);
            resultado += abecedario[posicion];
            
        } else {
            resultado += texto[i];
        }
    }
    return resultado.toLowerCase();    
}

btnDescifrarCesar.addEventListener('click', e => {
    e.preventDefault();

});

