

var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");

   button.onclick=function(){
    text.innerHTML=input.value;
   }
   

   var input1 = document.getElementById("input1_id");
   var input2 = document.getElementById("input2_id");
   var button2 = document.getElementById("btn2_id");
   var ans = document.getElementById("answer");
 

   button2.addEventListener("click",function(){
    ans.innerHTML = parseInt(input1.value)+parseInt(input2.value);
   });

   button.onclick =function(){
    if(input.value>10){
      text.innerHTML="input value is greater than 10"
    }
    else if(input.value<10){
      text.innerHTML="input value is less than 10"
    }
   }
