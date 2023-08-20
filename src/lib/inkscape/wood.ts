export const wood = `
<filter id="wood" height="200%" width="200%" x="-50%" y="-50%" data-name="3D Wood" data-category="Materials" data-description="3D warped, fibered wood texture" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="4" />
  <feTurbulence baseFrequency="0.025 0.2" numOctaves="3" type="fractalNoise" result="result7" seed="22" />
  <feComposite in2="result8" operator="in" in="SourceGraphic" result="result6" />
  <feDisplacementMap in2="result6" result="result4" scale="50" yChannelSelector="A" xChannelSelector="A" in="result7" />
  <feFlood flood-color="rgb(230,211,138)" flood-opacity="1" />
  <feComposite in2="result4" operator="atop" result="result2" />
  <feComposite in2="SourceGraphic" operator="atop" in="result2" result="result9" />
  <feGaussianBlur result="result0" in="result9" stdDeviation="8" />
  <feSpecularLighting specularExponent="15" specularConstant="0.7" surfaceScale="5" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="50" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="result9" />
  <feComposite k3="0.5" k2="0.5" operator="arithmetic" result="result4" in="result9" in2="result2" />
  <feConvolveMatrix order="3 3" kernelMatrix="2 0 0 0 2 0 0 0 -2 " targetX="2" targetY="2" result="result10" />
  <feBlend mode="multiply" in="result10" in2="result10" />
</filter>
`
