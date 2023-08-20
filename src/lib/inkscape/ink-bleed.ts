export const inkBleed = `
<filter id="ink-bleed" height="200%" width="200%" x="-50%" y="-50%" data-name="Ink Bleed" data-category="Protrusions" data-description="Inky splotches underneath the object" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result1" in="SourceGraphic" stdDeviation="1.3" />
  <feTurbulence result="result0" numOctaves="4" baseFrequency="0.034" />
  <feDisplacementMap result="result2" scale="19.6" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result0" />
  <feColorMatrix values="2 0 0 0 0 0 2 0 0 0 0 0 2 0 0 0 0 0 0.7 0" result="result3" />
  <feGaussianBlur result="result4" in="SourceGraphic" stdDeviation="1.1" />
  <feComposite in="result4" in2="result3" />
</filter>
`
