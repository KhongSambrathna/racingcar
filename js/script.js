var x;
var y;
var m=0;
var n=0;
function start()
{

 x=y=setInterval(anim,1);
 
  function anim()
  {
      
      console.log("M",m);
      console.log("N",n);
        if(m>1200 || n>1200)
        {
            clearInterval(x);           
            m=0;
            clearInterval(y);           
            n=0;
        }
        
        else
        {
            m+=(Math.floor(Math.random()*1.2));
            var target1 =document.getElementById("car-1");
            var target2 =document.getElementById("wheel-front-1");
            var target3 =document.getElementById("wheel-back-1");
            target1.style.visibility="visible";
            target1.style.marginLeft=m+'px';
            target2.style.visibility="visible";
            target2.style.marginLeft=m+'px';
            target3.style.visibility="visible";
            target3.style.marginLeft=m+'px';
            //
            n+=(Math.floor(Math.random()*1.2));
            var target1 =document.getElementById("car-2");
            var target2 =document.getElementById("wheel-front-2");
            var target3 =document.getElementById("wheel-back-2");
            target1.style.visibility="visible";
            target1.style.marginLeft=m+'px';
            target2.style.visibility="visible";
            target2.style.marginLeft=m+'px';
            target3.style.visibility="visible";
            target3.style.marginLeft=m+'px';;
        }
   }

}