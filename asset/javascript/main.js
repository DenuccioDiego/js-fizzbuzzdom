
const container_principale = document.querySelector("div.container")

for (let i = 1; i < 101; i++) {
     
     if (!((i % 3 == 0) || (i % 5  == 0))) {
          const boxColorato = `<div class="box standard_color">${i}</div>`;
          container_principale.insertAdjacentHTML('beforeend', boxColorato);
     }

     else if ((i % 3 == 0) && (i % 5  == 0)) {
          const boxColorato = `<div class="box fizz_buzz_color">fizz buzz</div>`;
          container_principale.insertAdjacentHTML('beforeend', boxColorato);
     }

     else if (i % 3 == 0) {
          const boxColorato = `<div class="box fizz_color">fizz</div>`;
          container_principale.insertAdjacentHTML('beforeend', boxColorato);   
     }

     else if (i % 5  == 0) {
          const boxColorato = `<div class="box buzz_color">buzz</div>`;
          container_principale.insertAdjacentHTML('beforeend', boxColorato);
     }

}










