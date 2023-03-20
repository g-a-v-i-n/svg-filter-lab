export const comicsCream = `
<filter id="comics-cream" height="200%" width="200%" x="-50%" y="-50%" data-name="Comics Cream" data-category="Non-Realistic 3D Shaders" data-description="Comics shader with creamy waves transparency" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="7" in="SourceGraphic" />
  <feTurbulence baseFrequency="0.04" numOctaves="1" type="turbulence" result="result7" seed="0" />
  <feComposite in2="result7" in="result8" operator="xor" result="result6" />
  <feDisplacementMap in2="result6" result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="SourceGraphic" />
  <feComposite in2="SourceGraphic" in="result4" operator="arithmetic" result="result2" k1="1" />
  <feComposite in2="result2" operator="out" in="SourceGraphic" result="fbSourceGraphic" />
  <feComposite in2="SourceGraphic" operator="in" result="result11" in="fbSourceGraphic" />
</filter>
`
