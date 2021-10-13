

// let numero = 0 ;

// let selezioneDiv = document.querySelector("div.container")
// let quadrato = document.createElement("div.box") ;

const sec = document.querySelector("div.container")






for (let i = 1; i < 101; i++){
     
     // numero = i;

     // selezioneDiv.append(quadrato);
     // quadrato.append(numero)
     if ((i % 3 == 0) && (i % 5  == 0)){
          console.log("ciao 5 and 3")
     }

     else if (i % 3 == 0) {
          console.log("ciao 3");
     }

     else if (i % 5  == 0) {
          console.log("ciao 5")
     }

     const element = `<div class="box">${i}</div>`;
     sec.insertAdjacentHTML('beforeend', element)
}










