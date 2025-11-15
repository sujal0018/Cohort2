let h1 = document.querySelector('h1');
let a = 100;
document.addEventListener("DOMContentLoaded", function () {
    let timer=setInterval(() => {
        a--;
        h1.innerHTML = a;
        if (a === 0) {
            h1.innerHTML = "Hacked";
            clearInterval(timer);
        }
    }, 100);
})