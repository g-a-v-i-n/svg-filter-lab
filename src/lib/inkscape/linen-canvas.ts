export const linenCanvas = `
<filter id="linen-canvas" height="200%" width="200%" x="-50%" y="-50%" data-name="Linen Canvas" data-category="Bumps" data-description="Painting canvas emboss effect" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="5" baseFrequency="0.4" />
  <feConvolveMatrix order="5 5" kernelMatrix="-4 0 0 0 -4 0 -2 0 -2 0 0 0 -10 0 0 0 -2 0 -2 0 -4 0 0 0 -4 " targetX="2" targetY="2" />
  <feConvolveMatrix order="3 3" kernelMatrix="2 0 2 0 -5 0 2 0 2 " targetX="1" targetY="1" />
  <feColorMatrix type="saturate" result="result1" />
  <feComposite in2="SourceGraphic" operator="arithmetic" k1="1.5" k2="0.5" k3="0.5" result="result2" />
  <feBlend mode="normal" in2="result1" result="result4" />
  <feColorMatrix type="luminanceToAlpha" />
  <feDiffuseLighting surfaceScale="10" diffuseConstant="1" result="result3">
    <feDistantLight azimuth="180" elevation="35" />
  </feDiffuseLighting>
  <feComposite in2="result4" operator="arithmetic" k1="1.5" k3="0.5" result="result5" />
  <feBlend mode="normal" in2="result3" result="result6" />
  <feComposite in2="SourceGraphic" operator="in" />
</filter>
`
