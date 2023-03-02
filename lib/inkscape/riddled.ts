export const riddled = `
<filter id="riddled" height="200%" width="200%" x="-50%" y="-50%" data-name="Riddled" data-category="Textures" data-description="Riddle the surface and add bump to images" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.5" in="SourceGraphic" result="result1" />
  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="10" result="result0" />
  <feGaussianBlur result="result8" stdDeviation="1" />
  <feDisplacementMap in2="result0" in="result1" xChannelSelector="R" yChannelSelector="B" scale="20" result="result2" />
  <feComposite result="result7" operator="in" in="result2" in2="result8" />
  <feComposite in2="result7" result="fbSourceGraphic" k2="0.15" in="result2" k1="2" operator="arithmetic" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 3.7 -2.6 " in="fbSourceGraphic" result="fbSourceGraphicAlpha" type="matrix" />
  <feGaussianBlur stdDeviation="0.5" result="result9" />
  <feSpecularLighting surfaceScale="10" specularExponent="3" result="result11" specularConstant="0.7">
    <feDistantLight azimuth="235" elevation="55" />
  </feSpecularLighting>
  <feDiffuseLighting in="result9" lighting-color="rgb(255,255,255)" result="result6" diffuseConstant="0.4" surfaceScale="50">
    <feDistantLight elevation="10" azimuth="235" />
  </feDiffuseLighting>
  <feBlend id="feBlend3105" result="result10" mode="screen" in2="result11" />
  <feComposite in2="fbSourceGraphic" in="result10" result="result2" operator="in" />
  <feComposite k3="0.9" k2="1" operator="arithmetic" in2="fbSourceGraphic" />
</filter>
`;
