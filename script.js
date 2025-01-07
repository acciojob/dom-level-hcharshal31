//your JS code here. If required.
let targetElement = document.getElementById("level");

function getLevel(element){
	let level = 0;
	while(element){
		level++;
		element = element.parentElement;
	}
	alert(`The level of the element is: ${level}`);
}

getLevel(targetElement);