//Создание заголовка "h2" и добавление текста в этот заголовок
const creatingH2Element = document.createElement("h2"); // h2 - висти в "воздухе"
const createdParagraph = document.createElement("p"); // создание "р" - параграфа
createdParagraph.append(
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa, adipisci laudantium harum vitae numquam."
); // добавление текста в элемент "р"

creatingH2Element.append("Hello from main.js FILE");

// Добавление заголовка "h2" в тело (body) документа
document.body.append(creatingH2Element);

// Создание выпадающего списка

const premierLeagueChampionship = {
	title: "Premier League Champion",
	question1: "Who's the Champ?",
	champion: "Liverpool",
	question2: "games Played",
	gamesPlayed: 38,
	question3: "games Won",
	gamesWon: 30,
	question4: "games Lost",
	gamesLost: 4,
	question5: "games Draw",
	gamesDraw: 4,
	question6: "Was this Team a Champ Last Season?",
	lastChampionCheckboxBool: false,
};

// Title

let pageTitleElement = document.createElement("h1");
pageTitleElement.innerText = premierLeagueChampionship.title;
document.body.append(pageTitleElement);

// first question
let pageText1TitleElement = document.createElement("h3");
pageText1TitleElement.innerText = premierLeagueChampionship.question1;
document.body.append(pageText1TitleElement);

// first input
let teamChampionChoose1 = document.createElement("input");
teamChampionChoose1.value = premierLeagueChampionship.champion;
document.body.append(teamChampionChoose1);

// let afterteamChampionChooseBR = document.createElement("br");
// document.body.append(afterteamChampionChooseBR);

///================================================================
// second question
let pageText2TitleElement = document.createElement("h3");
pageText2TitleElement.innerText = premierLeagueChampionship.question2;
document.body.append(pageText2TitleElement);

// second input
let teamChampionGamesPlayed = document.createElement("input");
teamChampionGamesPlayed.value = premierLeagueChampionship.gamesPlayed;
document.body.append(teamChampionGamesPlayed);
///================================================================

// third question
let pageText3TitleElement = document.createElement("h3");
pageText3TitleElement.innerText = premierLeagueChampionship.question3;
document.body.append(pageText3TitleElement);

// third input
let teamChampionGamesWon = document.createElement("input");
teamChampionGamesWon.value = premierLeagueChampionship.gamesWon;
document.body.append(teamChampionGamesWon);

///================================================================

// forth question
let pageText4TitleElement = document.createElement("h3");
pageText4TitleElement.innerText = premierLeagueChampionship.question4;
document.body.append(pageText4TitleElement);

// forth input
let teamChampionGamesLost = document.createElement("input");
teamChampionGamesLost.value = premierLeagueChampionship.gamesLost;
document.body.append(teamChampionGamesLost);

///================================================================

// fifth question
let pageText5TitleElement = document.createElement("h3");
pageText5TitleElement.innerText = premierLeagueChampionship.question5;
document.body.append(pageText5TitleElement);

// fifth input let teamChampionGamesDraw = document.createElement("input");
let teamChampionGamesDraw = document.createElement("input");
teamChampionGamesDraw.value = premierLeagueChampionship.gamesDraw;
document.body.append(teamChampionGamesDraw);

///================================================================

// six question
let pageText6TitleElement = document.createElement("h3");
pageText6TitleElement.innerText = premierLeagueChampionship.question6;
document.body.append(pageText6TitleElement);

// six input
let wasLastYearCampion = document.createElement("input");
wasLastYearCampion.type = "checkbox";
wasLastYearCampion.checked = premierLeagueChampionship.lastChampionCheckboxBool;
document.body.append(wasLastYearCampion);

///================================================================

///================================================================///================================================================
///================================================================///================================================================
///================================================================///================================================================

const FootballLeagues = {
	titleLeague: "England Premier League Champion",
	totalClubsCount: 20,
	championsLeagueAcces: true,
	teams: [
		{ clubname: "Liverpool" },
		{ clubname: "Arsenal" },
		{ clubname: "Manchester United" },
		{ clubname: "Chelsea" },
		{ clubname: "Man City" },
	],
};

let leaguesTitleElement = document.createElement("h1");
leaguesTitleElement.innerText = FootballLeagues.titleLeague;
document.body.append(leaguesTitleElement);

let premierLeagueClubSelect = document.createElement("select");

let premierLeagueClubSelect0 = document.createElement("option");
premierLeagueClubSelect0.append(FootballLeagues.teams[0].clubname);

let premierLeagueClubSelect1 = document.createElement("option");
premierLeagueClubSelect1.append(FootballLeagues.teams[1].clubname);

let premierLeagueClubSelect2 = document.createElement("option");
premierLeagueClubSelect2.append(FootballLeagues.teams[2].clubname);

let premierLeagueClubSelect3 = document.createElement("option");
premierLeagueClubSelect3.append(FootballLeagues.teams[3].clubname);

let premierLeagueClubSelect4 = document.createElement("option");
premierLeagueClubSelect4.append(FootballLeagues.teams[4].clubname);

premierLeagueClubSelect.append(
	premierLeagueClubSelect0,
	premierLeagueClubSelect1,
	premierLeagueClubSelect2,
	premierLeagueClubSelect3,
	premierLeagueClubSelect4
);

document.body.append(premierLeagueClubSelect);

///================================================================///================================================================
///================================================================///================================================================
///================================================================///================================================================
