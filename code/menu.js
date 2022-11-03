const menu = document.getElementById("menu");
menu.innerHTML = `<div class="thebank" id="thebank">
<img src="./assets/logo.png" alt="logo" />
<h1>thebank</h1>
<img src="./assets/hamburgermenu.png" id="hamburger" />
</div>
<nav id="navMenu" class="mobileHidden">
<a href="./index.html" id="/index.html">Home</a>
<a href="./sobre.html" id="/sobre.html">Sobre</a>
<a href="./contato.html" id="/contato.html">Contato</a>
<a href="./blog.html" id="/blog.html">Blog</a>
<a href="./carreira.html" id="/carreira.html">Carreira</a>
<a href="./cadastrese.html" id="/cadastrese.html" class="cadastrese">Cadastre-se</a>
</nav>
<link rel="stylesheet" href="./code/menu.css" />
`;

const hamburger = document.getElementById("thebank");
const navMenu = document.getElementById("navMenu");

var currentPath = document.location.pathname;
document.getElementById(currentPath).classList.add("current")

hamburger.addEventListener("click", function () {
	if (navMenu.classList.contains("mobileHidden")) {
		navMenu.classList.remove("mobileHidden");
	} else {
		navMenu.classList.add("mobileHidden");
	}
});