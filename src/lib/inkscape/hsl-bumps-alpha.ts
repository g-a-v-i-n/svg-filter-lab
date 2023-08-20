export const hslBumpsAlpha = `
<filter id="hsl-bumps-alpha" height="200%" width="200%" x="-50%" y="-50%" data-name="HSL Bumps Alpha" data-category="Bumps" data-description="Same as HSL Bumps but with transparent highlights" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="0.5" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 4.4 -2.9 " in="result0" result="fbSourceGraphicAlpha" />
  <feGaussianBlur stdDeviation="0.7" in="fbSourceGraphicAlpha" result="result0" />
  <feSpecularLighting in="result0" result="result1" lighting-color="rgb(255,255,255)" surfaceScale="-2" specularConstant="1.5" specularExponent="10">
    <feDistantLight elevation="50" azimuth="235" />
  </feSpecularLighting>
  <feComposite result="result4" operator="in" in="SourceGraphic" in2="result1" />
  <feComposite operator="arithmetic" k2="1" k3="1" in2="result4" />
</filter>
`
