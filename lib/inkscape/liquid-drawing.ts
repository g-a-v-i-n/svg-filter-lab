export const liquidDrawing = `
<filter id="liquid-drawing" height="200%" width="200%" x="-50%" y="-50%" data-name="Liquid Drawing" data-category="Image Paint and Draw" data-description="Gives a fluid and wavy expressionist drawing effect to images" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result11" stdDeviation="2" />
  <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="result8" />
  <feTurbulence result="result9" baseFrequency="0.08" numOctaves="1" type="fractalNoise" />
  <feDisplacementMap result="result10" in2="result11" xChannelSelector="G" scale="100" yChannelSelector="R" />
  <feConvolveMatrix bias="0" result="result0" preserveAlpha="true" targetY="1" targetX="1" divisor="1" in="result10" kernelMatrix="1 1 1 1 -8 1 1 1 1 " order="3 3" />
  <feColorMatrix in="result0" values="0 -6 0 0 1 0 -6 0 0 1 0 -6 0 0 1 0 0 0 1 0 " result="result3" />
  <feComposite operator="in" in2="SourceGraphic" in="result3" result="fbSourceGraphic" />
  <feBlend in2="result8" mode="multiply" result="result12" />
  <feGaussianBlur stdDeviation="0.01" in="result12" result="result7" />
  <feBlend mode="screen" in2="result12" />
  <feComposite operator="in" in2="SourceGraphic" />
</filter>
`;
