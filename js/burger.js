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

document.getElementById('burger-icon').onclick = burger_open;
document.getElementById('x-icon').onclick = burger_close;