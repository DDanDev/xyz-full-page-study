//add styles to head
var headAppend = new XMLHttpRequest();
headAppend.open("GET", "./code/headAppend.html");
headAppend.onreadystatechange = () => {
	if (headAppend.readyState !== 4) return;
	document.head.innerHTML += headAppend.responseText;
};
headAppend.send();

// add menu to page, other content must be in <main>
var createMenu = new XMLHttpRequest();
createMenu.open("GET", "./code/menu.html");
createMenu.onreadystatechange = () => {
	if (createMenu.readyState !== 4) return;

	// add menu HTML first thing inside body
	document.body.insertAdjacentHTML("afterbegin", createMenu.responseText);

	// menu feature: highlight current page
	var currentPath = document.location.pathname.substring(document.location.pathname.length - 9);

	try {
		document.getElementById(currentPath).classList.add("current");
	} catch (e) {
		document.getElementById("ndex.html").classList.add("current");
	}

	// menu feature: mobile hamburger menu
	const hamburger = document.getElementById("thebank");
	const toggle = document.getElementById("menuToggle");

	hamburger.addEventListener("click", function () {
		if (window.innerWidth < 632) {
			if (toggle.checked) {
				toggle.checked = false;
			} else {
				toggle.checked = true;
			}
		}
	});
};
createMenu.send();
