export const silkCarpet = `
<filter id="silk-carpet" height="200%" width="200%" x="-50%" y="-50%" data-name="Silk Carpet" data-category="Textures" data-description="Silk carpet texture, horizontal stripes" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" numOctaves="2" baseFrequency="0.01 0.11" seed="10" />
  <feColorMatrix result="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.3 0 " />
  <feComposite in="SourceGraphic" operator="out" in2="result5" />
  <feMorphology operator="dilate" radius="1.3" result="result3" />
  <feTurbulence numOctaves="3" baseFrequency="0.08 0.05" type="fractalNoise" seed="7" result="result6" />
  <feGaussianBlur stdDeviation="0.5" result="result7" />
  <feDisplacementMap in="result3" xChannelSelector="R" yChannelSelector="G" scale="3" result="result4" in2="result7" />
  <feComposite in="result4" k1="1" result="result2" operator="arithmetic" in2="result4" k2="1" />
  <feBlend in2="result4" mode="normal" in="result2" />
</filter>
`;
