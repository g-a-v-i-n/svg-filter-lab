export const crackedLava = `
<filter id="cracked-lava" height="200%" width="200%" x="-50%" y="-50%" data-name="Cracked Lava" data-category="Materials" data-description="A volcanic texture, a little like leather" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result0" in="SourceGraphic" stdDeviation="0.5" />
  <feTurbulence baseFrequency="0.042" seed="488" numOctaves="7" result="result1" />
  <feDisplacementMap result="result5" xChannelSelector="R" scale="0" in2="result1" in="result1" yChannelSelector="G" />
  <feComposite result="result2" operator="in" in2="result5" in="result0" />
  <feSpecularLighting lighting-color="rgb(255,230,136)" surfaceScale="2" result="result4" specularConstant="2" specularExponent="65" in="result2">
    <feDistantLight elevation="62" azimuth="225" />
  </feSpecularLighting>
  <feComposite k1="2.5" k3="1" k2="-0.5" in2="result2" in="result4" operator="arithmetic" result="result91" />
  <feBlend result="fbSourceGraphic" mode="multiply" in2="result91" />
  <feColorMatrix values="1 0 0 -1 0 1 0 1 -1 0 1 0 0 -1 0 -2 -0.5 0 5 -2" in="fbSourceGraphic" result="fbSourceGraphicAlpha" />
  <feGaussianBlur stdDeviation="8" in="fbSourceGraphicAlpha" result="result0" />
  <feOffset dx="2" dy="2" in="result0" result="result3" />
  <feSpecularLighting in="result0" result="result1" lighting-color="rgb(255,255,255)" surfaceScale="4" specularConstant="0.8" specularExponent="15">
    <fePointLight x="-5000" y="-10000" z="20000" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphicAlpha" in="result1" result="result2" operator="in" />
  <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2="2" k3="2" in2="result2" />
  <feBlend mode="darken" in2="result4" />
</filter>
`
