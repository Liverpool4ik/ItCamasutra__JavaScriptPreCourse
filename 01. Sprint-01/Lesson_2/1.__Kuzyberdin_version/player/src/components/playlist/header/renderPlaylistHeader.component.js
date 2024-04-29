export function renderPlaylistHeader(playlistForRendering) {
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
