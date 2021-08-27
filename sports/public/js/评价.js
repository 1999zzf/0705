window.onload = function(){
    function backbefor(){
        var oback = document.getElementsByClassName('back');
            oback[0].onclick = function(){
            window.history.back(-1);
        }
   }
   backbefor()
   var submit = document.querySelector('.submit');
   var text = document.querySelector('textarea');
   var vantoast = document.querySelector('.van-toast')
   submit.onclick = function(){
      if(text.innerHTML ==''){
         vantoast.style.display = 'block';
         none(vantoast)
         return;
      }else{
        window.location.href="order.html"
        return
      }
   }
   function none(aa){
        var timer = setInterval(function(){
            clearInterval(timer);
            aa.style.display = 'none';
        },3000)
    }
}