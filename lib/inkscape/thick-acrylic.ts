export const thickAcrylic = `
<filter id="thick-acrylic" height="200%" width="200%" x="-50%" y="-50%" data-name="Thick Acrylic" data-category="Bumps" data-description="Thick acrylic paint texture with high texture depth" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result9" in="SourceGraphic" stdDeviation="1" />
  <feTurbulence baseFrequency="0.02" numOctaves="5" type="fractalNoise" result="result7" seed="0" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result5" />
  <feComposite in="result9" operator="out" result="result6" in2="result5" />
  <feGaussianBlur stdDeviation="0.5" result="result11" />
  <feDisplacementMap result="result4" scale="100" yChannelSelector="G" xChannelSelector="A" in2="result11" in="result5" />
  <feComposite in="result9" operator="in" result="result2" in2="result4" />
  <feComposite in2="SourceGraphic" operator="in" result="fbSourceGraphic" />
  <feBlend mode="multiply" result="fbSourceGraphic" in2="fbSourceGraphic" />
  <feDiffuseLighting diffuseConstant="0.7" surfaceScale="10" in="fbSourceGraphic" result="result10">
    <feDistantLight elevation="25" azimuth="235" />
  </feDiffuseLighting>
  <feComposite operator="in" result="result2" in="result10" in2="fbSourceGraphic" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
</filter>
`;
