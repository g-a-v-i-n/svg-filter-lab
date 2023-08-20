export const alphaEngravingB = `
<filter id="alpha-engraving-b" height="200%" width="200%" x="-50%" y="-50%" data-name="Alpha Engraving B" data-category="Image Paint and Draw" data-description="Gives a controllable roughness engraving effect to bitmaps and materials" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="1" seed="0" type="fractalNoise" baseFrequency="0.1" result="result1" />
  <feGaussianBlur stdDeviation="4" result="result2" />
  <feDisplacementMap scale="10" yChannelSelector="B" xChannelSelector="R" in="SourceGraphic" in2="result2" result="fbSourceGraphic" />
  <feGaussianBlur result="result8" stdDeviation="0.01" in="fbSourceGraphic" />
  <feConvolveMatrix order="3 3" kernelMatrix="1 1 1 1 -8 1 1 1 1 " in="result8" divisor="1" targetX="1" targetY="1" preserveAlpha="true" result="result0" bias="0" />
  <feColorMatrix values="1" in="result0" result="result1" type="luminanceToAlpha" />
  <feComposite k2="2" in="result1" result="result2" operator="arithmetic" in2="result1" />
  <feGaussianBlur result="result7" in="result2" stdDeviation="0.5" />
  <feColorMatrix result="result9" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0 " />
  <feFlood flood-opacity="1" result="result10" flood-color="rgb(65,94,115)" />
  <feComposite in2="result9" in="result10" operator="in" result="result11" />
  <feComposite in2="result11" operator="in" />
</filter>
`
