export const canvasBumps = `
<filter id="canvas-bumps" height="200%" width="200%" x="-50%" y="-50%" data-name="Canvas Bumps" data-category="Bumps" data-description="Canvas texture with an HSL sensitive height map" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" result="result1" numOctaves="7" seed="300" baseFrequency="0.2" />
  <feDisplacementMap xChannelSelector="R" in2="result1" result="result7" />
  <feBlend in="result7" in2="SourceGraphic" mode="screen" result="fbSourceGraphic" />
  <feColorMatrix result="fbSourceGraphicAlpha" values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 4 -2.5 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="0.5" />
  <feSpecularLighting result="result6" surfaceScale="5" specularConstant="1" specularExponent="5">
    <feDistantLight azimuth="225" elevation="35" />
  </feSpecularLighting>
  <feComposite in2="SourceGraphic" k3="1" k2="0.5" operator="arithmetic" result="result4" />
  <feComposite operator="in" result="result2" in="result4" in2="SourceGraphic" />
</filter>
`;
