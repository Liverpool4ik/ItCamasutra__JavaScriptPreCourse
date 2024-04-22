// data
const playlist = {
	title: "Hip-Hop Hits",
	coverImageUrl: "./images/HipHopPlayListImages/mainCoverImage.jpg",
	info: {
		totalTracks: 4,
		totalTracksDurationInSeconds: 733,
	},
	tracks: [
		{
			trackCoverImageUrl: "./images/image-1.jpg",
			ArtistName: "Eminem",
			trackTitle: "Rap God",
			trackUrl: "./musicTracks/playListHipHop/track-1.mp3",
			isPopular: true,
		},
		{
			trackCoverImageUrl: "./images/image-2.jpg",
			ArtistName: "50 cent",
			trackTitle: "In da Club",
			trackUrl: "./musicTracks/playListHipHop/track-2.mp3",
			isPopular: true,
		},
		{
			trackCoverImageUrl: "./images/image-3.jpg",
			ArtistName: "DMX",
			trackTitle: "X Gon'Give It To YA",
			trackUrl: "./musicTracks/playListHipHop/track-3.mp3",
			isPopular: false,
		},
		{
			trackCoverImageUrl: "./images/image-4.jpg",
			ArtistName: "Eminem feat 50 cent, Cashia, Lloyd Banks",
			trackTitle: "You Don't Know",
			trackUrl: "./musicTracks/playListHipHop/track-4.mp3",
			isPopular: false,
		},
	],
};

//render
renderPlaylist(playlist);

function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering);
	renderPlaylistTracks(playlistForRendering);
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

function renderPlaylistTracks(playlistForRendering) {
	const playlistElement = document.createElement("h2");
	playlistElement.append(playlistForRendering.tracks);
	document.body.append(playlistElement);
}
