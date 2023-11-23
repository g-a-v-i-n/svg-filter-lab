import { Matrix, Color as ColorType } from "@/types";
import Color from "colorjs.io";
import _ from "lodash";

const string = {
	toMatrix: (value: string, rows: number, cols: number): Matrix => {
		const matrix = [];
		const values = value.split(" ");
		for (let i = 0; i < rows; i++) {
			const row = [];
			for (let j = 0; j < cols; j++) {
				row.push(parseFloat(values[i * cols + j]));
			}
			matrix.push(row);
		}
		return matrix;
	},
	fromMatrix: (matrix: number[][]) => {
		return matrix.flat().join(" ");
	},
	toArray: (value: string) => {
		return value.split(" ").map((v) => parseFloat(v));
	},
	fromArray: (value: number[]) => {
		return value.join(" ");
	},
	toNumber: (value: string) => {
		return parseFloat(value);
	},
	fromNumber: (value: number) => {
		return value.toString();
	},
	toColor: (value: string): ColorType => {
		const color = new Color(value);

		const { spaceId, coords, alpha } = color;
		console.log(color, spaceId, coords, alpha);
		switch (spaceId) {
			case "srgb": {
				return {
					type: "rgb",
					value: {
						r: coords[0] * 255,
						g: coords[1] * 255,
						b: coords[2] * 255,
					},
				};
			}
			case "srgba": {
				return {
					type: "rgba",
					value: {
						r: coords[0],
						g: coords[1],
						b: coords[2],
						a: alpha,
					},
				};
			}
			case "hsl": {
				return {
					type: "hsl",
					value: {
						h: coords[0],
						s: coords[1],
						l: coords[2],
					},
				};
			}
			case "hsla": {
				return {
					type: "hsla",
					value: {
						h: coords[0],
						s: coords[1],
						l: coords[2],
						a: alpha,
					},
				};
			}
			case "hex": {
				return {
					type: "hex",
					value: value,
				};
			}
		}
	},
	fromColor: (value: ColorType): string => {
		const { type, value: color } = value;
		switch (type) {
			case "rgb": {
				return `rgb(${color.r}, ${color.g}, ${color.b})`;
			}
			case "rgba": {
				return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
			}
			case "hsl": {
				return `hsl(${color.h}, ${color.s}, ${color.l})`;
			}
			case "hsla": {
				return `hsla(${color.h}, ${color.s}, ${color.l}, ${color.a})`;
			}
			case "hex": {
				return color;
			}
		}
	},
	toBoolean: (value: string) => {
		return value === "true";
	},
	fromBoolean: (value: boolean) => {
		return value.toString();
	},
	value: (value: string) => {
		return value;
	},
	normalize: (value: string) => {
		return value.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();
	},
};

export default string;
