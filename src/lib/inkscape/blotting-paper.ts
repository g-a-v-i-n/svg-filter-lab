export const blottingPaper = `
<filter id="blotting-paper" height="200%" width="200%" x="-50%" y="-50%" data-name="Blotting Paper" data-category="Textures" data-description="Inkblot on blotting paper" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="3" in="SourceGraphic" result="result1" />
  <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="5" result="result0" />
  <feDisplacementMap in2="result0" in="result1" xChannelSelector="R" yChannelSelector="G" scale="3" result="result2" />
  <feBlend result="result5" in="result2" mode="multiply" in2="result2" />
  <feGaussianBlur stdDeviation="5" in="result2" result="result4" />
  <feComposite operator="arithmetic" in2="result5" in="result4" k2="0.25" k3="1" k1="1" />
  <feComposite operator="in" in2="result2" />
</filter>
`
