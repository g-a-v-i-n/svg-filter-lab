export const comicsFading = `
<filter id="comics-fading" height="200%" width="200%" x="-50%" y="-50%" data-name="Comics Fading" data-category="Non-Realistic 3D Shaders" data-description="Cartoon paint style with some fading at the edges" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" in="SourceGraphic" />
  <feComposite operator="xor" result="result18" in2="result8" />
  <feComposite k2="1" operator="arithmetic" result="result16" in2="result18" in="result8" />
  <feOffset result="result17" in="SourceGraphic" />
  <feDisplacementMap in2="result18" in="result17" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="SourceGraphic" k1="0" k3="1" />
  <feComposite in2="result2" result="fbSourceGraphic" in="result16" operator="in" />
  <feComposite in2="SourceGraphic" operator="in" result="result14" />
  <feComposite result="result15" in2="SourceGraphic" operator="in" in="result14" />
</filter>
`
