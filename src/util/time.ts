export function secondsToString(time: number) {
	const hours = Math.floor(time / 60 / 60);
	const minutes = Math.floor(time / 60) % 60;
	const seconds = Math.floor(time) % 60;

	const hoursS = hours.toString().padStart(2, "0");
	const minutesS = minutes.toString().padStart(2, "0");
	const secondsS = seconds.toString().padStart(2, "0");

	return `${hours > 0 ? `${hoursS}:` : ""}${minutesS}:${secondsS}`;
}

export function secondsToDurationString(time: number) {
	const hours = Math.floor(time / 60 / 60);
	const minutes = Math.floor(time / 60) % 60;
	const seconds = Math.floor(time) % 60;

	const words: string[] = [];

	if (hours > 0) words.push(`${hours}h`);
	if (minutes > 0) words.push(`${minutes}m`);
	if (seconds > 0 || words.length == 0) words.push(`${seconds}s`);

	return words.join(" ");
}
