// Обработчик для console.log
const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

// Обработчик для alert
const alertExample = document.querySelector('#alert');
alertExample.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
});

// Обработчик для prompt
const promptExample = document.querySelector('#prompt');
promptExample.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
});