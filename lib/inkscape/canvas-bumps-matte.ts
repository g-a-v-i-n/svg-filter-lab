export const canvasBumpsMatte = `
<filter id="canvas-bumps-matte" height="200%" width="200%" x="-50%" y="-50%" data-name="Canvas Bumps Matte" data-category="Bumps" data-description="Same as Canvas Bumps but with a diffuse light instead of a specular one" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.2" seed="300" numOctaves="7" result="result1" type="turbulence" />
  <feDisplacementMap in2="result1" xChannelSelector="R" result="result6" />
  <feBlend result="fbSourceGraphic" mode="screen" in2="SourceGraphic" in="result6" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 4 -2.5 " result="fbSourceGraphicAlpha" />
  <feGaussianBlur stdDeviation="0.5" in="fbSourceGraphicAlpha" result="result0" />
  <feDiffuseLighting result="result5" surfaceScale="15" diffuseConstant="0.4">
    <feDistantLight azimuth="235" elevation="25" />
  </feDiffuseLighting>
  <feComposite result="result4" operator="arithmetic" k2="0.9" k3="0.9" in2="SourceGraphic" />
  <feComposite in2="SourceGraphic" in="result4" result="result2" operator="in" />
</filter>
`;
