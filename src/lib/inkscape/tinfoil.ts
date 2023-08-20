export const tinfoil = `
<filter id="tinfoil" height="200%" width="200%" x="-50%" y="-50%" data-name="Tinfoil" data-category="Bumps" data-description="Metallic foil effect combining two lighting types and variable crumple" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceGraphic" result="result14" stdDeviation="0.5" />
  <feTurbulence type="fractalNoise" seed="25" baseFrequency="0.004 0.008" numOctaves="1" result="result5" />
  <feDisplacementMap scale="100" xChannelSelector="R" in="result5" result="result8" yChannelSelector="B" in2="result14" />
  <feGaussianBlur stdDeviation="0.5" result="result17" />
  <feSpecularLighting specularExponent="40" specularConstant="1" surfaceScale="12" result="result2" lighting-color="rgb(254,218,71)" in="result17">
    <feDistantLight elevation="70" azimuth="225" />
  </feSpecularLighting>
  <feDiffuseLighting diffuseConstant="0.5" surfaceScale="50" in="result17" lighting-color="rgb(116,245,254)">
    <feDistantLight elevation="55" azimuth="225" />
  </feDiffuseLighting>
  <feBlend in2="SourceGraphic" result="result9" mode="screen" />
  <feComposite k3="1" k2="1" in="result2" result="result11" in2="result9" operator="arithmetic" />
  <feComposite in2="SourceGraphic" operator="in" result="result16" />
  <feBlend mode="multiply" in2="result16" />
  <feDisplacementMap in2="result5" xChannelSelector="R" scale="0" />
</filter>
`
