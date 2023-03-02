export const matteBevel = `
<filter id="matte-bevel" height="200%" width="200%" x="-50%" y="-50%" data-name="Matte Bevel" data-category="Bevels" data-description="Soft, pastel-colored, blurry bevel" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" result="result6" />
  <feComposite operator="in" in="result6" in2="result6" result="result7" />
  <feGaussianBlur stdDeviation="8" result="result3" in="result7" />
  <feComposite in2="result7" operator="over" result="result91" />
  <feComposite operator="in" in="result3" result="result5" in2="result91" />
  <feColorMatrix values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0 " result="result4" />
  <feSpecularLighting surfaceScale="3" specularConstant="2" specularExponent="45" in="result4" result="result11">
    <fePointLight x="-5000" y="-10000" z="20000" />
  </feSpecularLighting>
  <feComposite operator="arithmetic" k1="1" in2="result4" result="result10" />
  <feComposite operator="arithmetic" k2="0.5" k3="1" in="result5" result="result8" in2="result10" />
  <feComposite result="result9" in2="result8" />
  <feBlend mode="normal" in2="result9" />
</filter>
`;
