var aswitch=document.querySelector('.van-switch');
var anode=document.querySelector('.van-switch__node');
var pass=document.querySelectorAll('input')[1];
var aback=document.querySelector('.back');
var azhuce=document.querySelector('.zhuce');
var off;
aback.onclick=function(){
    window.history.back(-1);
}
azhuce.onclick=function(){
    window.location.href="res.html"
}
aswitch .onclick=function(){              
    if(off){
		anode.style.transform="translateX(0em)"; 
        aswitch.setAttribute('aria-checked','false');
        aswitch.setAttribute('class','van-switch');
        pass.type="password"
	}else{
        aswitch.setAttribute('aria-checked','true');
        aswitch.setAttribute('class','van-switch van-switch-on');
		anode.style.transform="translateX(1em)";
        pass.type="text"
	}
	off=!off;
}
function getCookie(name){
    var strCookie=document.cookie;
    var arrCookie=strCookie.split(";");
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]==name)
        return arr[1];
    }
    return arr[1]
}
var username=getCookie('username');
var password=getCookie("password");
console.log(username);
console.log(password);
var father="ok"
var phone=document.querySelectorAll('input')[0]
var sure=document.querySelector('.sure-btn')
sure.onclick=function(){
    var aaa = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	if(!aaa.test(phone.value)){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='您输入的手机号格式不正确'
        return
    }else{
        document.querySelector('.van-toast--text').style.display='none';
    }
    if(phone.value.length==11&&phone.value!=username){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='您输入的用户名或密码不正确'
    }
    if(pass.value!=password){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='您输入的用户名或密码不正确'
    }
    if(phone.value==username&&pass.value==password){
        window.localStorage.setItem('qq',father)
        location.href = 'my.html'
    }
}