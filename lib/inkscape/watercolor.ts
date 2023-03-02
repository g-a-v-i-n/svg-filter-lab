export const watercolor = `
<filter id="watercolor" height="200%" width="200%" x="-50%" y="-50%" data-name="Watercolor" data-category="Textures" data-description="Cloudy watercolor effect" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="15" result="result8" />
  <feTurbulence seed="27" result="result7" type="fractalNoise" numOctaves="5" baseFrequency="0.025" />
  <feComposite in2="result8" result="result6" operator="over" in="result7" />
  <feColorMatrix result="result9" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -4 " />
  <feDisplacementMap in="result7" in2="result9" xChannelSelector="A" yChannelSelector="A" scale="45" result="result4" />
  <feComposite in2="result4" result="result2" operator="in" in="result8" />
  <feComposite result="fbSourceGraphic" in="result2" operator="in" in2="result9" />
  <feComposite operator="arithmetic" k2="1" k1="0.5" in="fbSourceGraphic" in2="fbSourceGraphic" result="result91" />
  <feBlend in="fbSourceGraphic" mode="multiply" in2="result91" />
</filter>
`;
