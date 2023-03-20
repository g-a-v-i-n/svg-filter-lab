export const marbledInk = `
<filter id="marbled-ink" height="200%" width="200%" x="-50%" y="-50%" data-name="Marbled Ink" data-category="Image Paint and Draw" data-description="Marbled transparency effect which conforms to image detected edges" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result9" in="SourceGraphic" stdDeviation="2" />
  <feTurbulence baseFrequency="0.06" numOctaves="10" type="fractalNoise" result="result7" seed="0" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.5 -0.3 " result="result5" />
  <feComposite in="result9" operator="out" result="result6" in2="result5" />
  <feGaussianBlur result="result10" stdDeviation="0.5" />
  <feDisplacementMap result="result4" scale="120" yChannelSelector="G" xChannelSelector="A" in2="result10" in="result5" />
  <feComposite in="result9" operator="in" result="result2" in2="result4" />
  <feComposite in2="SourceGraphic" operator="in" in="result2" result="fbSourceGraphic" />
  <feBlend in2="result2" mode="multiply" />
</filter>
`
