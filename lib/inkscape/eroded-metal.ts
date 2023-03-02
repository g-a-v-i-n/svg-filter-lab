export const erodedMetal = `
<filter id="eroded-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Eroded Metal" data-category="Materials" data-description="Eroded metal texture with ridges, grooves, holes and bumps" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="1" />
  <feTurbulence id="feTurbulence3768" type="turbulence" baseFrequency="0.057" seed="4" numOctaves="4" result="result1" />
  <feDisplacementMap xChannelSelector="R" in2="result1" result="result91" />
  <feComposite result="result2" operator="out" in="result0" in2="result91" />
  <feComposite k1="0.1" k3="1.2" in2="result2" in="SourceAlpha" operator="arithmetic" result="result5" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="result5" />
  <feGaussianBlur stdDeviation="3" in="fbSourceGraphic" result="result0" />
  <feSpecularLighting in="result0" result="result1" lighting-color="rgb(254,230,93)" surfaceScale="3" specularConstant="0.4" specularExponent="15">
    <fePointLight x="-5000" y="-10000" z="20000" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite k1="-1" in="fbSourceGraphic" result="result4" operator="arithmetic" k2="2.5" k3="3.5" in2="result2" />
  <feBlend mode="multiply" in2="result4" />
</filter>
`;
