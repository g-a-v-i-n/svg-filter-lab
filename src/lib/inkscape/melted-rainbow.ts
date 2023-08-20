export const meltedRainbow = `
<filter id="melted-rainbow" height="200%" width="200%" x="-50%" y="-50%" data-name="Melted Rainbow" data-category="Textures" data-description="Smooth rainbow colors slightly melted along the edges" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" />
  <feTurbulence baseFrequency="0.015" numOctaves="2" type="fractalNoise" result="result7" seed="20" />
  <feComposite in="SourceGraphic" operator="in" result="result6" in2="result8" />
  <feComposite in="result6" operator="arithmetic" result="result2" in2="result7" k3="1" />
  <feComposite in2="result6" operator="in" in="result2" result="fbSourceGraphic" />
  <feComposite in2="fbSourceGraphic" in="fbSourceGraphic" k2="2.5" operator="arithmetic" />
</filter>
`
