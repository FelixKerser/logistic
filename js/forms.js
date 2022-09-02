let how_much = document.getElementById('how-much-btn');
let how_much_form = document.getElementById('how-much-form');
let x_btn = document.getElementById('x-btn');
let x_btn2 = document.getElementById('x-btn2');
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
}

how_much.onclick = form_how_much;
x_btn.onclick = close_form;
x_btn2.onclick = close_form;
close_btn.onclick = close_form;
call_form_btn.onclick = form_call;
