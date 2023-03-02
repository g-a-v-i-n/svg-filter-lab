export const neon = `
<filter id="neon" height="200%" width="200%" x="-50%" y="-50%" data-name="Neon" data-category="Bevels" data-description="Neon light effect" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" result="result1" />
  <feComposite in="result1" in2="result1" result="result4" operator="in" />
  <feGaussianBlur stdDeviation="7" result="result6" in="result4" />
  <feComposite operator="over" in="result6" in2="result4" result="result8" />
  <feComposite operator="in" result="fbSourceGraphic" in="result6" in2="result8" />
  <feSpecularLighting specularExponent="45" specularConstant="2" surfaceScale="2.5" lighting-color="rgb(255,255,255)" result="result1" in="fbSourceGraphic">
    <fePointLight z="20000" y="-10000" x="-5000" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphic" />
  <feComposite k3="1.5" k2="1.2" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="over" in="result9" in2="result4" result="result9" />
  <feBlend mode="screen" in2="result9" />
</filter>
`;
