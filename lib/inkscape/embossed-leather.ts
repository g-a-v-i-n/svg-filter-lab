export const embossedLeather = `
<filter id="embossed-leather" height="200%" width="200%" x="-50%" y="-50%" data-name="Embossed Leather" data-category="Bumps" data-description="Combine a HSL edges detection bump with a leathery or woody and colorizable texture" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result14" stdDeviation="1.5" />
  <feFlood result="result12" flood-color="rgb(146,94,26)" />
  <feTurbulence type="turbulence" seed="25" baseFrequency="0.001 0.002" numOctaves="5" result="result5" />
  <feDisplacementMap scale="100" xChannelSelector="R" in="result5" result="result8" in2="result14" yChannelSelector="G" />
  <feComposite in="result8" result="result10" operator="arithmetic" in2="result5" k1="0.5" k2="0.5" />
  <feSpecularLighting specularExponent="15" specularConstant="1" surfaceScale="-15" result="result2">
    <feDistantLight elevation="90" azimuth="225" />
  </feSpecularLighting>
  <feGaussianBlur result="result13" stdDeviation="0.4" />
  <feDiffuseLighting surfaceScale="-20" result="result1" diffuseConstant="0.6" in="result13">
    <feDistantLight elevation="10" azimuth="225" />
  </feDiffuseLighting>
  <feComposite result="result4" in="SourceGraphic" in2="result1" operator="arithmetic" k2="1" k3="0.6" />
  <feComposite result="result11" in2="SourceGraphic" operator="in" />
  <feBlend in2="result11" in="result11" result="result9" mode="normal" />
</filter>
`
