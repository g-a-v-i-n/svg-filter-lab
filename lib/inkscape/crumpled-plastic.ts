export const crumpledPlastic = `
<filter id="crumpled-plastic" height="200%" width="200%" x="-50%" y="-50%" data-name="Crumpled Plastic" data-category="Textures" data-description="Crumpled matte plastic, with melted edge" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="2" seed="0" type="turbulence" baseFrequency="0.08" result="result91" />
  <feDisplacementMap result="fbSourceGraphic" scale="10" yChannelSelector="G" xChannelSelector="R" in="SourceGraphic" in2="result91" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="0.5" />
  <feTurbulence baseFrequency="0.01" seed="488" numOctaves="8" result="result1" />
  <feComposite result="result2" operator="in" in2="result1" in="result0" />
  <feSpecularLighting surfaceScale="1.5" result="result4" specularConstant="1" specularExponent="30" in="result2">
    <feDistantLight elevation="70" azimuth="235" />
  </feSpecularLighting>
  <feComposite in2="result2" in="result4" operator="atop" result="result5" />
  <feBlend mode="multiply" result="result6" in2="result5" />
  <feBlend mode="screen" in="result6" in2="result6" />
</filter>
`
