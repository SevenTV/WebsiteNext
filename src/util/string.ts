export function toTitleCase(string: string) {
	return string.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substring(1));
}

export function findWordAt(searchText: string, searchStart: number) {
	let start = 0;
	let end = 0;

	if (searchText.length === 0) return;

	for (let i = searchStart; ; i--) {
		if (i < 1 || (searchText.charAt(i - 1) === " " && i !== searchStart)) {
			start = i;
			break;
		}
	}

	for (let i = searchStart + 1; ; i++) {
		if (i > searchText.length || searchText.charAt(i - 1) === " ") {
			end = i - 1;
			break;
		}
	}

	if (searchStart != start) {
		const word = searchText.substring(start, end);

		if (word !== " ") {
			return { start, end, word };
		}
	}
}
