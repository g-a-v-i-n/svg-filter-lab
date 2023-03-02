export const alphaEngraving = `
<filter id="alpha-engraving" height="200%" width="200%" x="-50%" y="-50%" data-name="Alpha Engraving" data-category="Image Paint and Draw" data-description="Gives a transparent engraving effect with rough line and filling" color-interpolation-filters="sRGB">
  <feTurbulence result="result1" baseFrequency="0.03" type="fractalNoise" seed="0" numOctaves="5" />
  <feDisplacementMap result="result3" in2="result1" xChannelSelector="R" yChannelSelector="G" scale="7" in="SourceGraphic" />
  <feComposite result="result4" in="result3" in2="result1" operator="in" />
  <feGaussianBlur result="result8" stdDeviation="0.7" in="result4" />
  <feConvolveMatrix order="3 3" kernelMatrix="1 1 1 1 -8 1 1 1 1 " in="result8" divisor="1" targetX="1" targetY="1" preserveAlpha="true" result="result0" bias="0" />
  <feColorMatrix values="1" in="result0" result="result1" type="luminanceToAlpha" />
  <feComposite result="result11" operator="arithmetic" k2="5" in2="result1" />
  <feGaussianBlur result="result7" in="result11" stdDeviation="0.5" />
  <feColorMatrix result="result9" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0 " />
  <feFlood flood-opacity="1" result="result10" flood-color="rgb(157,87,40)" />
  <feComposite in2="result9" in="result10" operator="in" />
  <feComposite in2="SourceGraphic" operator="in" />
</filter>
`;
