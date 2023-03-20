export const barbedWire = `
<filter id="barbed-wire" height="200%" width="200%" x="-50%" y="-50%" data-name="Barbed Wire" data-category="Overlays" data-description="Gray bevelled wires with drop shadows" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.033 0.128" numOctaves="1" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -15 1" />
  <feMorphology radius="1" operator="dilate" result="result0" />
  <feMorphology in="SourceAlpha" operator="dilate" radius="3.1" result="result1" />
  <feGaussianBlur stdDeviation="8.1" />
  <feDiffuseLighting surfaceScale="12.6" diffuseConstant="1">
    <feDistantLight azimuth="225" elevation="45" />
  </feDiffuseLighting>
  <feComposite in2="result0" operator="in" />
  <feComposite in2="result1" operator="in" result="result3" />
  <feSpecularLighting in="result0" specularConstant="1" specularExponent="3.5">
    <feDistantLight elevation="50" azimuth="225" />
  </feSpecularLighting>
  <feComposite in2="result3" operator="atop" result="result6" />
  <feColorMatrix in="result0" result="result4" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
  <feGaussianBlur stdDeviation="1.4" in="result4" />
  <feOffset dx="2" dy="2" id="feOffset2821" result="result5" />
  <feComposite in="result5" in2="SourceGraphic" operator="atop" result="result7" />
  <feComposite in2="result7" in="result6" />
</filter>
`
