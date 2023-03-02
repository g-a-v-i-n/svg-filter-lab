export const ridgedBorder = `
<filter id="ridged-border" height="200%" width="200%" x="-50%" y="-50%" data-name="Ridged Border" data-category="Bevels" data-description="Ridged border with inner bevel" color-interpolation-filters="sRGB">
  <feMorphology radius="4.3" in="SourceAlpha" result="result91" />
  <feComposite operator="out" in="SourceGraphic" in2="result91" />
  <feGaussianBlur result="result0" stdDeviation="1.2" />
  <feDiffuseLighting diffuseConstant="1">
    <feDistantLight elevation="66" azimuth="225" />
  </feDiffuseLighting>
  <feBlend mode="multiply" in2="SourceGraphic" />
  <feComposite operator="in" in2="SourceAlpha" />
</filter>
`;
