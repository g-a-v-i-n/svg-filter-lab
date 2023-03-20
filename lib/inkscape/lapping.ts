export const lapping = `
<filter id="lapping" height="200%" width="200%" x="-50%" y="-50%" data-name="Lapping" data-category="Distort" data-description="Something like a water noise" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="5" seed="0" type="fractalNoise" baseFrequency="0.1" result="result1" />
  <feGaussianBlur stdDeviation="2" result="result2" />
  <feDisplacementMap scale="50" yChannelSelector="B" xChannelSelector="R" in="SourceGraphic" in2="result2" />
</filter>
`
