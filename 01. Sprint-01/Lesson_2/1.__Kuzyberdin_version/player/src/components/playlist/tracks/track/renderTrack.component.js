export function renderPlaylistAnyTrack(insertAnyTrackForRendering) {
	const trackElement = document.createElement("div");

	const coverImageTrackElement = document.createElement("img");
	coverImageTrackElement.src = insertAnyTrackForRendering.trackCoverImageUrl;
	trackElement.append(coverImageTrackElement);

	const trackTitleElement = document.createElement("div");
	if (insertAnyTrackForRendering.isPopular) {
		trackTitleElement.append("⭐");
	}

	trackTitleElement.append(
		insertAnyTrackForRendering.artistName +
			" - " +
			insertAnyTrackForRendering.trackTitle
	);
	trackElement.append(trackTitleElement);

	const audioElement = document.createElement("audio");
	audioElement.src = insertAnyTrackForRendering.trackUrl;
	audioElement.controls = true;
	trackElement.append(audioElement);

	document.body.append(trackElement);
}
