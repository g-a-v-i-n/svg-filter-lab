export const frost = `
<filter id="frost" height="200%" width="200%" x="-50%" y="-50%" data-name="Frost" data-category="Overlays" data-description="Flake-like white splotches" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" numOctaves="5" baseFrequency="0.143" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -3" />
  <feComposite operator="in" in2="SourceAlpha" />
  <feMorphology operator="dilate" radius="2.7" result="result3" />
  <feTurbulence numOctaves="2" baseFrequency="0.121" result="result91" />
  <feDisplacementMap in="result3" xChannelSelector="R" yChannelSelector="A" scale="10" result="result4" in2="result91" />
  <feFlood flood-opacity="1" flood-color="rgb(255,255,255)" />
  <feComposite result="result2" operator="in" in2="result4" />
  <feComposite in="result2" operator="over" in2="SourceGraphic" />
</filter>
`;
