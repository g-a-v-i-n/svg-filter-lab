export const comics = `
<filter id="comics" height="200%" width="200%" x="-50%" y="-50%" data-name="Comics" data-category="Non-Realistic 3D Shaders" data-description="Comics cartoon drawing effect" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="result8" />
  <feComposite in2="result8" operator="xor" result="result19" />
  <feComposite k2="1" operator="arithmetic" result="result17" in2="result8" />
  <feOffset result="result18" in="SourceGraphic" />
  <feDisplacementMap in2="result17" in="result18" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="SourceGraphic" k3="1" />
  <feComposite in2="SourceGraphic" result="fbSourceGraphic" in="result2" operator="in" />
  <feComposite in2="SourceGraphic" operator="in" result="result15" />
  <feComposite result="result16" in2="SourceGraphic" operator="in" in="result15" />
</filter>
`;
