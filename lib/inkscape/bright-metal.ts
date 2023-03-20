export const brightMetal = `
<filter id="bright-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Bright Metal" data-category="Bevels" data-description="Bright metallic effect for any color" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result6" stdDeviation="8" in="SourceGraphic" />
  <feComposite in2="SourceGraphic" in="result6" operator="xor" result="result10" />
  <feGaussianBlur result="result2" stdDeviation="8" />
  <feComposite in2="SourceGraphic" operator="atop" in="result10" result="result91" />
  <feComposite result="result4" in="result2" operator="xor" in2="result91" />
  <feGaussianBlur in="result4" result="result3" stdDeviation="4" />
  <feSpecularLighting result="result5" specularExponent="5" specularConstant="1.1" surfaceScale="18">
    <feDistantLight azimuth="235" elevation="55" />
  </feSpecularLighting>
  <feComposite in="result3" k3="1.1" k2="0.5" operator="arithmetic" result="result7" in2="result5" k1="0.5" />
  <feComposite in="result7" operator="atop" in2="SourceGraphic" result="result8" />
</filter>
`
