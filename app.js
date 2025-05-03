const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const button = document.getElementById('btn-chng');
button.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});
