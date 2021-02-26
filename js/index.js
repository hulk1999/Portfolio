
// for menu elements
var activePart = 6;

window.addEventListener("scroll", handleScroll);
handleScroll();

// handle scroll up or down
function handleScroll(){

	// for menu highlighting
	var tmpActivePart = 6;
	if (document.getElementById("what-i-do-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 5;
	if (document.getElementById("my-works-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 4;
	if (document.getElementById("worked-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 3;
	if (document.getElementById("certificate-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 2;
  if (document.getElementById("activity-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 1;
	
	if (activePart != tmpActivePart){
		document.getElementsByClassName("menu-link")[activePart-1].style.color = "rgb(180, 180, 180)";
		document.getElementsByClassName("menu-link")[tmpActivePart-1].style.color = "white";
		activePart = tmpActivePart;
	}

	// for reveal animations
    for (var i = 1; i <= 23; i++){
    if (document.getElementsByClassName("reveal-animation")[i-1].getBoundingClientRect().top < screen.height - 200)
        document.getElementsByClassName("reveal-animation")[i-1].classList.add("in");
    }
}

// for header showing
document.getElementById("show-header-button-right").addEventListener("click", function(){
	document.getElementById("header-left-column").style.left = "-250px";
	document.getElementById("header-right-column").style.left = "0";
	document.getElementById("show-header-button-left").style.display = "block";
	document.getElementById("show-header-button-right").style.display = "none";
});

document.getElementById("show-header-button-left").addEventListener("click", function(){
	document.getElementById("header-left-column").style.left = "34px";
	document.getElementById("header-right-column").style.left = "284px";
	document.getElementById("show-header-button-left").style.display = "none";
	document.getElementById("show-header-button-right").style.display = "block";
});