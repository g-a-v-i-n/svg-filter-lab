export const monochromeTransparency = `
<filter id="monochrome-transparency" height="200%" width="200%" x="-50%" y="-50%" data-name="Monochrome Transparency" data-category="Fill and Transparency" data-description="Convert to a colorizable transparent positive or negative" color-interpolation-filters="sRGB">
  <feColorMatrix type="luminanceToAlpha" result="fbSourceGraphic" />
  <feFlood flood-color="rgb(134,39,24)" result="result1" flood-opacity="1" />
  <feComposite operator="out" in2="fbSourceGraphic" result="result2" />
  <feComposite operator="in" in2="SourceGraphic" />
</filter>
`
