export const liquid = `
<filter id="liquid" height="200%" width="200%" x="-50%" y="-50%" data-name="Liquid" data-category="Overlays" data-description="Colorizable filling with liquid transparency" color-interpolation-filters="sRGB">
  <feFlood flood-color="rgb(158,236,254)" result="result9" />
  <feGaussianBlur stdDeviation="7" result="result8" in="SourceGraphic" />
  <feTurbulence seed="0" result="result7" type="turbulence" numOctaves="1" baseFrequency="0.02" />
  <feColorMatrix result="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 4 0 " />
  <feComposite in2="result8" result="result6" operator="in" in="result8" />
  <feDisplacementMap in2="result6" in="result5" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" />
  <feComposite in2="result4" result="result2" operator="in" in="result8" />
  <feComposite in2="result2" result="fbSourceGraphic" in="SourceGraphic" operator="in" />
  <feMerge result="result10">
    <feMergeNode in="result9" />
    <feMergeNode in="fbSourceGraphic" />
  </feMerge>
  <feComposite in2="SourceGraphic" operator="in" result="result11" />
</filter>
`;
