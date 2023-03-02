export const enamelJewelry = `
<filter id="enamel-jewelry" height="200%" width="200%" x="-50%" y="-50%" data-name="Enamel Jewelry" data-category="Materials" data-description="Slightly cracked enameled texture" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="2" />
  <feTurbulence baseFrequency="0.052" seed="488" numOctaves="8" result="result1" type="fractalNoise" />
  <feDisplacementMap result="result5" xChannelSelector="R" scale="0" in2="result1" />
  <feComposite result="result2" operator="in" in2="result5" in="result0" />
  <feSpecularLighting surfaceScale="3" result="result4" specularConstant="3.94" specularExponent="40" lighting-color="rgb(226,252,180)" in="result2">
    <feDistantLight elevation="80" azimuth="265" />
  </feSpecularLighting>
  <feComposite k1="5" k3="0.5" in2="result2" in="result4" operator="arithmetic" result="result91" />
  <feBlend result="fbSourceGraphic" mode="darken" in2="result91" />
  <feGaussianBlur stdDeviation="5" in="fbSourceGraphic" result="result0" />
  <feSpecularLighting in="result0" result="result1" lighting-color="rgb(250,224,108)" surfaceScale="4" specularConstant="1" specularExponent="20">
    <feDistantLight azimuth="225" elevation="50" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="0.5" k3="2" in2="result2" />
  <feBlend mode="multiply" in2="result4" />
</filter>
`;
