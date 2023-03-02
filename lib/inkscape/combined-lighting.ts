export const combinedLighting = `
<filter id="combined-lighting" height="200%" width="200%" x="-50%" y="-50%" data-name="Combined Lighting" data-category="Bevels" data-description="Basic specular bevel to use for building textures" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="6" in="SourceGraphic" result="result0" />
  <feDiffuseLighting lighting-color="rgb(255,255,255)" diffuseConstant="1" surfaceScale="4" result="result5">
    <feDistantLight elevation="45" azimuth="235" />
  </feDiffuseLighting>
  <feComposite k1="1.4" in2="SourceGraphic" in="result5" result="fbSourceGraphic" operator="arithmetic" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="6" />
  <feSpecularLighting specularExponent="25" specularConstant="1" surfaceScale="4" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="45" />
  </feSpecularLighting>
  <feComposite k3="1" k2="1" operator="arithmetic" in="fbSourceGraphic" in2="result1" result="result4" />
  <feComposite operator="in" result="result2" in2="SourceGraphic" in="result4" />
</filter>
`;
