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
}

let form_call = function(){
    document.getElementById('order-call').style.display="block";
}

let close_form = function(){

    how_much_form.style.display='none';
    document.getElementById('order-call').style.display="none";
    document.getElementById('zakaz-consl').style.display = 'none';
    document.getElementById('show-more').style.display = 'none';
}

let form_consl = function(){
    document.getElementById('zakaz-consl').style.display = 'block';
}

let show_more = function(){
    document.getElementById('show-more').style.display = 'block';
}

document.getElementById('lang-id').addEventListener("mouseover",function() {
    document.getElementById('raskr-id').style.display = "block";
})

document.getElementById('lang-id').addEventListener("mouseout",function() {
    document.getElementById('raskr-id').style.display = "none";
})

let burger_open = function(){
    document.getElementById('mob-menu').style.display = 'block';
    document.getElementById('burger-icon').style.display = 'none';
    document.getElementById('x-icon').style.display = 'block';
}

let burger_close = function(){
    document.getElementById('mob-menu').style.display = 'none';
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


