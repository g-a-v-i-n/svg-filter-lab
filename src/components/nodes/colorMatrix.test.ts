import { expect, test } from "vitest";
import { fromXml } from "xast-util-from-xml";
import { importer } from "./ColorMatrix";
import { remove } from "unist-util-remove";

test("Mode attribute with value is parsed to state", () => {
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
					primary: () => {},
					aliasOf: "values",
				},
				saturateValues: {
					type: "number",
					value: 1,
					primary: () => {},
					aliasOf: "values",
				},
				hueRotateValues: {
					type: "number",
					value: 1,
					primary: () => {},
					aliasOf: "values",
				},
				luminanceToAlphaValues: {
					type: "number",
					value: 1,
					primary: () => {},
					aliasOf: "values",
				},
			},
		},
	};

	const xast = fromXml(filterText);
	remove(xast, (node) => node.type !== "element");

	// @ts-expect-error NB Gavin: filterText is static and has known ouput
	const blendAst = xast.children[0].children[0];

	const astState = importer(blendAst);

	expect(JSON.stringify(astState)).toStrictEqual(JSON.stringify(expected));
});

// test("Mode attribute with without value is parsed to state", () => {
// 	const filterText = `
//         <filter>
//             <feBlend in="SourceGraphic" in2="BackgroundImage" result="blend" />
//         </filter>
//     `;

// 	const target = {
// 		ast: {
// 			tagName: "feBlend",
// 			attributes: {
// 				mode: {
// 					type: "string",
// 					value: null,
// 					noValue: true,
// 				},
// 			},
// 			children: [],
// 		},
// 	};

// 	const xast = fromXml(filterText);
// 	remove(xast, (node) => node.type !== "element");

// 	// @ts-expect-error NB Gavin: filterText is static and has known ouput
// 	const blendAst = xast.children[0].children[0];

// 	const astState = importer(blendAst);

// 	expect(astState).toMatchObject(target);
// });
