export const thickPaint = `
<filter id="thick-paint" height="200%" width="200%" x="-50%" y="-50%" data-name="Thick Paint" data-category="Bumps" data-description="Thick painting effect with turbulence" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result6" stdDeviation="0.9" id="feGaussianBlur3181" />
  <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" result="result2" />
  <feDisplacementMap yChannelSelector="A" xChannelSelector="R" scale="10" in2="result2" result="result5" in="result6" />
  <feBlend in="result6" in2="result5" mode="lighten" result="fbSourceGraphic" />
  <feColorMatrix result="result2" type="luminanceToAlpha" in="fbSourceGraphic" />
  <feDiffuseLighting diffuseConstant="0.65" result="result1" surfaceScale="-4">
    <feDistantLight azimuth="225" elevation="35" />
  </feDiffuseLighting>
  <feComposite result="result3" k3="0.5" k1="1.37" in="result1" operator="arithmetic" in2="fbSourceGraphic" />
  <feComposite result="result5" operator="in" in="result3" in2="result3" />
</filter>
`;
