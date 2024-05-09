import { renderPlayListHeader } from "./renderPlayListHeader.module.js";
import { renderPlayListTracks } from "./renderPlayListTrackSS.module.js";

export function renderAnyPlayList(anyPlayList) {
	renderPlayListHeader(anyPlayList.playListInfo);
	renderPlayListTracks(anyPlayList.tracks);
}
