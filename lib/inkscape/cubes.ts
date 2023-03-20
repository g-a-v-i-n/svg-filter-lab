export const cubes = `
<filter id="cubes" height="200%" width="200%" x="-50%" y="-50%" data-name="Cubes" data-category="Scatter" data-description="Scattered cubes; adjust the Morphology primitive to vary size" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.14" numOctaves="1" type="fractalNoise" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -3.5 " result="result5" />
  <feComposite in2="result5" operator="in" in="SourceGraphic" result="result6" />
  <feMorphology result="result3" radius="5" operator="dilate" in="result6" />
  <feDisplacementMap result="result4" scale="0" yChannelSelector="A" xChannelSelector="R" in="result3" in2="result3" />
  <feComposite in2="result4" operator="arithmetic" result="result2" k1="1" k3="1" />
  <feBlend mode="darken" in="result2" in2="result2" />
  <feConvolveMatrix order="3 3" kernelMatrix="2 0 0 0 1 0 0 0 -1 " targetX="1" targetY="1" divisor="2" edgeMode="duplicate" />
</filter>
`
