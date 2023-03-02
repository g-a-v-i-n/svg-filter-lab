export const tornEdges = `
<filter id="torn-edges" height="200%" width="200%" x="-50%" y="-50%" data-name="Torn Edges" data-category="Distort" data-description="Displace the outside of shapes and pictures without altering their content" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.05" numOctaves="5" type="fractalNoise" result="result91" />
  <feDisplacementMap scale="25" result="result5" xChannelSelector="R" in="SourceGraphic" in2="result91" />
  <feComposite in="SourceGraphic" operator="atop" in2="result5" />
</filter>
`;
