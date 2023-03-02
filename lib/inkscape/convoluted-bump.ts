export const convolutedBump = `
<filter id="convoluted-bump" height="200%" width="200%" x="-50%" y="-50%" data-name="Convoluted Bump" data-category="Bumps" data-description="Convoluted emboss effect" color-interpolation-filters="sRGB">
  <feConvolveMatrix in="SourceGraphic" bias="0" divisor="0" targetX="1" targetY="1" result="result10" kernelMatrix="0 100 0 100 -401 100 0 100 0 " order="3 3" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.21 -0.72 -0.07 1 0 " in="result10" type="matrix" result="result2" />
  <feGaussianBlur result="result11" stdDeviation="0.01" />
  <feDiffuseLighting surfaceScale="15" result="result1" diffuseConstant="0.5" in="result11" lighting-color="#ffffff">
    <feDistantLight elevation="10" azimuth="225" />
  </feDiffuseLighting>
  <feGaussianBlur result="result12" in="SourceGraphic" stdDeviation="0.01" />
  <feComposite in2="result12" in="result1" k3="0.8" k2="1" operator="arithmetic" result="result9" />
  <feComposite in2="SourceGraphic" in="result9" operator="in" result="result7" />
</filter>
`;
