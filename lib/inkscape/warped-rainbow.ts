export const warpedRainbow = `
<filter id="warped-rainbow" height="200%" width="200%" x="-50%" y="-50%" data-name="Warped Rainbow" data-category="Textures" data-description="Smooth rainbow colors warped along the edges and colorizable" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result8" stdDeviation="5" />
  <feTurbulence baseFrequency="0.015" numOctaves="2" type="fractalNoise" result="result7" seed="20" />
  <feDisplacementMap yChannelSelector="A" xChannelSelector="A" scale="100" result="result10" in="result7" in2="result8" />
  <feComposite in="result10" operator="atop" result="result2" in2="result8" />
  <feComposite in2="result2" operator="arithmetic" in="result10" result="fbSourceGraphic" k1="2.5" k3="0.5" />
</filter>
`;
