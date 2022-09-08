let how_much = document.getElementById('how-much-btn');
let how_much_form = document.getElementById('how-much-form');
let x_btn = document.getElementById('x-btn');
let x_btn2 = document.getElementById('x-btn2');
let x_btn3 = document.getElementById('x-btn3');
let x_btn4 = document.getElementById('x-btn4');
let close_btn = document.getElementById('cancel-form');
let call_form_btn = document.getElementById('call-form-call');


let form_how_much = function(){
    how_much_form.style.display='block';
    document.getElementById('popup1').style.display='flex';
}

let form_call = function(){
    document.getElementById('order-call').style.display="block";
    document.getElementById('popup3').style.display='flex';
}

let close_form = function(){

    how_much_form.style.display='none';
    document.getElementById('order-call').style.display="none";
    document.getElementById('zakaz-consl').style.display = 'none';
    document.getElementById('show-more').style.display = 'none';
    document.getElementById('popup1').style.display='none';
    document.getElementById('popup2').style.display='none';
    document.getElementById('popup3').style.display='none';
    document.getElementById('popup4').style.display='none';
}

let form_consl = function(){
    document.getElementById('zakaz-consl').style.display = 'block';
    document.getElementById('popup2').style.display='flex';
}

let show_more = function(){
    document.getElementById('show-more').style.display = 'block';
    document.getElementById('popup4').style.display='flex';
}

document.getElementById('lang-id').addEventListener("mouseover",function() {
    document.getElementById('raskr-id').style.display = "block";
    document.getElementById('triangle-comp').style.transform='rotate(0.5turn)';
})

document.getElementById('lang-id').addEventListener("mouseout",function() {
    document.getElementById('raskr-id').style.display = "none";
    document.getElementById('triangle-comp').style.transform='rotate(1turn)';
})

let burger_open = function(){
    document.getElementById('mob-menu').style.transform = 'translateX(0%)';
    document.getElementById('burger-icon').style.display = 'none';
    document.getElementById('x-icon').style.display = 'block';
}

let burger_close = function(){
    document.getElementById('mob-menu').style.transform = 'translateX(101%)';
    document.getElementById('burger-icon').style.display = 'block';
    document.getElementById('x-icon').style.display = 'none';
}


how_much.onclick = form_how_much;
x_btn.onclick = close_form;
x_btn2.onclick = close_form;
x_btn3.onclick = close_form;
x_btn4.onclick = close_form;
close_btn.onclick = close_form;
call_form_btn.onclick = form_call;
document.getElementById('zakaz-btn').onclick = form_consl;
document.getElementById('show-numbers').onclick = show_more;
document.getElementById('burger-icon').onclick = burger_open;
document.getElementById('x-icon').onclick = burger_close;


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