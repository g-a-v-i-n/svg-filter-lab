export const fire = `
<filter id="fire" height="200%" width="200%" x="-50%" y="-50%" data-name="Fire" data-category="Protrusions" data-description="Edges of object are on fire" color-interpolation-filters="sRGB">
  <feMorphology result="result1" radius="2.4" operator="dilate" />
  <feTurbulence baseFrequency="0.09 0.028" numOctaves="1" />
  <feColorMatrix result="result2" values="2 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 1 0" />
  <feDisplacementMap result="result4" scale="10.319410319410318" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result2" />
  <feFlood result="result3" flood-opacity="1" flood-color="rgb(255,159,54)" />
  <feMorphology radius="3.8" result="result7" in="result4" />
  <feGaussianBlur result="result7" in="result7" stdDeviation="2.4" />
  <feComposite result="result5" in2="result4" in="result3" operator="in" />
  <feComposite operator="out" in2="result7" />
  <feOffset result="result6" dy="-7" dx="-4.5" />
  <feGaussianBlur result="result7" stdDeviation="4.8" />
  <feComposite in="SourceGraphic" in2="result6" />
  <feComposite in2="result7" />
</filter>
`;
