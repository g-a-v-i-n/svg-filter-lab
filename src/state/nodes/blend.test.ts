import { parse, stringify } from './blend'

const sample = `
    <filter>
        <feBlend in="a" in2="b" result="c" mode="overlay" />
    </filter>
`

test('is transparent - all attributes', () => {
    expect(stringify(parse(sample)))
    .toBe(`
    <filter>
        ${sample}
    </filter>
    `);
  });