export const basicDiffuseBump = `
<filter id="basic-diffuse-bump" height="200%" width="200%" x="-50%" y="-50%" data-name="Basic Diffuse Bump" data-category="Bumps" data-description="Matte emboss effect" color-interpolation-filters="sRGB">
  <feColorMatrix result="result2" type="luminanceToAlpha" in="SourceGraphic" />
  <feDiffuseLighting lighting-color="#ffffff" in="result2" diffuseConstant="0.5" result="result1" surfaceScale="15">
    <feDistantLight azimuth="225" elevation="10" />
  </feDiffuseLighting>
  <feComposite result="result9" operator="arithmetic" k2="1" k3="0.8" in2="SourceGraphic" />
  <feComposite in2="SourceGraphic" result="result7" operator="in" in="result9" />
</filter>
`;
