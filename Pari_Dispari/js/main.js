/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/ 



// l'untente inserisci pari o dispari ed un numero a sua scelta tra 1 e 5
const sceltaUtente = prompt('Inserisci pari o dispari');
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

//verifico se il numero inserito è tra 1 e 5
if((numeroUtente < 1)||(numeroUtente > 5) ){
    alert('Numero non valido!! RIPROVA.');
}else if(isNaN(numeroUtente)){
    alert('Non hai inserito un numero');
}

// il pc inserisce il suo numero
let numeroPc = generaNumeroCasuale(1,5);
console.log('Numero del pc è:' + numeroPc);

// Sommiamo i due numeri
let somma = numeroUtente + numeroPc;
console.log('La somma dei due numeri è:' + somma);

// Visualizziamo il risultato della somma 
let risultato = calcolaPariDispari(somma);
console.log('Il risultato è:' + risultato);

//Vediamo il vincitore
if(risultato === sceltaUtente){
    console.log("L'utente ha vinto");
}else{
    console.log("Il computer ha vinto");
}


// genero la funzione random per il pc (numeri da 1 a 5)
function generaNumeroCasuale(min,max){
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroCasuale;
}

//genero la funzione per verificare se i numeri sono pari o dispari
function calcolaPariDispari (numeroDaControllare){
    let risultatoCalcolo = '';
    if(numeroDaControllare % 2 == 0){
        risultatoCalcolo = 'Il numero è pari';
    }else{
        risultatoCalcolo = 'Il numero è dispari';
    }
    return risultatoCalcolo;
}
