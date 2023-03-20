export const jamSpread = `
<filter id="jam-spread" height="200%" width="200%" x="-50%" y="-50%" data-name="Jam Spread" data-category="Textures" data-description="Glossy clumpy jam spread" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" in="SourceGraphic" result="result0" />
  <feTurbulence result="result1" numOctaves="7" seed="488" baseFrequency="0.017" type="turbulence" />
  <feComposite in="result0" in2="result1" operator="out" result="result2" />
  <feGaussianBlur stdDeviation="0.5" result="result5" />
  <feSpecularLighting in="result5" specularExponent="100" specularConstant="4" result="result4" surfaceScale="1.5">
    <feDistantLight azimuth="225" elevation="62" />
  </feSpecularLighting>
  <feComposite operator="atop" in="result4" in2="result2" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`
