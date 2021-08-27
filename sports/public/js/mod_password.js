var aswitch=document.querySelector('.van-switch');
var anode=document.querySelector('.van-switch__node');
var pass=document.querySelector('input');
var aback=document.querySelector('.back');
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