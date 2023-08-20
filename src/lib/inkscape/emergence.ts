export const emergence = `
<filter id="emergence" height="200%" width="200%" x="-50%" y="-50%" data-name="Emergence" data-category="Shadows and Glows" data-description="Cut out, add inner shadow and colorize some parts of an image" color-interpolation-filters="sRGB">
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0.72 0.07 0 0 " result="result1" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2 0 " result="result9" />
  <feComposite in2="result9" in="SourceGraphic" operator="in" result="result4" />
  <feFlood result="result2" flood-color="rgb(0,0,0)" />
  <feComposite in2="result9" operator="in" result="result10" />
  <feComposite in2="result4" operator="atop" />
  <feGaussianBlur stdDeviation="3" result="result8" />
  <feOffset dx="3" dy="3" result="result3" in="result8" />
  <feFlood flood-opacity="1" flood-color="rgb(219,173,62)" result="result5" />
  <feMerge result="result6">
    <feMergeNode in="result5" />
    <feMergeNode in="result3" />
    <feMergeNode in="result4" />
  </feMerge>
  <feComposite in2="SourceGraphic" operator="in" result="result7" />
</filter>
`
