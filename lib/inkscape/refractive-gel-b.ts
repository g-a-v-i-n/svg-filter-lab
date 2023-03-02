export const refractiveGelB = `
<filter id="refractive-gel-b" height="200%" width="200%" x="-50%" y="-50%" data-name="Refractive Gel B" data-category="Ridges" data-description="Gel effect with strong refraction" color-interpolation-filters="sRGB">
  <feOffset dx="3" dy="3" in="SourceAlpha" result="result3" />
  <feGaussianBlur stdDeviation="8" in="result3" result="result1" />
  <feComposite operator="in" in2="result1" in="SourceGraphic" result="result2" />
  <feComposite operator="out" result="fbSourceGraphic" in="result2" in2="result2" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0 0 0 0 6 0 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="3" />
  <feSpecularLighting specularExponent="20" specularConstant="2" surfaceScale="5" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="35" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphicAlpha" />
  <feComposite in="fbSourceGraphic" operator="arithmetic" k2="1.5" k3="3" in2="result2" result="result91" />
  <feBlend mode="screen" in2="result91" />
  <feConvolveMatrix order="3 3" kernelMatrix="2 0 1 0 1 0 0 0 0 " targetX="1" targetY="1" divisor="3" />
</filter>
`;
