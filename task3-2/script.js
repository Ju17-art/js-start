const lights = document.querySelectorAll('.light');
let currentColor = 'green';

function switchLight(color) {
    lights.forEach(light => {
        light.style.background = 'black';
    });

    const activeLight = Array.from(lights).find(light =>
        light.getAttribute('data-color') === color
    );

    if (activeLight) {
        activeLight.style.background = color;
    }

    if (color === 'green') {
        currentColor = 'yellow';
    } else if (color === 'yellow') {
        currentColor = 'red';
    } else {
        currentColor = 'green';
    }
}

lights.forEach(light => {
    light.addEventListener('click', () => {
        switchLight(currentColor);
    });
});

switchLight('black');