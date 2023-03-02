export const felt = `
<filter id="felt" height="200%" width="200%" x="-50%" y="-50%" data-name="Felt" data-category="Textures" data-description="Felt like texture with color turbulence and slightly darker at the edges" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result1" in="SourceGraphic" stdDeviation="2" />
  <feTurbulence result="result0" numOctaves="5" baseFrequency="0.05" type="fractalNoise" />
  <feDisplacementMap result="result2" scale="20" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result0" />
  <feGaussianBlur result="result4" in="result2" stdDeviation="5" />
  <feComposite result="result6" k1="1" k3="1" k2="0.5" in="result0" in2="result4" operator="arithmetic" />
  <feComposite in="result6" in2="result0" operator="in" result="result91" />
  <feComposite operator="arithmetic" k1="1.5" in="result2" in2="result91" />
</filter>
`;
