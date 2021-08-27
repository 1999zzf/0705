var atags=document.querySelectorAll('.tags');
var aback=document.querySelector('.back');
var ocont=document.querySelectorAll('.cont')
for(var i=0;i<atags.length;i++){
    atags[i].index=i;//获取索引值，知道点击的是哪一项
    atags[i].onclick=function(){
        for(var j=0;j<atags.length;j++){
            atags[j].className="tags";
            ocont[j].style.display="none";
        }
        this.className="tags active";
        ocont[this.index].style.display="block";
    }
}
aback.onclick=function(){
    window.history.back(-1);
}
console.log(window.localStorage.getItem('bg'))
for(var j=0;j<atags.length;j++){
    atags[j].className="tags";
}
atags[window.localStorage.getItem('bg')].className="tags active";