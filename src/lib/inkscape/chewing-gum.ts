export const chewingGum = `
<filter id="chewing-gum" height="200%" width="200%" x="-50%" y="-50%" data-name="Chewing Gum" data-category="Protrusions" data-description="Creates colorizable blotches which smoothly flow over the edges of the lines at their crossings" color-interpolation-filters="sRGB">
  <feFlood result="result4" flood-color="rgb(253,112,174)" flood-opacity="1" />
  <feGaussianBlur result="result1" in="SourceAlpha" stdDeviation="15" />
  <feComposite in2="result4" in="result1" result="result3" k4="-2" k2="4" operator="arithmetic" />
  <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -3" />
  <feComposite operator="in" in="result4" result="fbSourceGraphic" in2="result2" />
  <feBlend in2="SourceGraphic" in="fbSourceGraphic" mode="normal" result="result5" />
</filter>
`
