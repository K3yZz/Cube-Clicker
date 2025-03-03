export function setupCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.border = '5px solid white';
    canvas.style.position = 'absolute';
    canvas.style.backgroundColor = 'white';
    document.body.appendChild(canvas);
    return canvas;
}