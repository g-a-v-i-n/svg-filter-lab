export const darkGlass = `
<filter id="dark-glass" height="200%" width="200%" x="-50%" y="-50%" data-name="Dark Glass" data-category="Bevels" data-description="Illuminated glass effect with light coming from beneath" color-interpolation-filters="sRGB">
  <feBlend in2="SourceGraphic" result="result1" mode="screen" />
  <feGaussianBlur stdDeviation="2" result="result6" />
  <feComposite operator="xor" in="result6" in2="result1" result="result7" />
  <feComposite result="result4" in="result7" operator="xor" in2="result7" />
  <feGaussianBlur result="result3" stdDeviation="3" in="result4" />
  <feSpecularLighting result="result5" specularExponent="55" specularConstant="1.5" surfaceScale="6" in="result3">
    <fePointLight z="20000" y="-8000" x="-5000" />
  </feSpecularLighting>
  <feComposite in="result3" k3="1" k2="1.5" operator="arithmetic" in2="SourceGraphic" result="result92" />
  <feComposite in="result5" operator="atop" in2="result92" result="result93" />
  <feBlend mode="multiply" in2="result93" />
</filter>
`
