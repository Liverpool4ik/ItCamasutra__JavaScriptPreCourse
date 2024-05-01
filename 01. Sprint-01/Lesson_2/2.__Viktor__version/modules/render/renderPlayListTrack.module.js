export function renderTrack(anyTrack) {
	const trackElement = document.createElement("li");
	trackElement.style.listStyle = "none";
	const imgCoverElement = document.createElement("img");
	imgCoverElement.src = anyTrack.trackCoverImageUrl;
	imgCoverElement.style.width = "50 px";

	const audioElement = document.createElement("audio");
	audioElement.src = anyTrack.trackUrl;
	audioElement.controls = true;
	trackElement.append(
		imgCoverElement,
		anyTrack.artistName + ": " + anyTrack.trackTitle,
		audioElement
	);
	return trackElement;
}
