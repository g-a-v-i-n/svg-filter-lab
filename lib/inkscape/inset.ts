export const inset = `
<filter id="inset" height="200%" width="200%" x="-50%" y="-50%" data-name="Inset" data-category="Shadows and Glows" data-description="Shadowy outer bevel" color-interpolation-filters="sRGB">
  <feMorphology result="result1" in="SourceAlpha" operator="dilate" radius="3.6" />
  <feGaussianBlur stdDeviation="3.6" in="result1" result="result0" />
  <feDiffuseLighting surfaceScale="-5">
    <feDistantLight elevation="45" azimuth="225" />
  </feDiffuseLighting>
  <feComposite in2="result0" operator="in" result="result91" />
  <feComposite in="SourceGraphic" in2="result91" />
</filter>
`
