var buttom=document.querySelector('.buttom-nav');
        var aul=buttom.getElementsByTagName('ul');
        var ali=buttom.getElementsByTagName('li');
var alogin=document.querySelector(".login");
var atext=document.querySelector('.text');
var search=document.querySelector('.search-component');
var aclose=document.querySelector('.close');
var aicon=document.querySelector('.icon')
console.log(search)
alogin.onclick=function(){
    window.location.href="login.html"
}
aicon.onclick=function(){
    window.location.href="item.html"
}
        console.log(aul.length)
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
        atext.onclick=function(){
            search.style.display='block'
        }
        aclose.onclick=function(){
            search.style.display='none'
        }
        if(window.localStorage.getItem('qq')=='ok'){
            alogin.innerHTML=""
            alogin.css='background-image(url(images/home/index/my.png) no-repeat )';
            alogin.onclick=function(){
                window.location.href="my.html"
            }
        }