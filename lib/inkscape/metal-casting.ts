export const metalCasting = `
<filter id="metal-casting" height="200%" width="200%" x="-50%" y="-50%" data-name="Metal Casting" data-category="Bevels" data-description="Smooth drop-like bevel with metallic finish" color-interpolation-filters="sRGB">
  <feColorMatrix values="0.37" type="saturate" in="SourceGraphic" result="result1" />
  <feGaussianBlur stdDeviation="7" id="feGaussianBlur2470" in="SourceAlpha" />
  <feSpecularLighting specularExponent="8" specularConstant="3.88" surfaceScale="10">
    <feDistantLight azimuth="225" elevation="17" />
  </feSpecularLighting>
  <feComposite in2="result1" operator="atop" />
</filter>
`
