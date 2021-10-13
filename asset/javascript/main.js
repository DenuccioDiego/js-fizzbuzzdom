

const sec = document.querySelector("div.container")


for (let i = 1; i < 101; i++){
     
     if (!((i % 3 == 0) || (i % 5  == 0))) {
          const element = `<div class="box standard_color">${i}</div>`;
          sec.insertAdjacentHTML('beforeend', element)
     }

     else if ((i % 3 == 0) && (i % 5  == 0)){
          const element = `<div class="box fizz_buzz_color">fizz buzz</div>`;
          sec.insertAdjacentHTML('beforeend', element)
          }

     else if (i % 3 == 0) {
          const element = `<div class="box fizz_color">fizz</div>`;
          sec.insertAdjacentHTML('beforeend', element)
          
     }

     else if (i % 5  == 0) {
          const element = `<div class="box buzz_color">buzz</div>`;
          sec.insertAdjacentHTML('beforeend', element)
     }

    
}










