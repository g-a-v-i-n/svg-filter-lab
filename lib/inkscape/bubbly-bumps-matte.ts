export const bubblyBumpsMatte = `
<filter id="bubbly-bumps-matte" height="200%" width="200%" x="-50%" y="-50%" data-name="Bubbly Bumps Matte" data-category="Bumps" data-description="Same as Bubbly Bumps but with a diffuse light instead of a specular one" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="0.5" />
  <feTurbulence baseFrequency="0.2" seed="300" numOctaves="10" result="result1" type="fractalNoise" />
  <feGaussianBlur stdDeviation="0.5" result="result91" />
  <feDisplacementMap xChannelSelector="R" scale="5" result="result6" in="result0" in2="result91" />
  <feComposite result="result2" operator="in" in2="result1" in="result6" />
  <feComposite k3="3" in2="result2" in="result0" operator="arithmetic" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="result2" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -1.8 -0.5 0 5.7 -3.5 " in="fbSourceGraphic" result="fbSourceGraphicAlpha" />
  <feGaussianBlur stdDeviation="0.5" in="fbSourceGraphicAlpha" result="result0" />
  <feDiffuseLighting result="result5" surfaceScale="50" diffuseConstant="0.6">
    <feDistantLight azimuth="225" elevation="10" />
  </feDiffuseLighting>
  <feComposite in2="fbSourceGraphicAlpha" in="result5" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="1" k3="0.7" in2="result2" />
</filter>
`;
