(function(){

    let counter = document.querySelectorAll('.counter');
    let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
    window.addEventListener('scroll', function(){  
      if( limit == counter.length ){ return; }
      
      for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if( pos < win && counter[i].dataset.stop === "0" ){
          counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
          let x = 0;
          limit++; // Счетчик будет запущен, увеличиваем переменную на 1
          let int = setInterval(function(){
            // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
            x = x + Math.ceil( counter[i].dataset.to / 60 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
              //Как только досчитали - стираем интервал.
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 60);
        }
      }
    });

})();

let mob_lang_open = document.getElementById('mob-lang-opener');
let counter = 0;
let mob_lang_list_open = function(){
    counter++
    if (counter % 2){
        document.getElementById('mob-lang-open').style.display='block';
        document.getElementById('mob-triangle').style.transform='rotate(0.5turn)';
    } else {
        document.getElementById('mob-lang-open').style.display='none';
        document.getElementById('mob-triangle').style.transform='rotate(1turn)';
    }
}

mob_lang_open.onclick = mob_lang_list_open;