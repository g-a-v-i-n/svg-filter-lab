export const chrome = `
<filter id="chrome" height="200%" width="200%" x="-50%" y="-50%" data-name="Chrome" data-category="Non-Realistic 3D Shaders" data-description="Bright chrome effect" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" in="SourceGraphic" />
  <feComposite in2="result8" operator="xor" />
  <feComposite k2="1" operator="arithmetic" result="result17" in2="result8" />
  <feOffset result="result18" in="result17" />
  <feDisplacementMap in2="result17" in="result18" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="fbSourceGraphic" operator="arithmetic" in="result4" k1="1" k3="1" />
  <feComposite in2="fbSourceGraphic" result="result9" operator="over" />
  <feComposite in2="SourceGraphic" operator="in" result="result15" />
  <feComposite result="result16" in2="SourceGraphic" operator="in" in="result15" />
</filter>
`;
