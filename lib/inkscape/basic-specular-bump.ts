export const basicSpecularBump = `
<filter id="basic-specular-bump" height="200%" width="200%" x="-50%" y="-50%" data-name="Basic Specular Bump" data-category="Bumps" data-description="Specular emboss effect" color-interpolation-filters="sRGB">
  <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="result2" />
  <feSpecularLighting result="result10" specularExponent="15" surfaceScale="-15" specularConstant="1">
    <feDistantLight azimuth="225" elevation="25" />
  </feSpecularLighting>
  <feComposite in2="SourceGraphic" k3="1" k2="1" operator="arithmetic" result="result9" in="result10" />
  <feComposite in="result9" operator="in" result="result7" in2="SourceGraphic" />
</filter>
`;
