function randomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + randomColor;
    console.log(randomColor);   
    document.body.style.background = randomColor;
}
document.getElementById("btn").addEventListener(
    "click",
    randomColor
)

randomColor();