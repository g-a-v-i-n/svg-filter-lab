export const blackHole = `
<filter id="black-hole" height="200%" width="200%" x="-50%" y="-50%" data-name="Black Hole" data-category="Morphology" data-description="Creates a black light inside and outside" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="result1" />
  <feComposite operator="arithmetic" k2="3.2" k1="-1" k4="-2" result="result3" in2="result1" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0 " result="result2" />
  <feComposite result="fbSourceGraphic" in="SourceGraphic" operator="out" in2="result2" />
  <feBlend mode="multiply" in="result1" in2="fbSourceGraphic" result="result91" />
  <feBlend mode="screen" in="fbSourceGraphic" in2="result91" />
</filter>
`
