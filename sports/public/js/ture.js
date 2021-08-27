var aback=document.querySelector('.back');
aback.onclick=function(){
    window.history.back(-1);
}
var address=document.querySelector('.address-wrap');
address.onclick=function(){
    window.location.href='chooseaddress.html';
}