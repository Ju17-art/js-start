const input = document.querySelector('#textInput');
const duplicateField = document.querySelector('#duplicateField');
const form = document.querySelector('form');

input.addEventListener('input', function () {
    duplicateField.textContent = input.value;
});

form.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log(input.value);

    input.value = '';
    duplicateField.textContent = '';
});