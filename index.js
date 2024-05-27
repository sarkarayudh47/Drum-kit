document.addEventListener("keydown",function(event){
    keyPressed=event.key;
    makeSound(keyPressed);
})
for(let i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //alert("hi")
        var buttonInnerHTML=this.innerHTML;//this keyword here represents the event object that triggered the event listener which is in this case a button which has been clicked upon and innerHTML is the property used to take out the HTML within the button tags.
         makeSound(buttonInnerHTML);
    });
}
function makeSound(key)
{
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick_base=new Audio("sounds/kick-bass.mp3");
            kick_base.play();
            break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1=new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2=new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3=new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4=new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;    
        default:
            break;
    }
    buttonAnimation(key);
}
function buttonAnimation(currentKey)
{
    activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}