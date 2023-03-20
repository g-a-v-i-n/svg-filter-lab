export const deepMetal = `
<filter id="deep-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Deep Metal" data-category="Non-Realistic 3D Shaders" data-description="Deep and dark metal shading" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" in="SourceGraphic" />
  <feComposite result="result19" operator="xor" in2="result8" />
  <feComposite in2="result8" result="result17" operator="arithmetic" k2="1" />
  <feComposite operator="xor" result="result6" in2="result17" />
  <feOffset in="result6" result="result18" />
  <feDisplacementMap result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result18" in2="result17" />
  <feComposite k3="1" operator="arithmetic" result="result2" in2="result4" in="result4" />
  <feComposite operator="over" in="result2" result="fbSourceGraphic" in2="result2" />
  <feComposite result="result15" operator="xor" in2="SourceGraphic" in="fbSourceGraphic" />
  <feComposite in="result15" operator="in" in2="result8" result="result16" />
</filter>
`
