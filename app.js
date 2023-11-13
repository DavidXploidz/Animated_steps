// Globals
const button_prev = document.querySelector('#prev');
const button_next = document.querySelector('#next');

let counter = 1;
const numberSteps = 4;

document.addEventListener('DOMContentLoaded', () => {
    comprobarFirstStep();
    comprobarCounter();
});

button_prev.addEventListener('click', () => {
    if(counter <= 1){
        return;
    }
    counter--;
    comprobarCounter();
    comprobarFirstStep();
    comprobarLastStep();
});

button_next.addEventListener('click', () => {
    if(counter >= numberSteps){
        return;
    }
    counter++;
    comprobarCounter();
    comprobarFirstStep();
    comprobarLastStep();
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

const comprobarFirstStep = () => {
    if(counter === 1){
        button_prev.classList.add('steps__btn--disabled');
        button_prev.disabled = true;
    }else{
        button_prev.classList.remove('steps__btn--disabled');
        button_prev.disabled = false;
    }
}

const comprobarLastStep = () => {
    if(counter >= numberSteps){
        button_next.classList.add('steps__btn--disabled');
        button_next.disabled = true;
    }else{
        button_next.classList.remove('steps__btn--disabled');
        button_next.disabled = false;
    }
}