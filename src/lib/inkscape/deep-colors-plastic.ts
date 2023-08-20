export const deepColorsPlastic = `
<filter id="deep-colors-plastic" height="200%" width="200%" x="-50%" y="-50%" data-name="Deep Colors Plastic" data-category="Bevels" data-description="Transparent plastic with deep colors" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceGraphic" result="result6" stdDeviation="10" />
  <feComposite in2="SourceGraphic" in="result6" operator="xor" />
  <feGaussianBlur result="result2" stdDeviation="10" />
  <feComposite in2="SourceGraphic" operator="atop" result="result91" />
  <feComposite result="result4" in="result2" operator="xor" in2="result91" />
  <feGaussianBlur in="result4" result="result3" stdDeviation="5" />
  <feSpecularLighting lighting-color="rgb(255,255,255)" in="result3" result="result5" specularExponent="35" specularConstant="3" surfaceScale="12">
    <feDistantLight elevation="45" azimuth="235" />
  </feSpecularLighting>
  <feComposite in2="result5" in="SourceGraphic" k3="0.7" k2="0.8" operator="arithmetic" result="result7" />
  <feComposite in="result7" operator="in" in2="SourceGraphic" />
</filter>
`
