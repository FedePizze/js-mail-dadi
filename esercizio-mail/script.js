/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 
*/

const mailList = ['CapitanoArcher@gmail.com', 'CapitanoKirk@gmail.com', 'CapitanoPicard@gmail.com', 'CapitanoSisko@gmail.com', 'CapitanoJaneway@gmail.com']
let mail = prompt('Inserissca la sua mail capitano!')

for (let i = 0; i < mailList.length; i++) {

    if(mailList[i] == mail.value) {
        var login = true
    }

    if(login = true) {
        document.getElementById('risultato').innerHTML = 'Sei un vero capitano stellare';

    } else {
        document.getElementById('risultato').innerHTML = 'Attenzione! Allarme rosso, alzare gli scudi!';

    }
}