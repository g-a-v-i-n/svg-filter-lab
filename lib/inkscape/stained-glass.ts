export const stainedGlass = `
<filter id="stained-glass" height="200%" width="200%" x="-50%" y="-50%" data-name="Stained Glass" data-category="Bevels" data-description="Illuminated stained glass effect" color-interpolation-filters="sRGB">
  <feBlend in2="SourceGraphic" result="result1" mode="screen" />
  <feGaussianBlur stdDeviation="7" result="result6" />
  <feComposite operator="xor" in="result6" in2="result6" result="result7" />
  <feComposite in2="result1" operator="atop" in="result6" result="result92" />
  <feComposite result="result4" in="result7" operator="xor" in2="result92" />
  <feGaussianBlur result="result3" stdDeviation="0.7" in="result4" />
  <feSpecularLighting result="result5" specularExponent="50" specularConstant="1.5" surfaceScale="4">
    <fePointLight z="20000" y="-8000" x="-5000" />
  </feSpecularLighting>
  <feComposite in="result3" k3="1" k2="1" operator="arithmetic" in2="SourceGraphic" result="result93" />
  <feComposite in="result5" operator="atop" in2="result93" result="result94" />
  <feBlend mode="multiply" in2="result94" />
</filter>
`;
