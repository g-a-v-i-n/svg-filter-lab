export const ripple = `
<filter id="ripple" height="200%" width="200%" x="-50%" y="-50%" data-name="Ripple" data-category="Distort" data-description="Horizontal rippling of edges" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="1" baseFrequency="0.002 0.107" />
  <feColorMatrix values="2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0.5" result="result91" />
  <feDisplacementMap yChannelSelector="A" xChannelSelector="R" scale="14.3" in="SourceGraphic" in2="result91" />
</filter>
`;
