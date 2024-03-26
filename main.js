var knowlenght = document.querySelectorAll(".drum").length;

for (var i = 0; i < knowlenght; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function () {

 var selected = this.innerHTML;

 switch(selected) {
    case "Luffy": 
                 var audio1= new Audio("audio/voice1.mp3");
                audio1.play();
    break;
    case "Goku": 
                      var audio2= new Audio("audio/voice2.mp3");
                audio2.play();
    break;
    case "Gojo": 
                 var audio3= new Audio("audio/voice3.mp3");
                audio3.play();
    break;
    case "Kira": 
                 var audio4= new Audio("audio/voice4.mp3");
                audio4.play();
    break;
    case "Peter": 
                 var audio5= new Audio("audio/voice5.mp3");
                audio5.play();
    break;
    case "JOJO": 
                 var audio6= new Audio("audio/voice6.mp3");
                audio6.play();
    break;
    case "Dazai": 
                 var audio7= new Audio("audio/voice7.mp3");
                audio7.play();
    break;

    default: 
    break;
}

});
}   


