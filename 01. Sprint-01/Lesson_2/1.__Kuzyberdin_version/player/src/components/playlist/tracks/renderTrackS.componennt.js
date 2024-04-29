import { renderPlaylistAnyTrack } from "./track/renderTrack.component.js";

export function renderPlaylistTracks(tracksList) {
	for (let i = 0; i < tracksList.length; i++) {
		const showTrack = tracksList[i];
		renderPlaylistAnyTrack(showTrack);
	}

	// renderPlaylistTrack(playlistForRendering.tracks[0]);
	// renderPlaylistTrack(playlistForRendering.tracks[1]);
	// renderPlaylistTrack(playlistForRendering.tracks[2]);
	// renderPlaylistTrack(playlistForRendering.tracks[3]);
}
