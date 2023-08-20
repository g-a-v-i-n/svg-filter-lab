export const inAndOut = `
<filter id="in-and-out" height="200%" width="200%" x="-50%" y="-50%" data-name="In and Out" data-category="Shadows and Glows" data-description="Inner colorized shadow, outer black shadow" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceAlpha" stdDeviation="4" />
  <feOffset dx="5" dy="5" result="result4" />
  <feComposite in="SourceGraphic" in2="result4" operator="xor" result="result3" />
</filter>
`
