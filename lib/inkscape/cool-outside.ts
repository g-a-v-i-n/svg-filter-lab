export const coolOutside = `
<filter id="cool-outside" height="200%" width="200%" x="-50%" y="-50%" data-name="Cool Outside" data-category="Morphology" data-description="Blurred colorized contour, empty inside" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="2" result="result1" />
  <feOffset dx="2" dy="2" />
  <feConvolveMatrix result="result3" order="3 3" kernelMatrix="2 0 0 0 8 0 4 0 -4 " divisor="2" bias="0" targetX="0" />
  <feComposite operator="xor" result="result2" in="result3" in2="result1" />
  <feColorMatrix values="91.7" result="fbSourceGraphic" type="hueRotate" />
  <feBlend mode="multiply" result="result4" in="fbSourceGraphic" in2="result3" />
  <feComposite operator="in" result="result6" in="fbSourceGraphic" in2="result4" />
</filter>
`;
