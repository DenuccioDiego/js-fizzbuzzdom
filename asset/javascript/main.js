

// let numero = 0 ;

// let selezioneDiv = document.querySelector("div.container")
// let quadrato = document.createElement("div.box") ;

const sec = document.querySelector("div.container")






for (let i = 0; i < 100; i++){
     
     // numero = i;

     // selezioneDiv.append(quadrato);
     // quadrato.append(numero)

     const element = `<div class="box">${i}</div>`;
     sec.insertAdjacentHTML('beforeend', element)
}










