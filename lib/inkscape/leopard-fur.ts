export const leopardFur = `
<filter id="leopard-fur" height="200%" width="200%" x="-50%" y="-50%" data-name="Leopard Fur" data-category="Materials" data-description="Leopard spots (loses object&apos;s own color)" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" numOctaves="5" baseFrequency="0.143" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 5 -3.45" />
  <feComposite operator="in" in2="SourceAlpha" result="result3" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 0" />
  <feMorphology operator="dilate" radius="1.8" result="result3" />
  <feGaussianBlur stdDeviation="1" result="result3" />
  <feGaussianBlur stdDeviation="2.7" />
  <feComposite operator="out" result="result1" in2="result3" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 6 0" result="result3" />
  <feFlood flood-color="rgb(209,151,45)" flood-opacity="1" result="result2" />
  <feComposite in2="SourceGraphic" in="result2" operator="in" result="result91" />
  <feComposite operator="atop" result="result3" in="result3" in2="result91" />
  <feGaussianBlur in="SourceAlpha" stdDeviation="7.2" />
  <feDiffuseLighting surfaceScale="10.6" diffuseConstant="1.92">
    <feDistantLight elevation="48" azimuth="225" />
  </feDiffuseLighting>
  <feBlend result="result3" mode="multiply" in2="result3" />
  <feComposite result="result3" operator="in" in2="SourceAlpha" />
  <feTurbulence numOctaves="3" baseFrequency="0.106" result="result92" />
  <feDisplacementMap in="result3" xChannelSelector="R" yChannelSelector="G" scale="4.5" in2="result92" />
</filter>
`
