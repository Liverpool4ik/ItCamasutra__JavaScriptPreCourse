import { renderTrack } from "./renderPlayListTrack.module.js";

export function renderPlayListTracks(anyTracks) {
	const ulTracksListElement = document.createElement("ul");
	for (let i = 0; i < anyTracks.length; i++) {
		const tracksElement = renderTrack(anyTracks[i]);
		ulTracksListElement.append(tracksElement);
	}
	document.body.append(ulTracksListElement);
}
