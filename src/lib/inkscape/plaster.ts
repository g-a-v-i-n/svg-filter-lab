export const plaster = `
<filter id="plaster" height="200%" width="200%" x="-50%" y="-50%" data-name="Plaster" data-category="Bumps" data-description="Combine a HSL edges detection bump with a matte and crumpled surface effect" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result3" />
  <feGaussianBlur stdDeviation="1.5" in="SourceGraphic" result="result4" />
  <feBlend in2="result3" mode="darken" result="result11" />
  <feComponentTransfer result="result1">
    <feFuncR type="table" tableValues="0 0.2 0.133333 0.3 0.4 0.333333 0.5 0.6 0.533333 0.7 0.8 0.733333 0.9 1 0.933333 1.1 1" />
    <feFuncG type="table" tableValues="0 0.2 0.133333 0.3 0.4 0.333333 0.5 0.6 0.533333 0.7 0.8 0.733333 0.9 1 0.933333 1.1 1" />
    <feFuncB type="table" tableValues="0 0.2 0.133333 0.3 0.4 0.333333 0.5 0.6 0.533333 0.7 0.8 0.733333 0.9 1 0.933333 1.1 1" />
  </feComponentTransfer>
  <feColorMatrix result="result2" type="luminanceToAlpha" in="result1" />
  <feDiffuseLighting lighting-color="#ffffff" in="result2" diffuseConstant="1" result="result1" surfaceScale="-15">
    <feDistantLight azimuth="225" elevation="10" />
  </feDiffuseLighting>
  <feSpecularLighting result="result14" specularExponent="10" specularConstant="1" surfaceScale="-15" in="result2">
    <feDistantLight elevation="45" azimuth="225" />
  </feSpecularLighting>
  <feComposite result="result13" k3="0.5" k2="0.5" in2="result1" operator="arithmetic" />
  <feFlood flood-color="rgb(217,144,144)" result="result12" />
  <feComposite in2="result13" result="result9" operator="arithmetic" k2="1" k3="0.8" in="result11" />
  <feComposite in2="SourceGraphic" result="result7" operator="in" in="result9" />
</filter>
`
