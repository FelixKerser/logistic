let x_btn2 = document.getElementById('x-btn2');

let form_call = function(){
    document.getElementById('order-call').style.display="block";
    document.getElementById('popup3').style.display='flex';
}

call_form_btn.onclick = form_call;

let close_call = function(){
    document.getElementById('popup3').style.display='none';
}

x_btn2.onclick = close_call;