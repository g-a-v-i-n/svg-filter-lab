export const peelOff = `
<filter id="peel-off" height="200%" width="200%" x="-50%" y="-50%" data-name="Peel Off" data-category="Materials" data-description="Peeling painting on a wall" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" numOctaves="3" baseFrequency="0.07" result="result1" />
  <feGaussianBlur stdDeviation="3" in="SourceAlpha" />
  <feComposite in2="result1" operator="in" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -9" result="result1" />
  <feComposite in="SourceGraphic" operator="in" result="result1" in2="result1" />
  <feTurbulence baseFrequency="0.04" numOctaves="5" result="result0" type="fractalNoise" />
  <feDisplacementMap in2="result0" in="result1" xChannelSelector="R" yChannelSelector="G" scale="35" result="result2" />
  <feColorMatrix result="result3" values="4 0 0 0 0 0 1 0 0 0 0 0 2 0 0 0 0 0 0.7 0 " />
  <feGaussianBlur stdDeviation="0.3" in="result1" result="result4" />
  <feComposite in2="result3" in="result4" result="fbSourceGraphic" operator="xor" />
  <feDiffuseLighting in="fbSourceGraphic" diffuseConstant="2" result="result3" surfaceScale="5">
    <feDistantLight azimuth="225" elevation="25" />
  </feDiffuseLighting>
  <feBlend in2="fbSourceGraphic" in="result3" mode="darken" result="result7" />
  <feComposite in2="fbSourceGraphic" operator="in" in="result7" />
</filter>
`
