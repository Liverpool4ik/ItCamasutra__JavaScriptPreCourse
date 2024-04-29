// data
const playlists = [
	{
		playListId: "1",
		playListInfo: {
			title: "Hip-Hop Hits",
			coverImageUrl: "./src/images/HipHopPlayListImages/mainCoverImage.jpg",
			playListTracksInfo: {
				totalTracksCount: 4,
				totalTracksDurationInSec: 733,
			},
		},

		tracks: [
			{
				trackCoverImageUrl: "./src/images/HipHopPlayListImages/image-1.jpg",
				artistName: "Eminem",
				trackTitle: "Rap God",
				trackUrl: "./src/musicTracks/playListHipHop/track-1.mp3",
				isPopular: true,
			},
			{
				trackCoverImageUrl: "./src/images/HipHopPlayListImages/image-2.jpg",
				artistName: "50 cent",
				trackTitle: "In da Club",
				trackUrl: "./src/musicTracks/playListHipHop/track-2.mp3",
				isPopular: true,
			},
			{
				trackCoverImageUrl: "./src/images/HipHopPlayListImages/image-3.jpg",
				artistName: "DMX",
				trackTitle: "X Gon'Give It To YA",
				trackUrl: "./src/musicTracks/playListHipHop/track-3.mp3",
				isPopular: false,
			},
			{
				trackCoverImageUrl: "./src/images/HipHopPlayListImages/image-4.jpg",
				artistName: "Eminem feat 50 cent, Cashia, Lloyd Banks",
				trackTitle: "You Don't Know",
				trackUrl: "./src/musicTracks/playListHipHop/track-4.mp3",
				isPopular: false,
			},
		],
	},
	{
		playListId: "2",

		playListInfo: {
			title: "Rap Hits 1990s",
			coverImageUrl: "./src/images/RapHits1990s/mainCoverImage.jpg",
			playListTracksInfo: {
				totalTracks: 4,
				totalTracksDurationInSeconds: 733,
			},
		},
		tracks: [
			{
				trackCoverImageUrl: "./src/images/RapHits1990s/image-1.jpg",
				artistName: "Public Enemy",
				trackTitle: "Fight The Power",
				trackUrl: "./src/musicTracks/playListRapHits1990/track-1.mp3",
				isPopular: false,
			},
			{
				trackCoverImageUrl: "./src/images/RapHits1990s/image-2.jpg",
				artistName: "Vanill Sky",
				trackTitle: "Ice Ice Baby",
				trackUrl: "./src/musicTracks/playListRapHits1990/track-2.mp3",
				isPopular: true,
			},
			{
				trackCoverImageUrl: "./src/images/RapHits1990s/image-3.jpg",
				artistName: "MC Hummer",
				trackTitle: "You Can't Touch This",
				trackUrl: "./src/musicTracks/playListRapHits1990/track-3.mp3",
				isPopular: false,
			},
			{
				trackCoverImageUrl: "./src/images/RapHits1990s/image-4.jpg",
				artistName: "Brand Nubian",
				trackTitle: "Brand Nubian",
				trackUrl: "./src/musicTracks/playListRapHits1990/track-4.mp3",
				isPopular: true,
			},
		],
	},
];

// render data

renderAllPlayLists(playlists);

function renderAllPlayLists(allPlayLists) {
	for (let i = 0; i < allPlayLists.length; i++) {
		renderAnyPlayList(allPlayLists[i]);
	}
}
function renderAnyPlayList(anyPlayList) {
	renderPlayListHeader(anyPlayList.playListInfo);
	renderPlayListTracks(anyPlayList.tracks);
}

function renderPlayListHeader(anyPlayListHeader) {
	const playListHeaderElement = document.createElement("h2");
	playListHeaderElement.append(anyPlayListHeader.title);
	document.body.append(playListHeaderElement);
}
function renderPlayListTracks(anyTracks) {
	const tracksListElement = document.createElement("ul");
	for (let i = 0; i < anyTracks.length; i++) {
		const trackElement = document.createElement("li");
		tracksListElement.append(trackElement);
	}

	document.body.append(tracksListElement);
}
