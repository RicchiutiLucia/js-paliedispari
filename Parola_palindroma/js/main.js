/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//l'utente inserisce una parola
const parolaUtente = prompt('Inserisci una parola');


//invoco la funzione e verifico se la parola dell'utente è palindroma
let palindroma = parolaPalindroma(parolaUtente);
if(parolaUtente == palindroma){
    console.log('La parola è palindroma');
}else{
    console.log('La parola non è palindroma');
}



//creo funzione per parola palindroma
function parolaPalindroma (parola){
    let palindroma='';
    for(let i = parolaUtente.length - 1; i >= 0; i--){
        palindroma += parolaUtente[i];
    }
    console.log(palindroma);
    return palindroma;
}