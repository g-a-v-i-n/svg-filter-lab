export const reliefPrint = `
<filter id="relief-print" height="200%" width="200%" x="-50%" y="-50%" data-name="Relief Print" data-category="Bumps" data-description="Bumps effect with a bevel, color flood and complex lighting" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" />
  <feComposite result="result6" in="SourceGraphic" operator="in" in2="result8" />
  <feComposite operator="in" result="result11" in2="result6" />
  <feFlood result="result10" flood-opacity="1" flood-color="rgb(255,255,255)" />
  <feBlend mode="multiply" in="result10" in2="result11" result="result12" />
  <feComposite result="fbSourceGraphic" operator="in" in2="SourceGraphic" in="result12" />
  <feFlood result="result6" flood-color="rgb(75,101,154)" />
  <feComposite k3="0.3" k2="0.3" k1="0.5" operator="arithmetic" result="result2" in="fbSourceGraphic" in2="result6" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="result2" values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -0.8 -1 0 3.9 -2.7 " type="matrix" />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="0.5" />
  <feDiffuseLighting lighting-color="rgb(255,255,255)" diffuseConstant="0.7" surfaceScale="50" result="result13" in="result0">
    <feDistantLight elevation="20" azimuth="225" />
  </feDiffuseLighting>
  <feSpecularLighting specularExponent="20" specularConstant="0.7" surfaceScale="10" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight elevation="45" azimuth="225" />
  </feSpecularLighting>
  <feBlend mode="screen" result="result5" in2="SourceGraphic" in="result13" />
  <feComposite in="result1" k3="1" k2="1" operator="arithmetic" in2="result5" result="result9" />
  <feComposite in2="SourceGraphic" operator="in" />
</filter>
`;
