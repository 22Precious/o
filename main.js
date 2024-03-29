x = 0;
y = 0;
screen_width=window.innerWidth;
screen_height=window.innerHeight;
apple="";
speak_data="";
to_number="";

function preload(){
  loadImage(apple.png);
  createCanvas(150,150)
  CanvasCaptureMediaStreamTrack.position(0,150)
}

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  

  recognition.start();
} 
 
recognition.onresult = function(event) {

 to_number=Number(content)
 console.log(event); 
if(Number.isInteger(to_number)){
  draw_apple="set";
  for(var i=1;i<=to_number;i++){
    x=Math.floor(Math.random()*700);
    y=Math.floor(Math.random()*400);
    Image(apple,x,y,50,50);
  }
}
else{
 status="The speech has not recognized a number";

}
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    document.getElementById("status").innerHTML=to_number+"Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
