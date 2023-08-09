export const ConvertDecimalToHex = (num: number, alpha?: boolean): string => {
	const r = (num >>> 24) & 0xff;
	const g = (num >>> 16) & 0xff;
	const b = (num >>> 8) & 0xff;
	const a = num & 0xff;

	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) + (alpha ? SetHexAlpha(a / 255) : "");
};

export const ConvertDecimalRGBAToString = (num: number): string => {
	const r = (num >>> 24) & 0xff;
	const g = (num >>> 16) & 0xff;
	const b = (num >>> 8) & 0xff;
	const a = num & 0xff;

	return `rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(3)})`;
};

export const SetHexAlpha = (alpha: number): string => {
	if (alpha > 1 || alpha < 0 || isNaN(alpha)) {
		throw Error("alpha must be between 0 and 1");
	}

	return Math.ceil(255 * alpha)
		.toString(16)
		.toUpperCase();
};
