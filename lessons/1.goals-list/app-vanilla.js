const inputElement = document.querySelector('input');
const submitButtonEl = document.querySelector('button');
const listEl = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputElement.value;
    if(!enteredValue) return;

    const listItemElement = document.createElement('li');
    listItemElement.textContent = enteredValue;

    listEl.appendChild(listItemElement);
    inputElement.value = '';
}

submitButtonEl.addEventListener('click', addGoal);

