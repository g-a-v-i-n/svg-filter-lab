export const swissCheese = `
<filter id="swiss-cheese" height="200%" width="200%" x="-50%" y="-50%" data-name="Swiss Cheese" data-category="Overlays" data-description="Random inner-bevel holes" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.097" numOctaves="1" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -14" />
  <feGaussianBlur stdDeviation="3.7" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 70 0" result="result0" />
  <feGaussianBlur stdDeviation="3.9" result="result1" />
  <feDiffuseLighting surfaceScale="-5" diffuseConstant="1.29">
    <feDistantLight azimuth="225" elevation="45" />
  </feDiffuseLighting>
  <feComposite in2="result0" operator="in" />
  <feBlend in2="SourceGraphic" mode="multiply" />
  <feComposite in2="SourceGraphic" operator="in" result="result2" />
  <feSpecularLighting in="result1" surfaceScale="-5" specularExponent="4.5" specularConstant="0.7">
    <feDistantLight elevation="33" azimuth="225" />
  </feSpecularLighting>
  <feComposite in2="result0" operator="in" />
  <feComposite in2="result2" operator="atop" />
</filter>
`;
