export const gardenOfDelights = `
<filter id="garden-of-delights" height="200%" width="200%" x="-50%" y="-50%" data-name="Garden of Delights" data-category="Overlays" data-description="Phantasmagorical turbulent wisps, like Hieronymus Bosch&apos;s Garden of Delights" color-interpolation-filters="sRGB">
  <feTurbulence result="result1" baseFrequency="0.005 0.01" numOctaves="8" type="fractalNoise" seed="20" />
  <feColorMatrix result="result3" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1.2 -0.4 " />
  <feConvolveMatrix order="3 3" kernelMatrix="3 0 0 0 2 0 0 0 -1 " targetX="1" targetY="1" divisor="2" result="result8" />
  <feComposite result="fbSourceGraphic" in2="SourceGraphic" operator="atop" in="result8" />
  <feTurbulence baseFrequency="0.027 0.025" numOctaves="7" type="turbulence" seed="20" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 4.7 -2 " result="result5" />
  <feComposite in2="result5" operator="in" in="fbSourceGraphic" result="result6" />
  <feDisplacementMap in2="result5" result="result4" scale="48" yChannelSelector="A" xChannelSelector="R" in="result6" />
  <feFlood flood-color="rgb(222,217,217)" flood-opacity="1" />
  <feComposite in2="result4" operator="in" result="result2" />
  <feComposite in2="fbSourceGraphic" operator="atop" in="result2" result="result91" />
  <feBlend mode="darken" in2="result91" />
</filter>
`
