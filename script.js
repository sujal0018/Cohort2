let button = document.querySelector("button");
let inner = document.querySelector(".inner");
let h2 = document.querySelector("h2");
let grow = 0;
let card = document.querySelector(".card");
button.addEventListener("click", function () {
    button.style.pointerEvents = "none";
    button.innerHTML = "downloading";
	let a = setInterval(() => {
		grow++;
		h2.innerHTML = grow + "%";
		inner.style.width = grow + "%";
	}, 50);
	setTimeout(() => {
        clearInterval(a);
        button.innerHTML = "downloaded";
        button.style.opacity = 0.5;
		let h3 = document.createElement("h3");
		h3.innerHTML = "Download complete";
		card.appendChild(h3);
	}, 5000);
});
