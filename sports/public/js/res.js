var aswitch=document.querySelector('.van-switch');
var anode=document.querySelector('.van-switch__node');
var pass=document.querySelectorAll('input')[3];
var aback=document.querySelector('.back');
var abtn=document.querySelector('.code-btn');
var phone=document.querySelectorAll('input')[1];
var times=11;
var aimg=document.querySelector('img')
phone.onkeyup=function(){
    if(phone.value.length==11){
        abtn.setAttribute('class','code-btn success');
        abtn.onclick=function(){
            timer=setInterval(function(){
                if(phone.value.length==11){
					times--;
					abtn.innerHTML="重新获取（"+times+")";
                    abtn.style.background="#eaeaea";
                    abtn.style.color= "#717376";
                    abtn.style.border= "1px solid #eaeaea";
            }
            if(times==0){
                abtn.innerHTML="获取短信验证码";
                clearTimeout(timer)
                times=11;
                abtn.style.background="#ffffff";
                abtn.style.color= "#eb1625";
                abtn.style.border= "1px solid #eb1625";
            }
            },1000)
        }
    }else{
        abtn.setAttribute('class','code-btn');
    }
    
}
var off;
aback.onclick=function(){
    window.history.back(-1);
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
aimg.onclick=function(){
    var xhr=new XMLHttpRequest();
    xhr.open('post','http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f');
    xhr.send();
    xhr.onreadystatechange=function(){
        if(this.readyState===4){
            aimg.src=this.responseURL
        }
    }
}
var img=document.querySelectorAll('input')[0]
var phone=document.querySelectorAll('input')[1]
var password=document.querySelectorAll('input')[3]
var put=document.querySelectorAll('input')[2]
var sure=document.querySelector('.sure-btn')
sure.onclick=function(){
    if(img.value.length==0&&put.value.length==0&&password.value.length===0&&phone.value.length==0){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='请输入图文验证码'
    }
    if(img.value.length!=0&&put.value.length==0&&password.value.length===0&&phone.value.length==0){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='请输入手机号'
    }
    if(phone.value.length!=11&&img.value.length!=0&&put.value.length!=0&&password.value.length!=0){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='您输入的手机号格式不正确'
    }
    var aaa = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	if(!aaa.test(phone.value)){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='您输入的手机号格式不正确'
        return
    }else{
        document.querySelector('.van-toast--text').style.display='none';
    }
    if(phone.value.length==11&&put.value.length==0){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='请输入短信验证码'
    }
    if(phone.value.length==11&&put.value.length!=0&&password.value.length===0){
        document.querySelector('.van-toast--text').style.display='block';
        document.querySelector('.van-toast__text').innerHTML='请输入密码'
    }
    var abc=/\d+/g;
    if(abc.test(phone.value)&&phone.value.length==11&&password.value.length!=0){
        console.log(phone.value)
        console.log(password.value)
        SetCookie("username",phone.value)
        SetCookie("password",password.value)
        location.href = 'login.html'
    }
    
}
function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
// //写入到Cookie

function SetCookie(name, value) {
    var exp=new Date();
    exp.setTime(exp.getTime()+(30*24*60*60*1000));
    window.document.cookie=name+"="+escape(value)+"; expires="+exp.toGMTString()+";path=/"
}