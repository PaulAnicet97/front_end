// timer
var timer; 
var timeLeft = 60;
function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
      $('#timer').html(timeLeft);
    else {
      gameOver();
    }
  };
  
  function start() {
      timer = setInterval(updateTimer, 1000);
    //   updateTimer();
      $('#playAgainButton').hide();
  }

const counterDisplay = document.querySelector("#count");
let counter = 0;
const audio = new Audio("audio/pickupCoin.wav");



// creation de la bulle
document.getElementById("playAgainButton").addEventListener("click", ()=> {
    counter++;
});
  function bubbleMaker() {
   if (counter <= 7){
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // lui attribuer une taille et une position
  const size = Math.random() * 80 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusOrMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusOrMinus + "%");

  // detruire les bulles au clique
  bubble.addEventListener("click", myFunction);
    function myFunction () {
        counter++;
        counterDisplay.textContent = "score:" + counter;
        bubble.remove();
        audio.play();
    };


    

    setTimeout(() => {
    bubble.remove();
  }, 8000);

  return;
 document.body.innerHTML = "<h1>You win</h1>"
 
  
}};
setInterval(bubbleMaker, 1000);

document.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);