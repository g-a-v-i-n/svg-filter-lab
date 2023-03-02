export const burntEdges = `
<filter id="burnt-edges" height="200%" width="200%" x="-50%" y="-50%" data-name="Burnt edges" data-category="Textures" data-description="Torn edges with a dark inner blur" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.05" numOctaves="3" type="fractalNoise" />
  <feDisplacementMap scale="35" result="result5" xChannelSelector="R" in="SourceGraphic" yChannelSelector="G" />
  <feComposite in="SourceGraphic" operator="in" result="fbSourceGraphic" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
  <feGaussianBlur result="result6" stdDeviation="8" in="fbSourceGraphic" />
  <feComposite in2="result6" operator="atop" in="fbSourceGraphic" result="result8" />
  <feComposite in="result8" in2="fbSourceGraphicAlpha" operator="atop" result="result9" />
</filter>
`;
