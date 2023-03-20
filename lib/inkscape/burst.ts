export const burst = `
<filter id="burst" height="200%" width="200%" x="-50%" y="-50%" data-name="Burst" data-category="Textures" data-description="Burst balloon texture crumpled and with holes" color-interpolation-filters="sRGB">
  <feTurbulence seed="8" type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="result8" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 4 -0.7 " result="result5" />
  <feComposite result="result11" in2="result5" operator="in" in="SourceGraphic" />
  <feDisplacementMap result="result4" scale="50" yChannelSelector="G" xChannelSelector="R" in="result11" in2="result8" />
  <feComposite result="result7" in2="SourceAlpha" operator="arithmetic" in="result4" k2="1.3" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="result7" values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 4 -2.5 " />
  <feGaussianBlur stdDeviation="0.5" result="result10" />
  <feDiffuseLighting surfaceScale="15" diffuseConstant="0.4" result="result6" lighting-color="rgb(255,255,255)" in="result10">
    <feDistantLight azimuth="235" elevation="25" />
  </feDiffuseLighting>
  <feComposite operator="in" result="result2" in="result6" in2="result7" />
  <feComposite in2="result7" operator="arithmetic" k2="0.8" k3="0.8" result="result12" />
  <feBlend in2="result12" mode="lighten" />
</filter>
`
