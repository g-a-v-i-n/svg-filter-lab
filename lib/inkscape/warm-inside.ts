export const warmInside = `
<filter id="warm-inside" height="200%" width="200%" x="-50%" y="-50%" data-name="Warm Inside" data-category="Morphology" data-description="Blurred colorized contour, filled inside" color-interpolation-filters="sRGB">
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="fbSourceGraphic" />
  <feGaussianBlur stdDeviation="3" result="result1" />
  <feOffset dx="2" dy="2" result="result6" />
  <feComposite k2="2" operator="in" result="result2" in="result6" in2="result1" />
  <feColorMatrix values="110" result="result3" type="hueRotate" />
  <feBlend mode="screen" in="result2" in2="result3" result="result4" />
  <feConvolveMatrix order="3 3" kernelMatrix="-2 0 2 0 4 0 2 0 2" divisor="2" bias="0" targetX="0" in="result4" result="result5" />
  <feComposite operator="atop" in="result2" in2="result5" />
</filter>
`;
