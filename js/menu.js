// when scrolling
// for detecting scroll direction
window.oldYOffset = 0;
window.addEventListener("scroll", handleScroll);
// handle scroll up or down
function handleScroll(){
	if (window.oldYOffset < window.pageYOffset) handleScrollDown();
	else handleScrollUp();
	window.oldYOffset = window.pageYOffset;
}

// when scroll up
function handleScrollUp(){
	if (window.pageYOffset == 0) document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
	document.getElementById("menu").style.top = "0px";
	document.getElementById("logo").style.top = "25px";
	document.getElementById("menu-small-icon").style.top = "32px";
}

// when scroll down
function handleScrollDown(){
	document.getElementById("menu").style.backgroundColor = "rgba(0, 0, 0, 0.95)";
	document.getElementById("menu").style.top = "-90px";
	document.getElementById("logo").style.top = "-75px";
	document.getElementById("menu-small-icon").style.top = "-58px";
	if (window.innerWidth <= 900) menuHide();
}

// to handle device width
handleResize();

// when resizing => responsive
window.addEventListener("resize", handleResize);
function handleResize(){
	if (window.innerWidth <= 900) menuHide();
	else menuShowFull();
}

// when click on menu icon
var show = false;
document.getElementById("menu-small-icon").onclick = function(){
	if (!show) menuShowSmall();
	else menuHide();
}

function menuShowFull(){
	document.getElementById("menu").style.height = "40px";
	document.getElementById("menu-small-icon").style.display = "none";
	var element = document.getElementsByClassName("menu-link");
	element[5].style.visibility = "visible";
	for (var i = 0; i <= 5; i++){
		element[i].style.float = "right";
		element[i].style.display = "block";
		element[i].style.position = "static";
		element[i].style.width = "auto";
		element[i].style.fontSize = "13px";
	}
	show = false;
}

function menuShowSmall(){
	document.getElementById("menu").style.height = "340px";
	document.getElementById("menu").style.backgroundColor = "black";
	var element = document.getElementsByClassName("menu-link");
	setTimeout(function(){
		element[5].style.visibility = "visible";
		for (var i = 0; i <= 5; i++){
			element[i].style.display = "block";
			element[i].style.position = "fixed";
			element[i].style.width = "100%";
			element[i].style.fontSize = "18px";
			element[i].style.top = 85 + 40*(6-i) + "px";
		}
	}, 300);
	show = true;
}

function menuHide(){
	document.getElementById("menu").style.height = "40px";
	document.getElementById("menu-small-icon").style.display = "block";
	var element = document.getElementsByClassName("menu-link");
	element[5].style.visibility = "hidden";
	for (var i = 0; i <= 5; i++){
		element[i].style.display = "none";
	}
	show = false;
}