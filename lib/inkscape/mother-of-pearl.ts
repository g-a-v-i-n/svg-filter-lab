export const motherOfPearl = `
<filter id="mother-of-pearl" height="200%" width="200%" x="-50%" y="-50%" data-name="3D Mother of Pearl" data-category="Materials" data-description="3D warped, iridescent pearly shell texture" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="3" />
  <feTurbulence baseFrequency="0.03 0.03" numOctaves="8" type="fractalNoise" result="result7" seed="77" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.6 -0.6 " result="result5" />
  <feComposite in2="result8" operator="in" in="result7" result="result6" />
  <feDisplacementMap in2="result6" result="result4" scale="60" yChannelSelector="A" xChannelSelector="A" in="result5" />
  <feConvolveMatrix order="3 3" kernelMatrix="2 0 0 0 4 0 0 0 -2 " targetX="2" targetY="2" divisor="2" result="result9" />
  <feComposite in2="SourceGraphic" operator="atop" in="result9" result="result10" />
  <feBlend in2="result10" mode="darken" result="fbSourceGraphic" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="5" />
  <feSpecularLighting specularExponent="25" specularConstant="1" surfaceScale="5" lighting-color="rgb(242,215,108)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="60" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphic" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
</filter>
`;
