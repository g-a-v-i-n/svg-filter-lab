export const deepChrome = `
<filter id="deep-chrome" height="200%" width="200%" x="-50%" y="-50%" data-name="Deep Chrome" data-category="Non-Realistic 3D Shaders" data-description="Dark chrome effect" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" in="SourceGraphic" />
  <feComposite result="result19" operator="xor" in2="result8" />
  <feComposite in2="result8" result="result17" operator="arithmetic" k2="1" />
  <feOffset in="result8" result="result18" />
  <feDisplacementMap result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result18" in2="result17" />
  <feComposite k3="1" k1="1" in="SourceGraphic" operator="arithmetic" result="result2" in2="result4" />
  <feComposite operator="in" in="result2" result="fbSourceGraphic" in2="SourceGraphic" />
  <feComposite result="result15" operator="in" in2="SourceGraphic" />
  <feComposite in="result15" operator="in" in2="SourceGraphic" result="result16" />
</filter>
`;
