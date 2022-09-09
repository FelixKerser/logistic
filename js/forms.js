let how_much = document.getElementById('how-much-btn');
let how_much_form = document.getElementById('how-much-form');
let x_btn = document.getElementById('x-btn');
let x_btn3 = document.getElementById('x-btn3');
let x_btn4 = document.getElementById('x-btn4');
let close_btn = document.getElementById('cancel-form');
let call_form_btn = document.getElementById('call-form-call');


let form_how_much = function(){
    how_much_form.style.display='block';
    document.getElementById('popup1').style.display='flex';
}

let close_form = function(){

    how_much_form.style.display='none';
    document.getElementById('order-call').style.display="none";
    document.getElementById('zakaz-consl').style.display = 'none';
    document.getElementById('show-more').style.display = 'none';
    document.getElementById('popup1').style.display='none';
    document.getElementById('popup2').style.display='none';
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

how_much.onclick = form_how_much;
x_btn.onclick = close_form;
x_btn3.onclick = close_form;
x_btn4.onclick = close_form;
close_btn.onclick = close_form;
document.getElementById('zakaz-btn').onclick = form_consl;
document.getElementById('show-numbers').onclick = show_more;
