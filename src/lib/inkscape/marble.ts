export const marble = `
<filter id="marble" height="200%" width="200%" x="-50%" y="-50%" data-name="3D Marble" data-category="Materials" data-description="3D warped marble texture" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="4" result="result8" />
  <feTurbulence seed="50" result="result7" type="turbulence" numOctaves="7" baseFrequency="0.01 0.01" />
  <feColorMatrix result="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.4 0 " />
  <feComposite result="result6" in="result5" operator="in" in2="result8" />
  <feDisplacementMap in="result5" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" in2="result6" />
  <feFlood flood-opacity="1" flood-color="rgb(224,224,224)" />
  <feComposite result="result2" operator="atop" in2="result4" />
  <feComposite in="result2" operator="atop" in2="SourceGraphic" result="result9" />
  <feBlend result="fbSourceGraphic" mode="darken" in2="result9" />
  <feGaussianBlur stdDeviation="5" in="fbSourceGraphic" result="result0" />
  <feSpecularLighting in="result0" result="result1" lighting-color="rgb(255,255,255)" surfaceScale="8" specularConstant="0.8" specularExponent="30">
    <feDistantLight elevation="55" azimuth="235" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="1" k3="1" in2="result2" />
</filter>
`
