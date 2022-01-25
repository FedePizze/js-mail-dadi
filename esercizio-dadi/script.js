/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const dado1 = ["1", "2", "3", "4", "5", "6"];
const dado2 = ["1", "2", "3", "4", "5", "6"];

const random1 = Math.floor(Math.random() * dado1.length);
const random2 = Math.floor(Math.random() * dado2.length);

const user = (dado1[random1]);
console.log(user);

const computer = (dado2[random2]);
console.log(computer);


let genera = document.getElementById('genera')
let annulla = document.getElementById('annulla')



genera.addEventListener('click',
    function() {

        if(user > computer) {
            document.getElementById('risultato').innerHTML = 'hai vinto';
        } else if(computer > user) {
            document.getElementById('risultato').innerHTML = 'hai perso';
        } else {
            document.getElementById('risultato').innerHTML = 'pareggio';
        }
    }
);

annulla.addEventListener('click',
    function() {
        annulla = window.location.reload();
    }
);