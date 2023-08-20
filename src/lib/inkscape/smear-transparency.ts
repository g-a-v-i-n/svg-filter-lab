export const smearTransparency = `
<filter id="smear-transparency" height="200%" width="200%" x="-50%" y="-50%" data-name="Smear Transparency" data-category="Overlays" data-description="Paint objects with a transparent turbulence which turns around color edges" color-interpolation-filters="sRGB">
  <feColorMatrix in="SourceGraphic" result="result1" type="luminanceToAlpha" />
  <feComposite in2="result1" k3="1" in="SourceGraphic" result="result2" operator="out" />
  <feGaussianBlur stdDeviation="0.7" result="result10" />
  <feBlend in2="result10" mode="screen" in="result10" result="fbSourceGraphic" />
  <feGaussianBlur stdDeviation="3" result="result8" in="fbSourceGraphic" />
  <feTurbulence seed="0" result="result7" type="fractalNoise" numOctaves="1" baseFrequency="0.3" />
  <feColorMatrix result="result9" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.2 -0.2 " />
  <feComposite in2="result8" result="result6" operator="atop" in="result8" />
  <feDisplacementMap in="result9" in2="result6" xChannelSelector="R" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="result8" k1="2" />
  <feComposite result="fbSourceGraphic" in="fbSourceGraphic" operator="in" in2="result2" />
</filter>
`
