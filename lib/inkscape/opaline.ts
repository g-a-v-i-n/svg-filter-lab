export const opaline = `
<filter id="opaline" height="200%" width="200%" x="-50%" y="-50%" data-name="Opaline" data-category="Non-Realistic 3D Shaders" data-description="Contouring version of smooth shader" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" in="SourceGraphic" />
  <feComposite in2="result8" operator="xor" />
  <feComposite k2="1" operator="arithmetic" result="result16" in2="result8" />
  <feComposite in2="result16" result="result6" operator="xor" in="result16" />
  <feOffset result="result17" in="result16" />
  <feDisplacementMap in2="result16" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" in="result17" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="SourceGraphic" k1="1" k3="1" />
  <feComposite in2="result2" result="fbSourceGraphic" in="result6" operator="in" />
  <feComposite in2="SourceGraphic" operator="in" result="result14" />
  <feComposite result="result15" in2="SourceGraphic" operator="in" in="result14" />
</filter>
`;
