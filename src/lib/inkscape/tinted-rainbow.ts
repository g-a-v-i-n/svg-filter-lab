export const tintedRainbow = `
<filter id="tinted-rainbow" height="200%" width="200%" x="-50%" y="-50%" data-name="Tinted Rainbow" data-category="Textures" data-description="Smooth rainbow colors melted along the edges and colorizable" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" />
  <feTurbulence baseFrequency="0.015" numOctaves="2" type="fractalNoise" result="result7" seed="20" />
  <feComposite in="SourceGraphic" operator="in" result="result6" in2="result8" />
  <feComposite in="result6" operator="arithmetic" result="result2" in2="result7" k3="1.7" />
  <feComposite in2="result6" operator="in" in="result2" result="fbSourceGraphic" />
  <feComposite in2="SourceGraphic" in="fbSourceGraphic" k3="0.3" k2="1.5" operator="arithmetic" result="result9" />
</filter>
`
