export const goldPaste = `
<filter id="gold-paste" height="200%" width="200%" x="-50%" y="-50%" data-name="Gold Paste" data-category="Materials" data-description="Fat pasted cast metal, with golden highlights" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceAlpha" stdDeviation="0.01" result="result91" />
  <feComposite result="fbSourceGraphic" operator="in" in="SourceGraphic" in2="result91" />
  <feGaussianBlur result="result1" in="fbSourceGraphic" stdDeviation="0.01" />
  <feTurbulence result="result0" numOctaves="4" baseFrequency="0.04" type="fractalNoise" seed="20" />
  <feDisplacementMap result="result2" scale="30" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result0" />
  <feColorMatrix type="saturate" values="1" result="result3" />
  <feGaussianBlur result="result4" in="fbSourceGraphic" stdDeviation="0.01" />
  <feComposite operator="atop" result="fbSourceGraphic" in="result4" in2="result3" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="1.5" />
  <feTurbulence baseFrequency="0.02" seed="20" numOctaves="8" result="result1" type="fractalNoise" />
  <feComposite result="result2" operator="out" in2="result1" in="result0" />
  <feSpecularLighting lighting-color="rgb(223,188,16)" surfaceScale="2.5" result="result4" specularConstant="2" specularExponent="30" in="result2">
    <feDistantLight elevation="62" azimuth="225" />
  </feSpecularLighting>
  <feComposite in2="result2" in="result4" operator="atop" result="result92" />
  <feBlend mode="multiply" in2="result92" />
</filter>
`;
