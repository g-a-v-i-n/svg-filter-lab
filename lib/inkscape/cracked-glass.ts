export const crackedGlass = `
<filter id="cracked-glass" height="200%" width="200%" x="-50%" y="-50%" data-name="Cracked Glass" data-category="Textures" data-description="Under a cracked glass" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.1" seed="50" numOctaves="5" result="result1" type="fractalNoise" />
  <feGaussianBlur stdDeviation="4" result="result7" />
  <feDisplacementMap result="result5" in="SourceGraphic" scale="20" xChannelSelector="G" in2="result7" />
  <feComposite result="result2" operator="in" in2="result1" in="result5" />
  <feGaussianBlur stdDeviation="1" result="result6" />
  <feSpecularLighting surfaceScale="-3" result="result4" specularConstant="3.5" specularExponent="35" in="result6">
    <feDistantLight elevation="45" azimuth="225" />
  </feSpecularLighting>
  <feComposite k1="1.7" k3="0.7" in2="result2" in="result4" operator="arithmetic" result="result91" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="result91" />
  <feComposite in2="fbSourceGraphic" in="fbSourceGraphic" result="result2" operator="arithmetic" />
  <feComposite in="result2" result="result4" operator="arithmetic" k2="2" k3="2" in2="fbSourceGraphic" />
  <feBlend mode="screen" in="result4" in2="result4" />
</filter>
`;
