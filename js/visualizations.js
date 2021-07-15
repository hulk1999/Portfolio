
const PATH = "./images/visualizations/";
const backgroundEl = document.getElementById("popup-background");
const imgEl = document.getElementById("popup-img");
const imgNameEl = document.getElementById('img-name');
const leftArrowEl = document.getElementsByClassName("fa-caret-left")[0];
const rightArrowEl = document.getElementsByClassName("fa-caret-right")[0];

const IMAGES = ["frequently-used-visualizations.png", "simple-line.png", "forecast.png", "ab-test.png"];
const NAMES = ["Frequently Used Visualization", "Simple Line Charts", "Line Chart with Forecast Data",
			   "A/B Test Results with Z-Test"];
let index;
  
function popupImg(ind){
	
	index = ind;
	imgEl.src = PATH + IMAGES[ind];
	imgNameEl.innerHTML = NAMES[ind];

	backgroundEl.style.visibility = "visible";
	imgEl.style.visibility = "visible";
	imgNameEl.style.visibility = "visible";
	leftArrowEl.style.visibility = "visible";
	rightArrowEl.style.visibility = "visible";

}

function closePopup(){
	backgroundEl.style.visibility = "hidden";
	imgEl.style.visibility = "hidden";
	imgNameEl.style.visibility = "hidden";
	leftArrowEl.style.visibility = "hidden";
	rightArrowEl.style.visibility = "hidden";
}

function showNextImg(forward){
	index += forward;
	if (index > IMAGES.length-1) index = 0;
	if (index < 0) index = IMAGES.length - 1;
	imgEl.src = PATH + IMAGES[index];
	imgNameEl.innerHTML = NAMES[index];
}