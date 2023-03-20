export const pixelSmear = `
<filter id="pixel-smear" height="200%" width="200%" x="-50%" y="-50%" data-name="Pixel Smear" data-category="Distort" data-description="Van Gogh painting effect for bitmaps" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" numOctaves="3" baseFrequency="0.25 0.4" seed="5" />
  <feColorMatrix result="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " />
  <feComposite in="SourceGraphic" operator="in" in2="result5" />
  <feMorphology operator="dilate" radius="1.5" result="result3" />
  <feTurbulence numOctaves="5" baseFrequency="0.03" type="fractalNoise" seed="7" />
  <feGaussianBlur stdDeviation="0.5" result="result91" />
  <feDisplacementMap in="result3" xChannelSelector="R" yChannelSelector="G" scale="27" result="result4" in2="result91" />
  <feComposite in="result4" k3="0.8" k1="1.3" result="result2" operator="arithmetic" in2="result4" />
  <feBlend in2="result2" mode="screen" in="result2" />
</filter>
`
