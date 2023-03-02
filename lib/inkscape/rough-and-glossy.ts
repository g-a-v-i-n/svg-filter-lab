export const roughAndGlossy = `
<filter id="rough-and-glossy" height="200%" width="200%" x="-50%" y="-50%" data-name="Rough and Glossy" data-category="Textures" data-description="Crumpled glossy paper effect which can be used for pictures as for objects" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" numOctaves="7" baseFrequency="0.02" seed="55" result="result0" />
  <feDiffuseLighting surfaceScale="4" diffuseConstant="1" kernelUnitLength="1" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="60" />
  </feDiffuseLighting>
  <feSpecularLighting in="result0" surfaceScale="3" specularConstant="1" specularExponent="25" kernelUnitLength="1" result="result3">
    <feDistantLight azimuth="235" elevation="55" />
  </feSpecularLighting>
  <feComposite in="result1" in2="SourceGraphic" operator="arithmetic" k1="1" result="result2" />
  <feComposite in="result2" in2="result3" operator="arithmetic" k2="1" k3="1" result="result4" />
  <feComposite in2="SourceAlpha" operator="in" in="result4" result="fbSourceGraphic" />
  <feDisplacementMap scale="7" yChannelSelector="G" xChannelSelector="R" in2="result0" />
</filter>
`;
