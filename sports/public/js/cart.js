var buttom=document.querySelector('.buttom-nav')
        var ahome=document.querySelector('.home');
        var ashopping=document.querySelector('.shopping');
        var amy=document.querySelector('.my');
        var aul=buttom.getElementsByTagName('ul');
        var ali=buttom.getElementsByTagName('li')
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
        var btn=document.querySelectorAll('.select-btn')[0];
        var abtn=document.querySelectorAll('.select-btn')[1]
        var off;
			btn.onclick=function(){
				if(off){
					btn.className="select-btn active"
                    abtn.className="select-btn active"
                    aspan.innerHTML="￥"+JSON.parse(zz.key2).data.freight
                    total=JSON.parse(zz.key2).data.price +JSON.parse(zz.key2).data.freight
                    ospan.innerHTML="￥"+total
				}else{
					btn.className="select-btn"
                    abtn.className="select-btn"
                    aspan.innerHTML="￥"+0
                    ospan.innerHTML="￥"+0
				}
				off=!off;
			}
            abtn.onclick=function(){
				if(off){
					btn.className="select-btn active"
                    abtn.className="select-btn active"
                    aspan.innerHTML="￥"+JSON.parse(zz.key2).data.freight
                    total=JSON.parse(zz.key2).data.price +JSON.parse(zz.key2).data.freight
                    ospan.innerHTML="￥"+total
				}else{
					btn.className="select-btn"
                    abtn.className="select-btn"
                    aspan.innerHTML="￥"+0
                    ospan.innerHTML="￥"+0
				}
				off=!off;
			}