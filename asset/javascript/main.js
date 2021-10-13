//Dichiarazione variabile selezionando il contenitore principale 
const container_principale = document.querySelector("div.container")


//Imposto le condizini per il ciclo . Creazione box colorati.
for (let i = 1; i < 101; i++) {
     

     //In questa condizione il ciclo usera il contatore "i" per riempire le caselle quindi "i" sarà il contenuto del div 
     if (!((i % 3 == 0) || (i % 5  == 0))) { 
          const boxColorato = `<div class="box standard_color">${i}</div>`;       //dichiarazione variabile con creazione div
          container_principale.insertAdjacentHTML('beforeend', boxColorato);      //immissione della variabile (dichiarata nella riga antecedente) nel contenitore principale   
     }


     //In questa condizione il ciclo riempe le caselle con "fizz buzz"
     else if ((i % 3 == 0) && (i % 5  == 0)) {
          const boxColorato = `<div class="box fizz_buzz_color">fizz buzz</div>`;  //dichiarazione variabile con creazione div
          container_principale.insertAdjacentHTML('beforeend', boxColorato);       //immissione della variabile (dichiarata nella riga antecedente) nel contenitore principale   
     }


     //In questa condizione il ciclo riempe le caselle con "fizz"
     else if (i % 3 == 0) {
          const boxColorato = `<div class="box fizz_color">fizz</div>`;            //dichiarazione variabile con creazione div
          container_principale.insertAdjacentHTML('beforeend', boxColorato);       //immissione della variabile (dichiarata nella riga antecedente) nel contenitore principale   
     }


     //In questa condizione il ciclo riempe le caselle con "buzz"
     else if (i % 5  == 0) {
          const boxColorato = `<div class="box buzz_color">buzz</div>`;             //dichiarazione variabile con creazione div
          container_principale.insertAdjacentHTML('beforeend', boxColorato);        //immissione della variabile (dichiarata nella riga antecedente) nel contenitore principale   
     }

}










