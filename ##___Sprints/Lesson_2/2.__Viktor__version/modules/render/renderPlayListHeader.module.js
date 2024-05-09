export function renderPlayListHeader(anyPlayListHeader) {
	const playListImgCoverElement = document.createElement("img");
	playListImgCoverElement.src = anyPlayListHeader.coverImageUrl;
	playListImgCoverElement.style.width = "20 px";
	const playListHeaderElement = document.createElement("h2");
	playListHeaderElement.append(
		anyPlayListHeader.title,
		playListImgCoverElement
	);

	document.body.append(playListHeaderElement);
}
