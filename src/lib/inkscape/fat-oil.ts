export const fatOil = `
<filter id="fat-oil" height="200%" width="200%" x="-50%" y="-50%" data-name="Fat Oil" data-category="Bevels" data-description="Fat oil with some adjustable turbulence" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="3" seed="55" type="fractalNoise" baseFrequency="0.02" />
  <feGaussianBlur stdDeviation="1" result="result91" />
  <feDisplacementMap scale="15" yChannelSelector="G" xChannelSelector="R" in="SourceGraphic" in2="result91" />
  <feGaussianBlur stdDeviation="1.5" result="result92" />
  <feComposite result="fbSourceGraphic" k4="-0.3" k3="1" k2="1" operator="arithmetic" in2="result92" />
  <feGaussianBlur stdDeviation="3.5" in="fbSourceGraphic" result="result0" />
  <feSpecularLighting in="result0" result="result1" lighting-color="rgb(255,255,255)" surfaceScale="3" specularConstant="1" specularExponent="55">
    <feDistantLight azimuth="235" elevation="65" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="0.4" k3="1.7" in2="result2" />
  <feBlend result="fbSourceGraphic" mode="normal" in2="result2" />
</filter>
`
