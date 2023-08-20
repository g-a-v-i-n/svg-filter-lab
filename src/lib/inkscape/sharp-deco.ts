export const sharpDeco = `
<filter id="sharp-deco" height="200%" width="200%" x="-50%" y="-50%" data-name="Sharp Deco" data-category="Non-Realistic 3D Shaders" data-description="Unrealistic reflections with sharp edges" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" in="SourceGraphic" />
  <feComposite in="SourceGraphic" result="result19" in2="result8" operator="out" />
  <feComposite k2="1" operator="arithmetic" result="result17" in2="result8" />
  <feComposite in2="result19" in="result17" operator="atop" result="result6" />
  <feOffset result="result18" />
  <feDisplacementMap in2="result6" result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result18" />
  <feComposite in2="result18" in="result4" operator="arithmetic" result="result2" k3="1" k2="1" />
  <feComposite in2="result4" operator="over" in="result2" result="fbSourceGraphic" />
  <feComposite in2="result18" operator="xor" result="result15" />
  <feComposite result="result16" in2="SourceGraphic" operator="in" in="result15" />
</filter>
`
