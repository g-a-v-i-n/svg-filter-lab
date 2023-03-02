export const bubblyBumpsAlpha = `
<filter id="bubbly-bumps-alpha" height="200%" width="200%" x="-50%" y="-50%" data-name="Bubbly Bumps Alpha" data-category="Bumps" data-description="Same as Bubbly Bumps but with transparent highlights" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="0.5" />
  <feTurbulence baseFrequency="0.2" seed="300" numOctaves="10" result="result1" type="fractalNoise" />
  <feGaussianBlur stdDeviation="4" result="result8" />
  <feDisplacementMap result="result7" in2="result8" scale="5" in="SourceGraphic" xChannelSelector="R" />
  <feComposite result="result2" operator="in" in2="result1" in="result7" />
  <feComposite k3="3" in2="result2" in="result0" operator="arithmetic" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="result2" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -1.8 -0.5 0 5.7 -3.5 " in="fbSourceGraphic" result="fbSourceGraphicAlpha" />
  <feGaussianBlur stdDeviation="0.5" in="fbSourceGraphicAlpha" result="result0" />
  <feSpecularLighting result="result6" surfaceScale="-5" specularExponent="5">
    <feDistantLight azimuth="225" elevation="25" />
  </feSpecularLighting>
  <feComposite in2="result6" in="SourceGraphic" result="result2" operator="in" />
  <feComposite in="result2" result="result4" operator="arithmetic" k2="1" k3="1" in2="result2" />
</filter>
`;
