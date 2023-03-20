export const inkPaint = `
<filter id="ink-paint" height="200%" width="200%" x="-50%" y="-50%" data-name="Ink Paint" data-category="Textures" data-description="Ink paint on paper with some turbulent color shift" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="4" result="result0" />
  <feDisplacementMap in2="result0" in="SourceGraphic" xChannelSelector="R" yChannelSelector="G" scale="10" result="result2" />
  <feBlend result="result5" in="result2" mode="multiply" in2="result2" />
  <feGaussianBlur stdDeviation="10" in="result2" result="result4" />
  <feComposite operator="arithmetic" in2="result4" in="result0" k3="0.5" k1="2" result="result6" />
  <feComposite operator="in" in2="result5" in="result6" result="result7" />
</filter>
`
