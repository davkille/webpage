const container = document.getElementById("container");
const innerContainer=document.getElementById("inner-container");
const btn = document.getElementById("btn");
let colors = ['#456','#347','#789', '#654', '#274', '#463'];
let colorsInner=['#ff0000','#ffff00','#40ff00','#0015ff','#bf00ff'];

btn.addEventListener('click',changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    const colorIndexInner = parseInt(Math.random() * colorsInner.length);
    innerContainer.style.backgroundColor = colorsInner[colorIndexInner];
    container.style.backgroundColor = colors[colorIndex];
}