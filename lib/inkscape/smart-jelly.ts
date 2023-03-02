export const smartJelly = `
<filter id="smart-jelly" height="200%" width="200%" x="-50%" y="-50%" data-name="Smart Jelly" data-category="Bevels" data-description="Same as Matte jelly but with more controls" color-interpolation-filters="sRGB">
  <feBlend in2="SourceGraphic" mode="normal" result="result3" />
  <feComposite result="result4" operator="arithmetic" k2="1" in2="result3" />
  <feColorMatrix id="feColorMatrix3006" in="result4" result="result0" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.85 0 " />
  <feGaussianBlur stdDeviation="7" in="SourceAlpha" />
  <feSpecularLighting result="result1" specularExponent="25" specularConstant="1" surfaceScale="5">
    <feDistantLight azimuth="225" elevation="60" />
  </feSpecularLighting>
  <feComposite in2="result0" k1="0.5" k2="1" operator="arithmetic" k3="0.5" />
  <feComposite result="result2" in2="result0" operator="atop" />
  <feComposite operator="in" in2="SourceGraphic" />
</filter>
`;
