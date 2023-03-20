export const button = `
<filter id="button" height="200%" width="200%" x="-50%" y="-50%" data-name="Button" data-category="Bevels" data-description="Soft bevel, slightly depressed middle" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="2.3" in="SourceAlpha" result="result0" />
  <feMorphology in="SourceAlpha" radius="6.6" result="result1" />
  <feGaussianBlur stdDeviation="8.9" in="result1" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0" result="result91" />
  <feComposite in="result0" operator="out" result="result2" in2="result91" />
  <feGaussianBlur stdDeviation="1.7" result="result4" />
  <feDiffuseLighting surfaceScale="10">
    <feDistantLight azimuth="225" elevation="45" />
  </feDiffuseLighting>
  <feBlend in2="SourceGraphic" mode="multiply" />
  <feComposite in2="SourceAlpha" operator="in" result="result3" />
  <feSpecularLighting in="result4" surfaceScale="5" specularExponent="17.9">
    <feDistantLight azimuth="225" elevation="45" />
  </feSpecularLighting>
  <feComposite in2="result3" operator="atop" />
</filter>
`
