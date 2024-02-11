function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function gradualColorChange() {
    const body = document.body;
    const targetColor = randomColor();
    const currentColor = window.getComputedStyle(body).backgroundColor;
    const currentRGB = currentColor.match(/\d+/g).map(Number);
    const targetRGB = targetColor.match(/\d+/g).map(Number);
    const increment = targetRGB.map((value, index) => (value - currentRGB[index]) / 100);
    let step = 0;
    const intervalId = setInterval(() => {

        const newRGB = currentRGB.map((value, index) => Math.round(value + (increment[index] * step)));
        body.style.backgroundColor = `rgb(${newRGB.join(',')})`;
        step++;
        if (step >= 100) {
            clearInterval(intervalId);
        }
    }, 10);
}


setInterval(gradualColorChange, 3000); 
