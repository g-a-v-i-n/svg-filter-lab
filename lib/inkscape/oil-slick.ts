export const oilSlick = `
<filter id="oil-slick" height="200%" width="200%" x="-50%" y="-50%" data-name="Oil Slick" data-category="Overlays" data-description="Rainbow-colored semitransparent oily splotches" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.143" numOctaves="5" type="fractalNoise" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -3" />
  <feMorphology result="result3" radius="2.7" operator="dilate" />
  <feTurbulence baseFrequency="0.121" numOctaves="2" result="result91" />
  <feDisplacementMap result="result4" scale="18.5" yChannelSelector="A" xChannelSelector="R" in="result3" in2="result91" />
  <feComposite in2="SourceGraphic" operator="atop" in="result4" />
</filter>
`
