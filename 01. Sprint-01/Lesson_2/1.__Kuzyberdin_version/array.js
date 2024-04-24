// let everyDayTips = [113, 110, 95, 90, 91];

// for (let i = 0; i < everyDayTips.length; i++) {
// 	const number = everyDayTips[i];
// 	window.document.write(number);
// }

let myDaySalary = [
	{
		day: "Monday",
		money: 900,
	},
	{
		day: "Tuesday",
		money: 1900,
	},
	{
		day: "Wednesday",
		money: 1100,
	},
	{
		day: "Thursday",
		money: 15000,
	},
	{
		day: "Friday",
		money: 9009,
	},
];

for (let i = 0; i < myDaySalary.length; i++) {
	const myWeekSalary = myDaySalary[i];
	document.write(myWeekSalary.money);
}

let myDaysOfStudy = [
	{
		day: "Monday",
		money: 900,
	},
	{
		day: "Tuesday",
		money: 1900,
	},
	{
		day: "Wednesday",
		money: 1100,
	},
	{
		day: "Thursday",
		money: 15000,
	},
	{
		day: "Friday",
		money: 9009,
	},
	{
		day: "Saturday",
		money: 9009,
	},
	{
		day: "SunDay",
		money: 9009,
	},
];

for (let i = myDaysOfStudy.length - 1; i >= 0; i--) {
	const myWeekSalary = myDaysOfStudy[i];
	document.write(myWeekSalary.day);
}
