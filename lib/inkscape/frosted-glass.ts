export const frostedGlass = `
<filter id="frosted-glass" height="200%" width="200%" x="-50%" y="-50%" data-name="Frosted Glass" data-category="Non-Realistic 3D Shaders" data-description="Satiny glass effect" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceGraphic" result="result8" stdDeviation="5" />
  <feComposite result="result18" operator="xor" in2="result8" in="SourceGraphic" />
  <feComposite in2="result18" result="result16" operator="arithmetic" k2="0.5" k1="1" in="result8" />
  <feComposite in="result16" operator="atop" result="result6" in2="result8" />
  <feOffset in="result6" result="result17" />
  <feDisplacementMap result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result17" in2="result16" />
  <feComposite k3="1" in="result17" operator="arithmetic" result="result2" in2="result4" />
  <feComposite operator="out" in="result2" result="fbSourceGraphic" in2="result17" />
  <feComposite result="result14" operator="over" in2="fbSourceGraphic" in="fbSourceGraphic" />
  <feComposite in="result14" operator="in" in2="SourceGraphic" result="result15" />
</filter>
`;
