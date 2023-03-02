export const roughAndDilate = `
<filter id="rough-and-dilate" height="200%" width="200%" x="-50%" y="-50%" data-name="Rough and Dilate" data-category="Distort" data-description="Create a turbulent contour around" color-interpolation-filters="sRGB">
  <feMorphology radius="7" operator="dilate" result="result8" in="SourceGraphic" />
  <feComposite in2="result8" result="result10" in="SourceGraphic" operator="arithmetic" k1="0.5" k3="0.5" />
  <feTurbulence result="result11" type="fractalNoise" numOctaves="3" baseFrequency="0.07" />
  <feDisplacementMap result="result12" in2="result11" in="result10" xChannelSelector="R" scale="10" />
  <feComposite operator="arithmetic" result="result13" in="SourceGraphic" in2="result12" k1="0.25" k2="0.25" k3="0.75" />
</filter>
`;
