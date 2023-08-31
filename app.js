function randomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
}
document.getElementById("btn").addEventListener(
    "click",
    randomColor
)