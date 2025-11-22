let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

body.addEventListener("keydown", function (dets) {

    let key = dets.key.toLowerCase(); // convert to lowercase

    // ✔ check for numbers
    if (key >= "1" && key <= "9") {
        new Audio(`./audio/${key}.mp3`).play();
    }

    // ✔ check for alphabets a-z
    else if (key >= "a" && key <= "z") {
        new Audio(`./audio/${key}.mp3`).play();
    }

});
