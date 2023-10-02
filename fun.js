// make sure to open the first tab by default
if (document.location.hash == "" || document.location.hash == "#")
	document.location.hash = "#acc1";

// allow the whole tabs to be clickable
document.addEventListener("DOMContentLoaded", function () {
	document.body.addEventListener("click", function (event) {
		const clickedElement = event.target;

		// Check if the clicked element has the "tab" class and an id
		if (clickedElement.classList.contains("tab") && clickedElement.id) {
			event.preventDefault();
			window.location.hash = `#${clickedElement.id}`;
		}
	});
});
