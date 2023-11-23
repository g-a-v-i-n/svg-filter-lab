const sourceKeys = [
	"SourceGraphic",
	"SourceAlpha",
	"BackgroundImage",
	"BackgroundAlpha",
	"FillPaint",
	"StrokePaint",
];

export function valueIsASourceKey(value: string) {
	return sourceKeys.includes(value);
}

export default sourceKeys;
