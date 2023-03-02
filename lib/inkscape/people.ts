export const people = `
<filter id="people" height="200%" width="200%" x="-50%" y="-50%" data-name="People" data-category="Overlays" data-description="Colorized blotches, like a crowd of people" color-interpolation-filters="sRGB">
  <feTurbulence result="result7" type="fractalNoise" numOctaves="3" baseFrequency="0.2 0.09" />
  <feColorMatrix result="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5.5 -2 " />
  <feComposite result="result6" in="SourceGraphic" operator="in" in2="result7" />
  <feDisplacementMap in="result5" xChannelSelector="R" yChannelSelector="A" scale="9" result="result4" in2="result6" />
  <feComposite result="result2" operator="in" in2="result4" in="SourceGraphic" />
  <feComposite in="result2" operator="in" in2="SourceGraphic" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`;
