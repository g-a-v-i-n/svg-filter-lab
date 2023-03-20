export const blackLight = `
<filter id="black-light" height="200%" width="200%" x="-50%" y="-50%" data-name="Black Light" data-category="Color" data-description="Light areas turn to black" color-interpolation-filters="sRGB">
  <feColorMatrix type="luminanceToAlpha" result="result2" />
  <feComposite in2="SourceGraphic" operator="arithmetic" in="result2" k3="2" result="result4" />
  <feBlend in="result4" mode="multiply" result="result3" in2="result2" />
  <feComposite in2="SourceGraphic" operator="in" in="result3" />
</filter>
`
