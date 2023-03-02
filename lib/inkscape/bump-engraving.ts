export const bumpEngraving = `
<filter id="bump-engraving" height="200%" width="200%" x="-50%" y="-50%" data-name="Bump Engraving" data-category="Bumps" data-description="Carving emboss effect" color-interpolation-filters="sRGB">
  <feConvolveMatrix in="SourceGraphic" bias="0" divisor="0" targetX="1" targetY="1" result="result10" kernelMatrix="0 100 0 100 -405 100 0 100 0 " order="3 3" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.21 -0.72 -0.07 1 0 " in="result10" type="matrix" result="result2" />
  <feGaussianBlur result="result11" stdDeviation="0.01" />
  <feDiffuseLighting surfaceScale="15" result="result1" diffuseConstant="0.5" in="result11" lighting-color="#ffffff">
    <feDistantLight elevation="10" azimuth="225" />
  </feDiffuseLighting>
  <feComposite in2="SourceGraphic" in="result1" k3="0.5" k2="1" operator="arithmetic" result="result9" />
  <feColorMatrix in="result9" type="saturate" result="result13" values="0" />
  <feComponentTransfer result="component1" in="result13">
    <feFuncR tableValues="0 1 1" type="discrete" />
    <feFuncG tableValues="0 1 1" type="discrete" />
    <feFuncB tableValues="0 1 1" type="discrete" />
  </feComponentTransfer>
  <feBlend in2="SourceGraphic" mode="normal" result="result14" />
  <feComposite in2="SourceGraphic" in="result14" operator="in" result="fbSourceGraphic" />
</filter>
`;
