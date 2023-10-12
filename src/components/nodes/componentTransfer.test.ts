import { expect, test } from "vitest";
import { fromXml } from "xast-util-from-xml";
import { importer } from "./ComponentTransfer";
import { remove } from "unist-util-remove";

test("Import feColorMatrix with type='matrix'", () => {
	const filterText = `
        <filter>
            <feColorMatrix 
				in="SourceGraphic" 
				in2="BackgroundImage" 
				type="matrix"
				values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
				result="blend"
			/>
        </filter>
    `;

	const expected = {
		ast: {
			tagName: "feColorMatrix",
			attributes: {
				type: {
					type: "string",
					value: "matrix",
				},
				matrixValues: {
					type: "matrix",
					value: [
						[1, 0, 0, 0, 0],
						[0, 1, 0, 0, 0],
						[0, 0, 1, 0, 0],
						[0, 0, 0, 1, 0],
					],
					aliasOf: "values",
				},
				saturateValues: {
					type: "number",
					value: 1,
					aliasOf: "values",
				},
				hueRotateValues: {
					type: "number",
					value: 1,
					aliasOf: "values",
				},
				luminanceToAlphaValues: {
					type: "number",
					value: 1,
					aliasOf: "values",
				},
			},
			children: [],
		},
	};

	const xast = fromXml(filterText);
	remove(xast, (node) => node.type !== "element");

	// @ts-expect-error NB Gavin: filterText is static and has known ouput
	const ast = xast.children[0].children[0];

	const astState = importer(ast);

	// console.log(astState.ast, expected.ast);
	expect(astState).toMatchObject(expected);
});
