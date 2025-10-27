const input = document.querySelector('#textInput');
const duplicateField = document.querySelector('#duplicateField');
const form = document.querySelector('form');

input.addEventListener('input', () => {
    duplicateField.textContent = input.value;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(input.value);

    input.value = '';
    duplicateField.textContent = '';
});