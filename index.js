let valueDisplays = document.querySelectorAll("._num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);

})


var slideImg = document.getElementById("slideImg");

var images = new Array(
    "img/tələbələr/5.jpg",
    "img/tələbələr/tələbələr 2.jpg",
    "img/tələbələr/tələbələr 3.jpg",
    "img/tələbələr/tələbələr 4.jpg"
);

let length = images.length;
let i = 0;

function slider() {
    if (i > length - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000)
}

window.onload = slider()



var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("loader").style.scale = "0%";
}

window.onload = myFunction()