export const flexMetal = `
<filter id="flex-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Flex Metal" data-category="Materials" data-description="Bright, polished uneven metal casting, colorizable" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result8" />
  <feTurbulence seed="25" result="result7" type="turbulence" numOctaves="2" baseFrequency="0.03" />
  <feComposite in2="result8" result="result6" operator="in" in="result8" />
  <feDisplacementMap in="result7" in2="result6" xChannelSelector="A" yChannelSelector="A" scale="120" result="result4" />
  <feComposite in2="result4" result="result2" operator="arithmetic" in="SourceGraphic" k1="2" k3="2.5" k2="0.25" />
  <feComposite result="fbSourceGraphic" in="result2" operator="in" in2="SourceGraphic" />
  <feBlend mode="screen" in2="fbSourceGraphic" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`;
