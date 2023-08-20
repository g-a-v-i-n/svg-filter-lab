export const canvasBumpsAlpha = `
<filter id="canvas-bumps-alpha" height="200%" width="200%" x="-50%" y="-50%" data-name="Canvas Bumps Alpha" data-category="Bumps" data-description="Same as Canvas Bumps but with transparent highlights" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" result="result1" numOctaves="7" seed="300" baseFrequency="0.2" />
  <feBlend in="result1" in2="SourceGraphic" mode="screen" result="fbSourceGraphic" />
  <feColorMatrix result="fbSourceGraphicAlpha" values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 4 -2.5 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="0.5" />
  <feSpecularLighting result="result6" surfaceScale="-5" specularConstant="1" specularExponent="5">
    <feDistantLight azimuth="225" elevation="35" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="SourceGraphic" in2="result6" />
  <feComposite in2="result2" k3="1" k2="1" operator="arithmetic" result="result4" in="result2" />
</filter>
`
