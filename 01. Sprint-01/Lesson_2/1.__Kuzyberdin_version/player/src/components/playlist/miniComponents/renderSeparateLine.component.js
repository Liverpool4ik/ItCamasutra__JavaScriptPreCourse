export function renderSeparateLine() {
	const separateLineElement = document.createElement("hr");
	separateLineElement.style = "border: 2px double red";
	document.body.append(separateLineElement);
}
