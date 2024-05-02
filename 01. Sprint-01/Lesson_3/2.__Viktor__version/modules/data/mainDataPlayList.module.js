export const playlists = [
	{
		playListId: "1",
		playListInfo: {
			title: "Hip-Hop Hits",
			coverImageUrl: "./images/HipHopPlayListImages/mainCoverImage.jpg",
			playListTracksInfo: {
				totalTracksCount: 4,
				totalTracksDurationInSec: 733,
			},
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
		playListId: "2",

		playListInfo: {
			title: "Rap Hits 1990s",
			coverImageUrl: "./images/RapHits1990s/mainCoverImage.jpg",
			playListTracksInfo: {
				totalTracks: 4,
				totalTracksDurationInSeconds: 733,
			},
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
