var circle = document.getElementById("circle");
var showTime = document.getElementById("time");
var timeStart = new Date().getTime;


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function showCircle(){
    circle.style.display='block';
    circle.style.top= Math.random()*500+"px";
    circle.style.left= Math.random()*500+"px";
    circle.style.backgroundColor = getRandomColor();
    timeStart = new Date().getTime();
}

showCircle()

circle.onclick = function(){
    circle.style.display= 'none';
    setInterval(showCircle,1000)

    var timeEnd =new Date().getTime();
    var time = (timeEnd-timeStart)/1000;
   
    showTime.innerHTML = time +"s"
}