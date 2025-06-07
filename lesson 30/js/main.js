// var x = -2;

// if(x>2){
//     console.log("x eshte vlere me e madhe se 2")
// }else if(x>-3){
//     console.log("x ehste me i madh se -3")
// }
// else{
//     console.log("asnje kusht nuk eshte plotesuar")
// }


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
