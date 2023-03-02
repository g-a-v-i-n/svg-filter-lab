export const iridescentBeeswax = `
<filter id="iridescent-beeswax" height="200%" width="200%" x="-50%" y="-50%" data-name="Iridescent Beeswax" data-category="Materials" data-description="Waxy texture which keeps its iridescence through color fill change" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="3" />
  <feTurbulence type="turbulence" baseFrequency="0.05" seed="200" numOctaves="5" result="result1" />
  <feComposite result="result2" operator="in" in2="result1" in="result0" />
  <feSpecularLighting lighting-color="rgb(255,255,255)" surfaceScale="4" result="result4" specularConstant="8" specularExponent="3" in="result2">
    <feDistantLight elevation="62" azimuth="225" />
  </feSpecularLighting>
  <feComposite k1="1.8" k3="0.8" k2="-0.4" in2="result2" in="result4" operator="arithmetic" result="result91" />
  <feBlend result="fbSourceGraphic" mode="screen" in2="result91" />
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="fbSourceGraphic" operator="arithmetic" k2="2" k3="5" in2="result2" />
  <feTurbulence type="fractalNoise" baseFrequency="0.04" seed="35" numOctaves="5" result="result1" />
  <feComposite k4="-0.1" k1="0.9" k2="0.3" result="result2" operator="arithmetic" in2="result1" in="fbSourceGraphic" />
  <feSpecularLighting surfaceScale="3" result="result4" specularConstant="1" specularExponent="30" in="result2">
    <feDistantLight elevation="62" azimuth="225" />
  </feSpecularLighting>
  <feComposite in2="result2" in="result4" operator="atop" result="result92" />
  <feBlend mode="screen" in2="result92" />
</filter>
`;
