export const plastify = `
<filter id="plastify" height="200%" width="200%" x="-50%" y="-50%" data-name="Plastify" data-category="Bumps" data-description="HSL edges detection bump with a wavy reflective surface effect and variable crumple" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" result="result14" />
  <feFlood flood-opacity="1" result="result15" flood-color="rgb(55,200,113)" />
  <feTurbulence result="result5" numOctaves="1" baseFrequency="0.004 0.008" seed="25" type="fractalNoise" />
  <feDisplacementMap in2="result14" yChannelSelector="B" result="result8" in="result5" xChannelSelector="R" scale="100" />
  <feGaussianBlur stdDeviation="1" result="result17" />
  <feSpecularLighting in="result8" lighting-color="rgb(255,255,255)" result="result2" surfaceScale="-10" specularConstant="1" specularExponent="50">
    <feDistantLight azimuth="225" elevation="80" />
  </feSpecularLighting>
  <feBlend mode="screen" result="result9" in2="SourceGraphic" />
  <feComposite operator="atop" in2="SourceGraphic" result="result11" />
  <feDisplacementMap result="result16" in="result11" scale="0" xChannelSelector="R" in2="result5" />
</filter>
`
