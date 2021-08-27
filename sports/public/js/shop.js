
        var arr=[];//储存邮费
    var nums=[]//储存数量
    list2=window.localStorage.getItem('numbers').split(',');
    
    const len = list2.length
    var result = []
    const sliceNum = 6
    for(var i = 0; i < len / sliceNum; i++){
        result.push(list2.slice(i * sliceNum, (i+1) * sliceNum))
    } for(var j = 0; j < (sliceNum - len % sliceNum); j++) {
        result[result.length - 1].push({})
    }
    console.log( result) 
    for(var i =0;i<result.length;i++){
        kf(result[i],i);
    }
   
    function kf([color,size,gid],i){
        console.log(result[i][2])
        console.log(result.length)
        var ax=new XMLHttpRequest();
        ax.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+result[i][2]+"&type=details&token=1ec949a15fb709370f")
        ax.send();
        ax.onreadystatechange=function(){
            if(this.readyState==4){
                var aa=JSON.parse(ax.response);
                console.log(aa.data);
                // var goodslist=document.querySelector(".cart-list");
                var goodslist=document.querySelector(".lay");
                var divs=document.createElement("div");
                // arr.push(aa.data.freight)
                goodslist.appendChild(divs)
                divs.setAttribute("class","cart-list")
                var goods=document.querySelectorAll(".cart-list")[i];
                goods.innerHTML=
                `
                    <div class="select-btn active"></div>
                    <div class="image-wrap">
                        <div class="image">
                            <img src="${aa.data.images[0]}" alt="">
                        </div>
                        <div class="del">删除</div>
                    </div>
                    <div class="goods-wrap">
                        <div class="goods-title">${aa.data.title}</div>
                        <div class="goods-attr">
                            <span>颜色:${color}</span>
                            <span>大小:${size}</span>
                        </div>
                        <div class="buy-wrap">
                            <div class="price">￥${aa.data.price}</div>
                            <div class="amount-input-wrap">
                                <div class="btn dec active">-</div>
                            <div class="amount-input">
                                <input type="tel"value='1' class="num">
                            </div>
                            <div class="btn inc">+</div>
                            </div>
                        </div>
                    </div>
                `
                // 数量
                var del=document.querySelectorAll(".dec")[i];
                var add=document.querySelectorAll(".inc")[i];
                var input=document.querySelectorAll(".num")[i];
                del.onclick=function(){
                    if(input.value==1){
                        input.value==1
                    }else{
                        input.value--;
                        sum();
                    }
                }
                add.onclick=function(){
                    input.value++
                    sum();
                }
                // 数量
                //勾选点击
                var check=document.querySelectorAll(".select-btn")[i];
                var ht=true;
                check.onclick=function(){
                    if(ht==true){
                        this.className="check1"
                        sum()
                    }else{
                        this.className="check"
                        sum()
                    }
                    ht=!ht    
                }  
                 //勾选点击
                 //删除
                 var dels=document.querySelectorAll(".del")[i];
                //  console.log(dels)
                //  console.log(deletes)
                 dels.onclick=function(){
                    // $(this).parent().parent().remove();
                    // console.log(list)
                    result.splice(i, 1)
                    location.reload();
                    localStorage.setItem('numbers', result)
                 } 
                 console.log(aa.data.freight)
                 var btn=document.querySelectorAll('.select-btn')[0];
                var abtn=document.querySelectorAll('.select-btn')[1]
                var total=document.querySelector('.total')
                var aspan=total.querySelectorAll('span')[0]
                var ospan=total.querySelectorAll('span')[1]
                for(var i=0;i<list2.length;i++){

                }
                aa.data.freight+=aa.data.freight
                aspan.innerHTML="￥"+aa.data.freight
                total+=aa.data.price +aa.data.freight
                ospan.innerHTML="￥"+total
                // var off;
			// btn.onclick=function(){
			// 	if(off){
			// 		btn.className="select-btn active"
            //         abtn.className="select-btn active"
            //         aspan.innerHTML="￥"+aa.data.freight     
            //         total=JSON.parse(aa.data.price) +JSON.parse(aa.data.freight)
            //         ospan.innerHTML="￥"+total
			// 	}else{
			// 		btn.className="select-btn"
            //         abtn.className="select-btn"
            //         aspan.innerHTML="￥"+0
            //         ospan.innerHTML="￥"+0
			// 	}
			// 	off=!off;
			// }
            // abtn.onclick=function(){
			// 	if(off){
			// 		btn.className="select-btn active"
            //         abtn.className="select-btn active"
            //         aspan.innerHTML="￥"+JSON.parse(zz.key2).data.freight
            //         total=JSON.parse(zz.key2).data.price +JSON.parse(zz.key2).data.freight
            //         ospan.innerHTML="￥"+total
			// 	}else{
			// 		btn.className="select-btn"
            //         abtn.className="select-btn"
            //         aspan.innerHTML="￥"+0
            //         ospan.innerHTML="￥"+0
			// 	}
			// 	off=!off;
			// }
                 //删除
                 //总价
                // sum();
                // function sum(){
                // var fli=0;//总费用
                // var fee=0;//快递费
                // var shopscheck1;
                //  var total=document.querySelector(".total");
                //  var spans=total.querySelectorAll("span")
                // //  console.log(spans)
                // var shopscheck1=document.querySelectorAll(".check1")
                // // console.log(shopscheck1)
                // var shopscheck=document.querySelectorAll(".check")//获取所有选中
                // var selectbtn=document.querySelector(".select-btn")
                // var orderend=document.querySelector(".orderend-btn");//获取结算按钮
                // var aa = window.localStorage.getItem('xx');
                // console.log(aa)
                // orderend.onclick=function(){
                //     console.log(i)
                //     console.log(input.value)
                //     if(aa =='no'){
                //         window.location.href="登录.html"
                //     }else if(aa == 'ok'){
                //         window.location.href="确认订单.html"
                //     }
                   
                //     console.log(fli)
                //     window.localStorage.setItem("sum",fli)
                // }
                
                // if(shopscheck.length==0){
                //     orderend.className="orderend-btn noorder"
                //     // console.log(1)
                // }else{
                //     orderend.className="orderend-btn "
                //     // console.log(2)
                // }
                // // console.log(selectbtn)
                // console.log(shopscheck)
                // // console.log(list.length)
                // var order=document.querySelector(".orderend-btn");

                // //全选
                    
                //     if(shopscheck.length==list2.length){
                //         selectbtn.className="select-btn"
                //     }else{
                //         selectbtn.className="select-btn nofocus"
                //     }
                //     var gh=true;
                //     selectbtn.onclick=function(){
                //         var shopscheck1=document.querySelectorAll(".check1")
                //         // console.log(shopscheck1)
                //         var shopscheck=document.querySelectorAll(".check")//获取所有选中
                //         // console.log(shopscheck1)
                //         if(gh==true){
                //             for(var l=0;l<shopscheck.length;l++){
                //                 shopscheck[l].className="check1"
                //                 spans[1].innerHTML=0+"元"
                //             }
                //             this.className="select-btn nofocus"
                //         }else{
                //             for(var l=0;l<shopscheck1.length;l++){
                //                 shopscheck1[l].className="check"
                //                 sum();
                //             }
                //             this.className="select-btn"
                //         }
                //         gh=!gh
                        
                //     }
                        
                // //全选
                // if(shopscheck.length==0){
                //     spans[1].innerHTML=0+"元"
                // }else{
                //     var mu=[];
                //     for(var j=0;j<shopscheck.length;j++){
                //         var ss=shopscheck[j].parentNode;//拿到勾选的父节点
                //         var pricenum=ss.querySelector(".oprice")
                //         // console.log(parseFloat(pricenum.innerHTML))
                //         var num=ss.querySelector(".num")
                //         // console.log(num.value)
                //         mu.push(num.value)
                //         var cc=parseFloat(pricenum.innerHTML)*num.value;
                //         fli+=cc;
                //         console.log(fli)//商品费用
                //         spans[1].innerHTML=fli.toFixed(2)+"元";
                //         // console.log(arr)
                //         // console.log(i)
                //         var c=arr[i];
                        
                       
                //     }
                //     // console.log(mu)
                //     window.localStorage.setItem("nums",JSON.stringify(mu))
                // }
                    
                        
                    
                // }
            }
              
        }
      
    }
                
                
              
                
    //              //总价
                 
    //         }
    //     }
    // }