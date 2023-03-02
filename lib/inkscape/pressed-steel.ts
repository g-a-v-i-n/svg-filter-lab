export const pressedSteel = `
<filter id="pressed-steel" height="200%" width="200%" x="-50%" y="-50%" data-name="Pressed Steel" data-category="Bevels" data-description="Pressed metal with a rolled edge" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result1" stdDeviation="3" />
  <feBlend in2="result1" result="result5" mode="multiply" in="result1" />
  <feGaussianBlur in="result5" result="result6" stdDeviation="1" />
  <feComposite result="result8" in2="result5" in="result6" operator="xor" />
  <feComposite in="result6" result="fbSourceGraphic" operator="xor" in2="result8" />
  <feSpecularLighting in="fbSourceGraphic" result="result1" lighting-color="rgb(255,255,255)" surfaceScale="2" specularConstant="2.2" specularExponent="55">
    <fePointLight x="-5000" y="-10000" z="20000" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="2" k3="1" in2="result2" />
  <feComposite in2="result4" in="result4" operator="in" result="result91" />
  <feBlend mode="darken" in2="result91" />
</filter>
`;
