export const carnaval = `
<filter id="carnaval" height="200%" width="200%" x="-50%" y="-50%" data-name="Carnaval" data-category="Overlays" data-description="White splotches evocating carnaval masks" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.01" result="result8" />
  <feTurbulence baseFrequency="0.025 0.028" numOctaves="5" type="turbulence" result="result7" seed="3" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -2.4 " result="result5" />
  <feComposite in2="result7" operator="in" in="result8" result="result6" />
  <feDisplacementMap in2="result6" result="result4" scale="40" yChannelSelector="A" xChannelSelector="R" in="result5" />
  <feFlood flood-color="rgb(255,255,255)" flood-opacity="1" result="result10" />
  <feComposite in2="result4" operator="in" result="result2" />
  <feComposite in2="result8" operator="in" in="result2" result="result9" />
  <feBlend mode="normal" in2="result8" result="result11" />
  <feBlend mode="multiply" in2="result11" />
</filter>
`;
