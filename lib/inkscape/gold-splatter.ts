export const goldSplatter = `
<filter id="gold-splatter" height="200%" width="200%" x="-50%" y="-50%" data-name="Gold Splatter" data-category="Materials" data-description="Splattered cast metal, with golden highlights" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="result91" />
  <feComposite result="fbSourceGraphic" operator="in" in="SourceGraphic" in2="result91" />
  <feGaussianBlur result="result1" in="fbSourceGraphic" stdDeviation="1" />
  <feTurbulence result="result0" numOctaves="7" baseFrequency="0.074 0.084" type="fractalNoise" />
  <feDisplacementMap result="result2" scale="80" yChannelSelector="G" xChannelSelector="A" in="result1" in2="result0" />
  <feColorMatrix type="saturate" values="1" result="result3" />
  <feGaussianBlur result="result4" in="fbSourceGraphic" stdDeviation="1" />
  <feComposite operator="atop" result="fbSourceGraphic" in="result4" in2="result3" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="1" />
  <feTurbulence baseFrequency="0.062" seed="488" numOctaves="8" result="result1" type="fractalNoise" />
  <feComposite result="result2" operator="out" in2="result1" in="result0" />
  <feSpecularLighting lighting-color="rgb(244,200,40)" surfaceScale="2" result="result4" specularConstant="2" specularExponent="40" in="result2">
    <feDistantLight elevation="62" azimuth="225" />
  </feSpecularLighting>
  <feComposite in2="result2" in="result4" operator="atop" result="result92" />
  <feBlend mode="multiply" in2="result92" />
</filter>
`;
