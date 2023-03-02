export const basicTwoLightsBump = `
<filter id="basic-two-lights-bump" height="200%" width="200%" x="-50%" y="-50%" data-name="Basic Two Lights Bump" data-category="Bumps" data-description="Two types of lighting emboss effect" color-interpolation-filters="sRGB">
  <feColorMatrix result="result2" type="luminanceToAlpha" in="SourceGraphic" />
  <feSpecularLighting specularConstant="0.5" surfaceScale="-15" specularExponent="10" result="result10">
    <feDistantLight elevation="20" azimuth="225" />
  </feSpecularLighting>
  <feDiffuseLighting diffuseConstant="0.5" surfaceScale="15">
    <feDistantLight azimuth="225" elevation="20" />
  </feDiffuseLighting>
  <feComposite result="result11" in2="result10" operator="arithmetic" k2="0.5" k3="0.5" />
  <feComposite in="result11" result="result9" operator="arithmetic" k2="1" k3="1" in2="SourceGraphic" />
  <feComposite in2="SourceGraphic" operator="in" in="result9" />
</filter>
`;
