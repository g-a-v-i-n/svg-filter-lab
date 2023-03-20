export const shakenLiquid = `
<filter id="shaken-liquid" height="200%" width="200%" x="-50%" y="-50%" data-name="Shaken Liquid" data-category="Overlays" data-description="Colorizable filling with flow inside like transparency" color-interpolation-filters="sRGB">
  <feFlood flood-color="rgb(158,236,254)" result="result9" />
  <feGaussianBlur result="result8" stdDeviation="7" in="SourceGraphic" />
  <feTurbulence baseFrequency="0.05" numOctaves="2" type="fractalNoise" result="result7" seed="0" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2 -0.75 " result="result5" />
  <feComposite in2="result7" in="result8" operator="out" result="result6" />
  <feDisplacementMap in2="result6" result="result4" scale="100" yChannelSelector="A" xChannelSelector="A" in="result5" />
  <feComposite in2="result4" in="result8" operator="arithmetic" result="result2" k1="1" k3="0.5" />
  <feComposite in2="result2" operator="in" in="SourceGraphic" result="fbSourceGraphic" />
  <feMerge result="result10">
    <feMergeNode in="result9" />
    <feMergeNode in="fbSourceGraphic" />
  </feMerge>
  <feComposite in2="SourceAlpha" operator="in" result="result11" />
</filter>
`
