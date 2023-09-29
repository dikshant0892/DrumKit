for (
  let index = 0;
  index < document.querySelectorAll(".drum").length;
  index++
) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML)
    });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();

      break;
    case "a":
      let kick_bass = new Audio("./sounds/kick-bass.mp3");
      kick_bass.play();

      break;
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();

      break;
    case "d":
      let tom_1 = new Audio("./sounds/tom-1.mp3");
      tom_1.play();

      break;
    case "j":
      let tom_2 = new Audio("./sounds/tom-2.mp3");
      tom_2.play();

      break;
    case "k":
      let tom_3 = new Audio("./sounds/tom-3.mp3");
      tom_3.play();

      break;
    case "l":
      let tom_4 = new Audio("./sounds/tom-4.mp3");
      tom_4.play();

      break;

    default:
      console.log("Default");
  }
}

document
  .addEventListener("click", function (event) {
    let iD = (event.pointerId);
    switch (iD) {
        case 1:
            let tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
    
        default:
            console.log("Error");
    }
  });
 

function buttonAnimation(keypressed) {
   let activeButton=  document.querySelector("."+keypressed);
   activeButton.classList.add("pressed");
    setTimeout(() => {activeButton.classList.remove("pressed");
        }, 100);
   

    
}
