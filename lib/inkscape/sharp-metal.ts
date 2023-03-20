export const sharpMetal = `
<filter id="sharp-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Sharp Metal" data-category="Non-Realistic 3D Shaders" data-description="Chrome effect with darkened edges" color-interpolation-filters="sRGB">
  <feGaussianBlur id="feGaussianBlur929" result="result8" stdDeviation="5" in="SourceGraphic" />
  <feComposite in="result8" result="result19" in2="result8" operator="xor" />
  <feComposite k2="1" operator="arithmetic" result="result17" in2="result8" />
  <feComposite in2="result17" in="SourceGraphic" operator="atop" result="result6" />
  <feOffset result="result18" />
  <feDisplacementMap in2="result6" result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result18" />
  <feComposite in2="result4" k1="1" in="result4" operator="arithmetic" result="result2" k3="1" />
  <feComposite in2="result2" operator="over" in="result2" result="fbSourceGraphic" />
  <feComposite in2="result19" operator="over" result="result15" />
  <feComposite result="result16" in2="SourceGraphic" operator="in" in="result15" />
</filter>
`
