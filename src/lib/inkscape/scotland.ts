export const scotland = `
<filter id="scotland" height="200%" width="200%" x="-50%" y="-50%" data-name="Scotland" data-category="Overlays" data-description="Colorized mountain tops out of the fog" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.03 0.1" numOctaves="5" type="fractalNoise" result="result91" />
  <feDisplacementMap scale="5" in2="result91" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 -1 " result="result5" />
  <feComposite in2="result5" operator="in" in="SourceGraphic" result="result6" />
  <feTurbulence baseFrequency="0.03 0.1" numOctaves="5" type="fractalNoise" result="result92" />
  <feDisplacementMap result="result4" scale="4" yChannelSelector="A" xChannelSelector="R" in="result6" in2="result92" />
  <feComposite in2="result4" operator="in" result="result2" in="result4" />
  <feComposite in2="result2" operator="over" in="result2" result="result93" />
  <feBlend mode="multiply" in2="result93" />
</filter>
`
