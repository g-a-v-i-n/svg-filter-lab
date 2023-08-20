export const stoneWall = `
<filter id="stone-wall" height="200%" width="200%" x="-50%" y="-50%" data-name="Stone Wall" data-category="Textures" data-description="Stone wall texture to use with not too saturated colors" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" numOctaves="5" baseFrequency="0.08 0.175" seed="25" />
  <feColorMatrix result="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2 0 " />
  <feComposite in="SourceGraphic" operator="in" in2="result5" />
  <feMorphology operator="dilate" radius="0.65" result="result3" />
  <feTurbulence numOctaves="7" baseFrequency="0.05 0.09" type="fractalNoise" seed="25" />
  <feGaussianBlur stdDeviation="2" result="result7" />
  <feDisplacementMap in="result3" xChannelSelector="R" yChannelSelector="G" scale="5" result="result4" in2="result7" />
  <feFlood flood-opacity="1" flood-color="rgb(255,255,255)" />
  <feComposite k3="0.7" k1="0.7" result="result2" operator="arithmetic" in2="result4" />
  <feComposite k2="1" in="result2" operator="arithmetic" in2="SourceAlpha" k1="1" result="result6" />
  <feBlend mode="multiply" in2="result6" in="result6" />
</filter>
`
