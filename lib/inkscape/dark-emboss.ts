export const darkEmboss = `
<filter id="dark-emboss" height="200%" width="200%" x="-50%" y="-50%" data-name="Dark Emboss" data-category="Bumps" data-description="Emboss effect : 3D relief where white is replaced by black" color-interpolation-filters="sRGB">
  <feColorMatrix result="result2" type="luminanceToAlpha" />
  <feDiffuseLighting diffuseConstant="0.5" result="result1" surfaceScale="-10">
    <feDistantLight elevation="20" azimuth="225" />
  </feDiffuseLighting>
  <feComposite result="result3" k3="1" k2="1" k1="1" in="result1" operator="arithmetic" in2="SourceGraphic" />
  <feBlend result="result4" mode="multiply" in="result2" in2="result3" />
  <feComposite result="result5" operator="arithmetic" k2="1.2" in2="result4" />
  <feComposite operator="in" in="result5" in2="SourceGraphic" />
</filter>
`;
