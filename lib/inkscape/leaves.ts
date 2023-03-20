export const leaves = `
<filter id="leaves" height="200%" width="200%" x="-50%" y="-50%" data-name="Leaves" data-category="Scatter" data-description="Leaves on the ground in Fall, or living foliage" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.09" numOctaves="5" type="fractalNoise" result="result6" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 4.9 -2.9 " result="result5" in="result6" />
  <feComposite in2="result5" operator="in" in="SourceGraphic" />
  <feMorphology result="result3" radius="6" operator="dilate" />
  <feTurbulence baseFrequency="0.2" numOctaves="1" type="fractalNoise" result="result91" />
  <feDisplacementMap result="result4" scale="15" yChannelSelector="G" xChannelSelector="R" in="result3" in2="result91" />
  <feComposite in2="result4" operator="arithmetic" result="result2" k1="0.5" k3="1" />
  <feConvolveMatrix order="3 3" kernelMatrix="1 0 0 0 2 0 0 0 -1 " targetX="0" targetY="0" divisor="1.5" edgeMode="duplicate" in="result2" />
</filter>
`
