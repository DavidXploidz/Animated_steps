// Globals
const button_prev = document.querySelector('#prev');
const button_next = document.querySelector('#next');

let counter = 1;
const numberSteps = 4;

document.addEventListener('DOMContentLoaded', () => {
    comprobarCounter();
});

button_prev.addEventListener('click', () => {
    if(counter <= 1){
        return;
    }
    counter--;
    console.log(counter);
    comprobarCounter();
});

button_next.addEventListener('click', () => {
    if(counter >= numberSteps){
        return;
    }
    counter++;
    console.log(counter);
    comprobarCounter();
});

const comprobarCounter = () => {
    const steps = document.querySelectorAll('.steps__num');
    steps.forEach(function(step){
        const number = step.textContent;
        if(parseInt(number) <= counter){
            step.classList.add('steps__num--active');
        }
        else{
            step.classList.remove('steps__num--active');
        }
    });
}