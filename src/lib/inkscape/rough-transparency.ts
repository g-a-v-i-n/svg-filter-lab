export const roughTransparency = `
<filter id="rough-transparency" height="200%" width="200%" x="-50%" y="-50%" data-name="Rough Transparency" data-category="Overlays" data-description="Adds a turbulent transparency which displaces pixels at the same time" color-interpolation-filters="sRGB">
  <feTurbulence result="result3" baseFrequency="0.3" type="fractalNoise" seed="0" numOctaves="3" />
  <feGaussianBlur stdDeviation="1.5" result="result91" />
  <feDisplacementMap result="fbSourceGraphic" in="SourceGraphic" xChannelSelector="R" yChannelSelector="G" scale="30" in2="result91" />
  <feColorMatrix type="luminanceToAlpha" in="fbSourceGraphic" result="result0" />
  <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " />
  <feComposite in2="result2" operator="over" in="result3" result="result4" />
  <feGaussianBlur stdDeviation="2" result="result5" />
  <feDisplacementMap scale="100" xChannelSelector="R" in="result5" in2="result3" yChannelSelector="G" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6.5 -4.5 " result="result92" />
  <feComposite in="fbSourceGraphic" operator="out" in2="result92" />
</filter>
`
