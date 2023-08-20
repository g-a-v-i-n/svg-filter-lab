export const oilPainting = `
<filter id="oil-painting" height="200%" width="200%" x="-50%" y="-50%" data-name="Oil Painting" data-category="Image Paint and Draw" data-description="Simulate oil painting style" color-interpolation-filters="sRGB">
  <feMorphology radius="2" in="SourceGraphic" result="result0" />
  <feTurbulence numOctaves="1" baseFrequency="0.078" result="result91" />
  <feDisplacementMap in="result0" scale="6.3" xChannelSelector="R" yChannelSelector="G" in2="result91" />
</filter>
`
