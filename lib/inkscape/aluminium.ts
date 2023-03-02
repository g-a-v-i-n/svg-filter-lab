export const aluminium = `
<filter id="aluminium" height="200%" width="200%" x="-50%" y="-50%" data-name="Aluminium" data-category="Non-Realistic 3D Shaders" data-description="Aluminium effect with sharp brushed reflections" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" in="SourceGraphic" />
  <feComposite operator="xor" in2="SourceGraphic" result="result22" />
  <feComposite k2="1" operator="arithmetic" result="result20" in2="result22" in="result22" />
  <feComposite in2="result22" in="result20" operator="over" result="result6" />
  <feOffset in="result6" result="result21" />
  <feDisplacementMap in2="result20" result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result21" />
  <feComposite in2="SourceGraphic" k1="1" operator="arithmetic" result="fbSourceGraphic" k3="0.5" in="result4" />
  <feComposite in2="result4" result="result12" operator="in" in="fbSourceGraphic" />
  <feComposite in2="SourceGraphic" operator="in" result="result18" />
  <feComposite result="result19" in2="SourceGraphic" operator="in" in="result18" />
</filter>
`;
