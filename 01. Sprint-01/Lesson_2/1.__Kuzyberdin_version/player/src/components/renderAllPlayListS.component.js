//render
import { renderPlaylist } from "./playlist/renderAnyPlaylist.component.js";

import { renderSeparateLine } from "./playlist/miniComponents/renderSeparateLine.component.js";

export function renderPlaylistS(inputPlaylist) {
	for (let i = 0; i < inputPlaylist.length; i++) {
		const playlist = inputPlaylist[i];
		renderPlaylist(playlist);
		renderSeparateLine();
	}
}

// function renderPlaylistS() {
// 	renderPlaylist(playlistHipHopHits);
// 	renderPlaylist(playlistRapHits1990);
// }
