//Auto-input//
let type = new Typed (".auto-input", {
    strings: ["Virtual Assistant", "Bookkeeper", "Graphic Designer", "Social Media Manager", "Video Editor", "Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    });

//counting numbers//

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt (valueDisplay.getAttribute ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval (function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval (counter);
        }
    }, duration);
});




//Progress Bar//
setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar');
        progressBar.style.width = '100%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar1');
        progressBar.style.width = '80%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar2');
        progressBar.style.width = '100%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar3');
        progressBar.style.width = '80%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar4');
        progressBar.style.width = '95%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar5');
        progressBar.style.width = '95%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar6');
        progressBar.style.width = '90%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar7');
        progressBar.style.width = '65%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar8');
        progressBar.style.width = '40%';
    }, 1000);

setTimeout(function() {
        const progressBar = document.getElementById('myProgressBar9');
        progressBar.style.width = '90%';
    }, 1000);

//filter out//


//send message to email//
