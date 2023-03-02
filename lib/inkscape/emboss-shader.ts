export const embossShader = `
<filter id="emboss-shader" height="200%" width="200%" x="-50%" y="-50%" data-name="Emboss Shader" data-category="Non-Realistic 3D Shaders" data-description="Combination of satiny and emboss effect" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" in="SourceGraphic" />
  <feComposite result="result19" operator="xor" in2="result8" />
  <feComposite in2="result8" result="result17" operator="arithmetic" k2="1" />
  <feOffset in="result8" result="result18" />
  <feDisplacementMap result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result18" in2="result17" />
  <feComposite k3="0.5" k1="0.5" in="result4" operator="arithmetic" result="result2" in2="result4" />
  <feComposite operator="over" in="result2" result="fbSourceGraphic" in2="result2" />
  <feComposite result="result15" operator="in" in2="fbSourceGraphic" />
  <feComposite in="result15" operator="in" in2="result8" result="result16" />
</filter>
`;
