export const alphaDrawLiquid = `
<filter id="alpha-draw-liquid" height="200%" width="200%" x="-50%" y="-50%" data-name="Alpha Draw Liquid" data-category="Image Paint and Draw" data-description="Gives a transparent fluid drawing effect with rough line and filling" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result12" stdDeviation="2" />
  <feTurbulence numOctaves="1" seed="0" type="fractalNoise" baseFrequency="0.03" result="result1" />
  <feDisplacementMap in="result1" scale="200" yChannelSelector="B" xChannelSelector="R" in2="result12" result="result3" />
  <feComposite result="result14" operator="in" in2="result1" />
  <feGaussianBlur in="result14" stdDeviation="0.5" result="result8" />
  <feConvolveMatrix bias="0" result="result0" preserveAlpha="true" targetY="1" targetX="1" divisor="1" in="result8" kernelMatrix="1 1 1 1 -8 1 1 1 1 " order="3 3" />
  <feColorMatrix type="luminanceToAlpha" result="result1" in="result0" values="1" />
  <feComposite in="result1" in2="result1" k2="5" operator="arithmetic" result="result11" />
  <feGaussianBlur stdDeviation="0.2" in="result11" result="result7" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -0.5 " result="result9" />
  <feComposite result="result13" operator="in" in2="result9" in="result12" />
  <feFlood flood-color="rgb(157,87,40)" result="result10" flood-opacity="1" />
  <feComposite operator="in" in="result10" in2="result13" />
  <feComposite operator="in" in2="SourceGraphic" />
</filter>
`;
