export const brushDraw = `
<filter id="brush-draw" height="200%" width="200%" x="-50%" y="-50%" data-name="Brush Draw" data-category="Non-Realistic 3D Shaders" data-description="Draft painted cartoon shading with a glassy look" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceGraphic" result="result8" stdDeviation="5" />
  <feComposite operator="xor" in2="result8" />
  <feComposite in2="result8" result="result16" operator="arithmetic" k2="1" />
  <feComposite in="result16" operator="over" result="result6" in2="result16" />
  <feOffset in="result6" result="result17" />
  <feDisplacementMap result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result17" in2="result16" />
  <feComposite k3="1" in="result4" operator="arithmetic" result="result2" in2="result4" />
  <feComposite operator="in" in="result6" result="fbSourceGraphic" in2="result2" />
  <feComposite result="result14" operator="over" in2="fbSourceGraphic" />
  <feComposite in="result14" operator="in" in2="result2" result="result15" />
</filter>
`
