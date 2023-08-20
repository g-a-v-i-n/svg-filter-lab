export const bubblyBumps = `
<filter id="bubbly-bumps" height="200%" width="200%" x="-50%" y="-50%" data-name="Bubbly Bumps" data-category="Bumps" data-description="Flexible bubbles effect with some displacement" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="0.5" />
  <feTurbulence baseFrequency="0.2" seed="300" numOctaves="10" result="result1" type="fractalNoise" />
  <feGaussianBlur stdDeviation="0.5" result="result8" />
  <feDisplacementMap result="result7" in2="result8" scale="5" in="result0" xChannelSelector="R" />
  <feComposite result="result2" operator="in" in2="result1" in="result7" />
  <feComposite k3="3" in2="result2" in="result0" operator="arithmetic" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="result2" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -1.8 -0.5 0 5.7 -3.5 " in="fbSourceGraphic" result="fbSourceGraphicAlpha" />
  <feGaussianBlur stdDeviation="0.5" in="fbSourceGraphicAlpha" result="result0" />
  <feSpecularLighting result="result6" surfaceScale="5" specularExponent="3">
    <feDistantLight azimuth="225" elevation="10" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphicAlpha" in="result6" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="1" k3="0.7" in2="result2" />
</filter>
`
