export const bloom = `
<filter id="bloom" height="200%" width="200%" x="-50%" y="-50%" data-name="Bloom" data-category="Bevels" data-description="Soft, cushion-like bevel with matte highlights" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result1" in="SourceAlpha" stdDeviation="2.2" />
  <feSpecularLighting result="result0" specularExponent="18.1" specularConstant="2" surfaceScale="5">
    <feDistantLight azimuth="225" elevation="24" />
  </feSpecularLighting>
  <feComposite result="result6" operator="in" in2="SourceAlpha" />
  <feMorphology radius="5.7" operator="dilate" />
  <feGaussianBlur result="result11" stdDeviation="5.7" />
  <feDiffuseLighting surfaceScale="5" result="result3" diffuseConstant="2" in="result1">
    <feDistantLight elevation="25" azimuth="225" />
  </feDiffuseLighting>
  <feBlend result="result7" mode="multiply" in="result3" in2="SourceGraphic" />
  <feComposite in="result7" operator="in" in2="SourceAlpha" result="result91" />
  <feBlend result="result9" mode="lighten" in="result6" in2="result91" />
  <feComposite in="result11" in2="result9" />
</filter>
`
