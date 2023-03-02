export const rubberStamp = `
<filter id="rubber-stamp" height="200%" width="200%" x="-50%" y="-50%" data-name="Rubber Stamp" data-category="Overlays" data-description="Random whiteouts inside" color-interpolation-filters="sRGB">
  <feTurbulence result="result1" baseFrequency="0.064" numOctaves="4" type="fractalNoise" />
  <feGaussianBlur in="SourceAlpha" stdDeviation="4.9" result="result91" />
  <feComposite operator="out" in="SourceAlpha" in2="result91" />
  <feComposite in2="result1" />
  <feColorMatrix result="result1" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -9" />
  <feComposite result="result1" operator="in" in="SourceGraphic" in2="result1" />
  <feTurbulence baseFrequency="0.032" numOctaves="1" result="result92" />
  <feDisplacementMap scale="4.1" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result92" />
</filter>
`;
