let con = document.querySelector(".container");
let icon = document.querySelector("i");
con.addEventListener("dblclick", function () {
    icon.style.transform = "translate(-50%,-50%) scale(1)";
    setTimeout(() => {
        icon.style.transform = "translate(-50%,-50%) scale(0)";
    }, 800);
})