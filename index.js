let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let drumChar = this.innerHTML;

        makeSound(drumChar)

        buttonAnimation(drumChar)
    })

}

document.addEventListener("keydown", (event) => {

    makeSound(event.key)

    buttonAnimation(event.key)

})

const makeSound = (key) => {
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case 'l':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        default:
            console.warn("Error");
            break;

    }
}

function buttonAnimation(currentkey){
    let activeButton = document.querySelector("." + currentkey)
    activeButton.classList.add("pressed")

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    })
    
}