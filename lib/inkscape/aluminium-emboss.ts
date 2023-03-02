export const aluminiumEmboss = `
<filter id="aluminium-emboss" height="200%" width="200%" x="-50%" y="-50%" data-name="Aluminium Emboss" data-category="Non-Realistic 3D Shaders" data-description="Satiny aluminium effect with embossing" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" in="SourceGraphic" />
  <feComposite in2="result8" operator="xor" result="result18" />
  <feComposite k3="0.5" k1="1" operator="arithmetic" result="result16" in2="result18" />
  <feComposite in2="result8" result="result6" operator="xor" in="result16" />
  <feOffset result="result17" in="result6" />
  <feDisplacementMap in2="result16" in="result17" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="result4" k3="1" />
  <feComposite in2="result2" result="fbSourceGraphic" in="result6" operator="in" />
  <feComposite in2="fbSourceGraphic" operator="xor" result="result14" />
  <feComposite result="result15" in2="result2" operator="in" in="result14" />
</filter>
`;
