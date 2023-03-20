export const refractiveGlass = `
<filter id="refractive-glass" height="200%" width="200%" x="-50%" y="-50%" data-name="Refractive Glass" data-category="Non-Realistic 3D Shaders" data-description="Double reflection through glass with some refraction" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" in="SourceGraphic" />
  <feComposite in="result8" in2="result8" operator="xor" result="result18" />
  <feComposite in="result8" k1="1" k2="0.5" operator="arithmetic" result="result16" in2="result18" />
  <feComposite in2="result8" result="result6" operator="atop" in="result16" />
  <feOffset result="result17" in="result6" />
  <feDisplacementMap in2="result16" in="result17" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="result17" k3="1" />
  <feComposite in2="result17" result="fbSourceGraphic" in="result2" operator="out" />
  <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" operator="over" result="result14" />
  <feComposite result="result15" in2="SourceGraphic" operator="in" in="result14" />
</filter>
`
