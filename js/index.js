// for image slide
var index;

function showNextImg(count){
	closePopupSlide();
	index += count;
	if (index > 6) index = 1;
	if (index < 1) index = 6;
	popupSlide(index);
}

function popupSlide(clickIndex){
	index = clickIndex;
	document.getElementById("popup-background").style.visibility = "visible";
	document.getElementsByClassName("popup-img")[index-1].style.visibility = "visible";
	document.getElementsByClassName("img-index")[0].style.visibility = "visible";
	document.getElementsByClassName("fa-caret-right")[0].style.visibility = "visible";
	document.getElementsByClassName("fa-caret-left")[0].style.visibility = "visible";
	document.getElementById("img-index-count").innerHTML = index;
}

function closePopupSlide(){
	document.getElementById("popup-background").style.visibility = "hidden";
	document.getElementsByClassName("popup-img")[index-1].style.visibility = "hidden";
	document.getElementsByClassName("img-index")[0].style.visibility = "hidden";
	document.getElementsByClassName("fa-caret-right")[0].style.visibility = "hidden";
	document.getElementsByClassName("fa-caret-left")[0].style.visibility = "hidden";
}


// when scrolling

// for menu elements
var activePart = 7;

window.addEventListener("scroll", handleScroll);
handleScroll();

// handle scroll up or down
function handleScroll(){

	// for menu highlighting
	var tmpActivePart = 7;
	if (document.getElementById("what-i-do-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 6;
	if (document.getElementById("my-works-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 5;
	if (document.getElementById("about-me-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 3;
	if (document.getElementById("worked-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 4;
	if (document.getElementById("blog-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 2;
	if (document.getElementById("contact-section").getBoundingClientRect().top < screen.height*0.5) tmpActivePart = 1;
	
	if (activePart != tmpActivePart){
		document.getElementsByClassName("menu-link")[activePart-1].style.color = "rgb(180, 180, 180)";
		document.getElementsByClassName("menu-link")[tmpActivePart-1].style.color = "white";
		activePart = tmpActivePart;
	}

	// for reveal animations
    for (var i = 1; i <= 17; i++){
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