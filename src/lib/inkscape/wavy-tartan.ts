export const wavyTartan = `
<filter id="wavy-tartan" height="200%" width="200%" x="-50%" y="-50%" data-name="Wavy Tartan" data-category="Overlays" data-description="Tartan pattern with a wavy displacement and bevel around the edges" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" result="result0" seed="20" numOctaves="1" baseFrequency="0 0.19" />
  <feTurbulence result="result3" type="turbulence" seed="20" numOctaves="1" baseFrequency="0.19 0" />
  <feComposite result="result1" operator="arithmetic" in2="result3" in="result0" k2="1" k3="1" k1="3" />
  <feComposite result="fbSourceGraphic" in="SourceGraphic" operator="in" in2="result1" />
  <feGaussianBlur result="result8" stdDeviation="10" in="fbSourceGraphic" />
  <feComposite in="result8" operator="xor" result="result6" in2="result8" />
  <feDisplacementMap result="result4" scale="75" yChannelSelector="A" xChannelSelector="A" in2="result6" in="result1" />
  <feComposite k1="1" in="SourceGraphic" operator="in" result="result2" in2="result4" />
</filter>
`
