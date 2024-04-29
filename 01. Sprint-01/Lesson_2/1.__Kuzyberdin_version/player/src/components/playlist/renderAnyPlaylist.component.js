import { renderPlaylistHeader } from "./header/renderPlaylistHeader.component.js";

import { renderPlaylistTracks } from "./tracks/renderTrackS.componennt.js";

export function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering);
	renderPlaylistTracks(playlistForRendering.tracks);
}
