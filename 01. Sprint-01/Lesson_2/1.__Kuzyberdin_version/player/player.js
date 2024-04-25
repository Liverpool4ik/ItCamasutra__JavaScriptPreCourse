// data
const playlists = [
	{
		title: "Hip-Hop Hits",
		coverImageUrl: "./images/HipHopPlayListImages/mainCoverImage.jpg",
		info: {
			totalTracks: 4,
			totalTracksDurationInSeconds: 733,
		},
		tracks: [
			{
				trackCoverImageUrl: "./images/HipHopPlayListImages/image-1.jpg",
				artistName: "Eminem",
				trackTitle: "Rap God",
				trackUrl: "./musicTracks/playListHipHop/track-1.mp3",
				isPopular: true,
			},
			{
				trackCoverImageUrl: "./images/HipHopPlayListImages/image-2.jpg",
				artistName: "50 cent",
				trackTitle: "In da Club",
				trackUrl: "./musicTracks/playListHipHop/track-2.mp3",
				isPopular: true,
			},
			{
				trackCoverImageUrl: "./images/HipHopPlayListImages/image-3.jpg",
				artistName: "DMX",
				trackTitle: "X Gon'Give It To YA",
				trackUrl: "./musicTracks/playListHipHop/track-3.mp3",
				isPopular: false,
			},
			{
				trackCoverImageUrl: "./images/HipHopPlayListImages/image-4.jpg",
				artistName: "Eminem feat 50 cent, Cashia, Lloyd Banks",
				trackTitle: "You Don't Know",
				trackUrl: "./musicTracks/playListHipHop/track-4.mp3",
				isPopular: false,
			},
		],
	},
	{
		title: "Rap Hits 1990s",
		coverImageUrl: "./images/RapHits1990s/mainCoverImage.jpg",
		info: {
			totalTracks: 4,
			totalTracksDurationInSeconds: 733,
		},
		tracks: [
			{
				trackCoverImageUrl: "./images/RapHits1990s/image-1.jpg",
				artistName: "Public Enemy",
				trackTitle: "Fight The Power",
				trackUrl: "./musicTracks/playListRapHits1990/track-1.mp3",
				isPopular: false,
			},
			{
				trackCoverImageUrl: "./images/RapHits1990s/image-2.jpg",
				artistName: "Vanill Sky",
				trackTitle: "Ice Ice Baby",
				trackUrl: "./musicTracks/playListRapHits1990/track-2.mp3",
				isPopular: true,
			},
			{
				trackCoverImageUrl: "./images/RapHits1990s/image-3.jpg",
				artistName: "MC Hummer",
				trackTitle: "You Can't Touch This",
				trackUrl: "./musicTracks/playListRapHits1990/track-3.mp3",
				isPopular: false,
			},
			{
				trackCoverImageUrl: "./images/RapHits1990s/image-4.jpg",
				artistName: "Brand Nubian",
				trackTitle: "Brand Nubian",
				trackUrl: "./musicTracks/playListRapHits1990/track-4.mp3",
				isPopular: true,
			},
		],
	},
];

//render

renderPlaylistS(playlists);

function renderPlaylistS(inputPlaylist) {
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
