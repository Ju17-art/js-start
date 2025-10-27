const link = document.querySelector('#link');

link.addEventListener('click', (event) => {
    event.preventDefault();
    const userText = prompt('Введите новый текст для ссылки:');

    if (userText) {
        link.textContent = userText;
    }
});