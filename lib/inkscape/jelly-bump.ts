export const jellyBump = `
<filter id="jelly-bump" height="200%" width="200%" x="-50%" y="-50%" data-name="Jelly Bump" data-category="Bumps" data-description="Convert pictures to thick jelly" color-interpolation-filters="sRGB">
  <feFlood flood-color="rgb(193,255,255)" flood-opacity="0.5" result="result13" />
  <feTurbulence baseFrequency="0.015" numOctaves="2" type="fractalNoise" result="result7" seed="0" />
  <feComposite k4="0" in="result7" operator="arithmetic" result="result6" in2="SourceGraphic" k2="0.5" k3="1" />
  <feGaussianBlur stdDeviation="1.5" result="result11" in="result6" />
  <feDisplacementMap result="result4" scale="62" yChannelSelector="G" xChannelSelector="A" in="result7" in2="result11" />
  <feComposite in="SourceGraphic" operator="in" result="result2" in2="result4" />
  <feSpecularLighting lighting-color="#f5e6c3" result="result12" surfaceScale="15" specularExponent="5">
    <feDistantLight azimuth="225" elevation="35" />
  </feSpecularLighting>
  <feMerge result="result14">
    <feMergeNode in="result13" />
    <feMergeNode in="result12" />
  </feMerge>
  <feComposite in2="SourceGraphic" operator="in" in="result14" />
</filter>
`;
