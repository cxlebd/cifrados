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

btnCifrarCesar.addEventListener('click', e => {
    e.preventDefault();

    const texto = cesarInput.value.toUpperCase();
    const cesarRango = document.querySelector('#cesar-rango').value;
    
    cesarOutput.value = cesar(texto, cesarRango);
    
});

btnDescifrarCesar.addEventListener('click', e => {
    e.preventDefault();
    
    const texto = cesarInput.value.toUpperCase();
    const cesarRango = document.querySelector('#cesar-rango').value;
    
    cesarOutput.value = descesar(texto, cesarRango);
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

const descesar = (texto, desp) => {
    let resultado = "";
    let despl = (desp % 27 + 27) % 27;

    for(let i = 0; i<texto.length; i++){
        if(abecedario.indexOf(texto[i]) != -1){
            let posicion = ((abecedario.indexOf(texto[i]) - despl) % 26);
            resultado += abecedario[posicion];
            
        } else {
            resultado += texto[i];
        }
    }
    return resultado.toLowerCase();
}

function trnsps (key, msg) {
    let {map}=[],_l,_n=0;
    //Build the lookup indices from the key
    let _key = key 
        .split('') //Split the key
        .sort()    //Sort it alphabetically
        .map ((l,i) => key.indexOf (l)) //map it to the original index
        .map (n => {
              let r=_l==n?n+ ++_n:n+(_n=0); 
              _l=n;
              return r
         }) //increase the index for every consecutive character
    //Map the alphabetical indices to characters
    msg = map.call (msg, c => typeof c=="number"?String.fromCharCode(c^96):c)
   //Encode the input with the given key
    let enc = map.call (msg, (c,i) => (
     msg[_key[i]] 
   ));
   //Map the message to column indexes
    return msg.map (c => -~enc.indexOf (c));
}

console.log(trnsps('caleb', 'hol ami nombre es calebsito rex'));