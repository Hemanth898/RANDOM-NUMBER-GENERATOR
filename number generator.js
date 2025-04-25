const generate = document.getElementById('generate');
const reset = document.getElementById('reset');
const number = document.getElementById('number');
const min = document.getElementById('min');
const max = document.getElementById('max');
const result = document.getElementById('result');
const error = document.getElementById('error');
const rn = document.getElementById('random-number');
generate.addEventListener('click', () => {


    const randomnumber = (Math.random() * 100) + 1;
    rn.innerHTML = randomnumber;
});

reset.addEventListener('click', () => {
    const randomnumber = (Math.random() * 0);
    rn.innerHTML = randomnumber;
});