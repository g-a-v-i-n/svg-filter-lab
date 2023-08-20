export const wrinkledVarnish = `
<filter id="wrinkled-varnish" height="200%" width="200%" x="-50%" y="-50%" data-name="Wrinkled Varnish" data-category="Bumps" data-description="Thick glossy and translucent paint texture with high depth" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" in="SourceGraphic" result="result9" />
  <feTurbulence seed="0" result="result7" type="fractalNoise" numOctaves="5" baseFrequency="0.015" />
  <feComposite in2="result7" result="result6" operator="out" in="result9" />
  <feGaussianBlur result="result11" stdDeviation="2" />
  <feDisplacementMap in="result7" in2="result11" xChannelSelector="A" yChannelSelector="G" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="in" in="result9" />
  <feComposite result="fbSourceGraphic" operator="in" in2="SourceGraphic" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="fbSourceGraphic" />
  <feGaussianBlur result="result13" stdDeviation="0.5" />
  <feSpecularLighting in="result13" specularExponent="5" surfaceScale="15" result="result12">
    <feDistantLight elevation="35" azimuth="225" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result12" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="1" k3="1" in2="result2" />
</filter>
`
