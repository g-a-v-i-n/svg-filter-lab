export const airSpray = `
<filter id="air-spray" height="200%" width="200%" x="-50%" y="-50%" data-name="Air Spray" data-category="Scatter" data-description="Convert to small scattered particles with some thickness" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.01" result="result1" />
  <feBlend in2="result1" result="fbSourceGraphic" mode="multiply" />
  <feTurbulence baseFrequency="0.8" type="fractalNoise" seed="0" numOctaves="3" result="result3" />
  <feDisplacementMap in="fbSourceGraphic" xChannelSelector="R" yChannelSelector="G" scale="50" result="result2" in2="result3" />
  <feMorphology radius="1" operator="dilate" result="result4" />
  <feBlend mode="screen" in2="result2" />
</filter>
`;
