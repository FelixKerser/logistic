let how_much = document.getElementById('how-much-btn');
let how_much_form = document.getElementById('how-much-form');
let x_btn = document.getElementById('x-btn');

let form_how_much = function(){
    how_much_form.style.display='block';
}

let close_form = function(){
    how_much_form.style.display='none';
}

how_much.onclick = form_how_much;
x_btn.onclick = close_form;