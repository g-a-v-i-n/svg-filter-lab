export const bark = `
<filter id="bark" height="200%" width="200%" x="-50%" y="-50%" data-name="Bark" data-category="Textures" data-description="Bark texture, vertical; use with deep colors" color-interpolation-filters="sRGB">
  <feTurbulence seed="10" baseFrequency="0.12 0.02" numOctaves="10" type="fractalNoise" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.7 0 " result="result5" />
  <feComposite in2="result5" operator="out" in="SourceGraphic" />
  <feMorphology result="result3" radius="1.3" operator="dilate" />
  <feTurbulence seed="25" type="turbulence" baseFrequency="0.08 0.05" numOctaves="8" result="result91" />
  <feDisplacementMap result="result4" scale="5" yChannelSelector="G" xChannelSelector="R" in="result3" in2="result91" />
  <feSpecularLighting specularExponent="35" specularConstant="1" surfaceScale="2" lighting-color="rgb(255,255,255)" result="result1" in="result4">
    <feDistantLight azimuth="235" elevation="75" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="result4" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="result4" in2="result2" />
  <feBlend mode="multiply" in2="result4" />
</filter>
`;
