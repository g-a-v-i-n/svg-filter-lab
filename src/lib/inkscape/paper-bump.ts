export const paperBump = `
<filter id="paper-bump" height="200%" width="200%" x="-50%" y="-50%" data-name="Paper Bump" data-category="Bumps" data-description="Paper like emboss effect" color-interpolation-filters="sRGB">
  <feTurbulence result="result0" seed="0" baseFrequency="1" numOctaves="5" type="fractalNoise" />
  <feConvolveMatrix result="result5" order="5 5" kernelMatrix="-2 0 0 0 -2 0 -2 0 -2 0 0 0 -10 0 0 0 -2 0 -2 0 -2 0 0 0 -2 " targetX="2" targetY="2" />
  <feComposite result="result2" k3="0.5" k2="0.5" k1="1.5" operator="arithmetic" in="result5" in2="SourceGraphic" />
  <feColorMatrix in="result2" type="luminanceToAlpha" result="result2" />
  <feDiffuseLighting surfaceScale="5" result="result1" diffuseConstant="0.6">
    <feDistantLight elevation="35" azimuth="225" />
  </feDiffuseLighting>
  <feComposite operator="arithmetic" in="result1" k1="1.5" k3="0.5" result="result3" in2="SourceGraphic" />
  <feBlend in="result3" mode="normal" result="result6" in2="result1" />
  <feComposite operator="in" in2="SourceGraphic" />
</filter>
`
