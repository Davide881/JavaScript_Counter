
const cardBody = document.getElementById("cardBody");



let count = 0;
const counter = document.createElement('div');
const minusButton = document.createElement('button');
const plusButton = document.createElement('button');
const resetButton = document.createElement('button');



counter.classList.add('counter')      



counter.textContent = count;
minusButton.textContent = '-';
resetButton.textContent = 'Reset';
plusButton.textContent = '+';
    


cardBody.appendChild(counter);
cardBody.appendChild(minusButton);
cardBody.appendChild(resetButton);
cardBody.appendChild(plusButton);



plusButton.addEventListener('click',()=>{
count++;
counter.textContent = count;
});

minusButton.addEventListener('click',()=>{
count--;
counter.textContent = count;
});

resetButton.addEventListener('click',()=>{
count = 0;
counter.textContent = count;
});