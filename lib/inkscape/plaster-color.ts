export const plasterColor = `
<filter id="plaster-color" height="200%" width="200%" x="-50%" y="-50%" data-name="Plaster Color" data-category="Bumps" data-description="Colored plaster emboss effect" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result10" stdDeviation="5" />
  <feGaussianBlur in="SourceGraphic" result="result4" stdDeviation="1.5" />
  <feBlend mode="darken" in2="result10" />
  <feComposite operator="atop" in2="SourceGraphic" result="result5" />
  <feColorMatrix type="saturate" values="0" result="result1" in="result5" />
  <feComponentTransfer result="component1" in="result1">
    <feFuncR type="table" tableValues="0 0.2 0.133333 0.3 0.4 0.333333 0.5 0.6 0.533333 0.7 0.8 0.733333 0.9 1 0.933333 1.1 1" />
    <feFuncG type="table" tableValues="0 0.2 0.133333 0.3 0.4 0.333333 0.5 0.6 0.533333 0.7 0.8 0.733333 0.9 1 0.933333 1.1 1" />
    <feFuncB type="table" tableValues="0 0.2 0.133333 0.3 0.4 0.333333 0.5 0.6 0.533333 0.7 0.8 0.733333 0.9 1 0.933333 1.1 1" />
  </feComponentTransfer>
  <feFlood flood-color="rgb(255,0,0)" result="result2" />
  <feBlend in2="component1" mode="screen" result="result2" in="result2" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="component1" />
  <feColorMatrix result="result2" type="luminanceToAlpha" in="fbSourceGraphic" />
  <feDiffuseLighting lighting-color="#ffffff" in="result2" diffuseConstant="1" result="result1" surfaceScale="15">
    <feDistantLight azimuth="31" elevation="10" />
  </feDiffuseLighting>
  <feSpecularLighting specularExponent="10" in="result2" result="result11" surfaceScale="-15">
    <feDistantLight azimuth="225" elevation="45" />
  </feSpecularLighting>
  <feComposite operator="arithmetic" k2="0.5" k3="0.5" in2="result1" result="result12" />
  <feComposite in="result12" in2="fbSourceGraphic" result="result9" operator="arithmetic" k2="1" k3="1" />
  <feComposite in2="SourceGraphic" result="result7" operator="in" />
</filter>
`;
