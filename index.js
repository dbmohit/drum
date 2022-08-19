var a = document.querySelectorAll(".drum");
for(var i = 0;i<a.length;i++){
    a[i].addEventListener("click",function (){
        var button = this.innerHTML;
        sound(button);
        style(button);
    });
}
    document.addEventListener("keydown",function(k){
        console.log(k);
        var key = k.key;
        sound(key);
        style(key);
        
    });
    function sound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;        
        case "j":
            var s = new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
    }
    
}
function style(btn){
    var item = document.querySelector('.'+btn);
    item.classList.add("pressed");
    setTimeout(function(){
        item.classList.remove("pressed");
    },100);
}




// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();