let h1 = document.querySelector('h1');
let a = 100;
let timer;

document.addEventListener("DOMContentLoaded", function () {
    startCounter(1000); 
});

function startCounter(speed) {
    timer = setInterval(function () {

        a--;
        h1.innerHTML = a;

   
        if (a === 90) {
            clearInterval(timer);
            startCounter(500); 
        }

        if (a === 80) {
            clearInterval(timer);
            startCounter(100); 
        }

        if (a === 0) {
            h1.innerHTML = "hacked";
            clearInterval(timer);

        }

    }, speed);
}
