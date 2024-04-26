//render

export function renderPlaylistS(inputPlaylist) {
	for (let i = 0; i < inputPlaylist.length; i++) {
		const playlist = inputPlaylist[i];
		renderPlaylist(playlist);
	}
}

// function renderPlaylistS() {
// 	renderPlaylist(playlistHipHopHits);
// 	renderPlaylist(playlistRapHits1990);
// }

function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering);
	renderPlaylistTracks(playlistForRendering.tracks);
}

function renderPlaylistHeader(playlistForRendering) {
	renderPlaylistHeaderTitle(playlistForRendering);
	renderPlaylistHeaderCoverImage(playlistForRendering);
}

function renderPlaylistHeaderTitle(playlistForRendering) {
	const playlistTitleElement = document.createElement("h2");
	playlistTitleElement.append(playlistForRendering.title);
	document.body.append(playlistTitleElement);
}

function renderPlaylistHeaderCoverImage(playlistForRendering) {
	const playlistCoverImageElement = document.createElement("img");
	playlistCoverImageElement.src = playlistForRendering.coverImageUrl;
	playlistCoverImageElement.append(playlistForRendering.title);
	document.body.append(playlistCoverImageElement);
}

function renderPlaylistTracks(tracksList) {
	for (let i = 0; i < tracksList.length; i++) {
		const showTrack = tracksList[i];
		renderPlaylistAnyTrack(showTrack);
	}

	// renderPlaylistTrack(playlistForRendering.tracks[0]);
	// renderPlaylistTrack(playlistForRendering.tracks[1]);
	// renderPlaylistTrack(playlistForRendering.tracks[2]);
	// renderPlaylistTrack(playlistForRendering.tracks[3]);
}

function renderPlaylistAnyTrack(insertAnyTrackForRendering) {
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
