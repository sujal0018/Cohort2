const p = document.querySelector("p");
const text = p.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;
p.addEventListener("mouseenter", () => {
	setInterval(() => {
		let str = text
			.split("")
			.map(function (char, idx) {
				if (iteration > idx) {
					return char;
				}
				return characters.split("")[Math.floor(Math.random() * 52)];
			})
			.join("");
		p.innerHTML = str;
		iteration += 0.24;
	}, 20);
});
