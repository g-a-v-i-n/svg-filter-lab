import { expect, test } from "vitest";
import { fromXml } from "xast-util-from-xml";
import { importer } from "./Blend";
import { remove } from "unist-util-remove";
import { STRING } from "@lib/attrTypes";

test("Mode attribute with value is parsed to state", () => {
	const filterText = `
        <filter>
            <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply" result="blend" />
        </filter>
    `;

	const expected = {
		ast: {
			tagName: "feBlend",
			attributes: {
				mode: {
					type: STRING,
					value: "multiply",
				},
			},
			children: [],
		},
	};

	const xast = fromXml(filterText);
	remove(xast, (node) => node.type !== "element");

	// @ts-expect-error NB Gavin: filterText is static and has known ouput
	const blendAst = xast.children[0].children[0];

	const astState = importer(blendAst);

	expect(JSON.stringify(astState)).toStrictEqual(JSON.stringify(expected));
});

test("Mode attribute with without value is parsed to state", () => {
	const filterText = `
        <filter>
            <feBlend in="SourceGraphic" in2="BackgroundImage" result="blend" />
        </filter>
    `;

	const expected = {
		ast: {
			tagName: "feBlend",
			attributes: {
				mode: {
					type: STRING,
					value: null,
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

	expect(JSON.stringify(astState)).toStrictEqual(JSON.stringify(expected));
});
