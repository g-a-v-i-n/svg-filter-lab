export const roughenInside = `
<filter id="roughen-inside" height="200%" width="200%" x="-50%" y="-50%" data-name="Roughen Inside" data-category="Distort" data-description="Roughen all inside shapes" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="5" seed="0" type="fractalNoise" baseFrequency="0.08" />
  <feGaussianBlur stdDeviation="0.5" result="result91" />
  <feDisplacementMap scale="20" yChannelSelector="G" xChannelSelector="R" in="SourceGraphic" result="result1" in2="result91" />
  <feComposite in="result1" in2="SourceGraphic" operator="atop" />
</filter>
`
