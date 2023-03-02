export const waxPrint = `
<filter id="wax-print" height="200%" width="200%" x="-50%" y="-50%" data-name="Wax Print" data-category="Textures" data-description="Wax print on tissue texture" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result1" in="SourceGraphic" stdDeviation="2" />
  <feTurbulence result="result0" numOctaves="5" baseFrequency="0.05" type="fractalNoise" />
  <feDisplacementMap result="result2" scale="10" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result0" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0 " result="result3" />
  <feBlend mode="multiply" in="result2" result="result5" in2="result3" />
  <feGaussianBlur result="result4" in="result3" stdDeviation="5" />
  <feComposite k1="0.5" k3="1.5" k2="0.15" in="result4" in2="result5" operator="arithmetic" result="result6" />
  <feComposite operator="in" in="result6" in2="result4" />
</filter>
`;
