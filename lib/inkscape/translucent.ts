export const translucent = `
<filter id="translucent" height="200%" width="200%" x="-50%" y="-50%" data-name="Translucent" data-category="Bevels" data-description="Illuminated translucent plastic or glass effect" color-interpolation-filters="sRGB">
  <feBlend in2="SourceGraphic" mode="screen" result="result1" />
  <feGaussianBlur stdDeviation="8" result="result6" />
  <feComposite operator="xor" in="result6" in2="SourceGraphic" />
  <feGaussianBlur stdDeviation="5" result="result2" />
  <feComposite operator="atop" in2="result1" result="result92" />
  <feComposite operator="xor" in="result2" result="result4" in2="result92" />
  <feGaussianBlur stdDeviation="1" result="result3" in="result4" />
  <feSpecularLighting surfaceScale="3" specularConstant="1.5" specularExponent="45" result="result5">
    <fePointLight x="-5000" y="-8000" z="20000" />
  </feSpecularLighting>
  <feComposite operator="in" in2="SourceGraphic" result="result93" />
  <feComposite operator="arithmetic" k2="1" k3="2" in="result3" in2="result93" result="result94" />
  <feComposite operator="atop" in="result5" in2="result94" result="result95" />
  <feBlend mode="screen" in2="result95" />
</filter>
`;
