export const gouache = `
<filter id="gouache" height="200%" width="200%" x="-50%" y="-50%" data-name="Gouache" data-category="Textures" data-description="Partly opaque water color effect with bleed" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="3" result="result5" in="SourceGraphic" />
  <feTurbulence result="result1" baseFrequency="0.02" type="fractalNoise" seed="0" numOctaves="3" />
  <feDisplacementMap result="result3" in2="result1" in="SourceGraphic" xChannelSelector="R" yChannelSelector="G" scale="30" />
  <feComposite result="result4" in="result3" in2="result1" operator="out" />
  <feComposite result="result6" operator="arithmetic" k2="1" k1="0.3" k3="0.3" in2="result4" />
  <feComposite in2="result5" in="result6" operator="over" />
</filter>
`;
