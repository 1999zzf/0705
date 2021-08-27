var buttom=document.querySelector('.buttom-nav');
var aul=buttom.getElementsByTagName('ul');
var ali=buttom.getElementsByTagName('li')
var oul=document.querySelectorAll('ul')[4];
var ula=document.querySelectorAll('ul')[2];
var ul=document.querySelectorAll('ul')[1]
var ulo=document.querySelectorAll('ul')[0]
oul.onclick=function(){
    window.location.href='fav.html';
}
ula.onclick=function(){
    window.location.href='bind.html';
}
ul.onclick=function(){
    window.location.href='address.html';
}
ulo.onclick=function(){
    window.location.href='user.html';
}
for(var i=0;i<aul.length;i++){
    aul[i].index=i;
    arr=['images/common/home2.png','images/common/cart2.png','images/common/my2.png']
    aul[i].onclick=function(){
        for(var j=0;j<aul.length;j++){
                aul[j].className=""
            }
        this.className="active";
        aul[this.index].getElementsByTagName('li')[0];
        aul[0].getElementsByTagName('li')[0].firstElementChild.setAttribute('src','images/common/home1.png')
        aul[1].getElementsByTagName('li')[0].firstElementChild.setAttribute('src','images/common/cart1.png')
        aul[2].getElementsByTagName('li')[0].firstElementChild.setAttribute('src','images/common/my1.png')
        aul[this.index].getElementsByTagName('li')[0].firstElementChild.setAttribute('src',arr[this.index])
    }
}
if(window.localStorage.getItem('qq')=='ok'){
    document.querySelector('button').innerHTML='安全退出'
    document.querySelector('button').onclick=function(){
        window.localStorage.removeItem('qq')
        document.querySelector('button').innerHTML='登录/注册'  
        document.querySelector('button').onclick=function(){
            window.location.href='login.html'
        }
    }
}    
document.querySelector('.show-order').onclick=function(){
    window.location.href='order.html'
    window.localStorage.setItem('pg',0)
}
var atext=document.querySelectorAll('.text')
console.log(atext.length)
for(var i=0;i<atext.length;i++){
    atext[i].index=i;
    atext[i].onclick=function(){
        console.log(this.index)
        window.localStorage.setItem('bg',this.index)
        window.location.href='order.html'
    }
}
