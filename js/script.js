/*
a. Chiedi all’utente il suo nome,
b. poi chiedi il suo cognome,
c. poi chiedi il suo colore preferito
d. Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

const yourName = prompt("Inserisci il nome");
const surname = prompt("Inserisci il cognome");
const color = prompt("Inserisci il tuo colore preferito");

const passwordGenerated = yourName+surname+color+22;

console.log(passwordGenerated);

document.getElementById("yourPassword").innerHTML = passwordGenerated;