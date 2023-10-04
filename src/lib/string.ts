import { Matrix } from "@/types";

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
	toNumber: (value: string) => {
		return parseFloat(value);
	},
	fromNumber: (value: number) => {
		return value.toString();
	},
	toColor: (value: string) => {
		return value;
	},
	fromColor: (value: string) => {
		return value;
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
