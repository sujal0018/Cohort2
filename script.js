let main = document.querySelector("main");
let btn = document.querySelector('button');

btn.addEventListener("click", function () {
    main.classList.toggle("dark");

    if (main.classList.contains("dark")) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});
