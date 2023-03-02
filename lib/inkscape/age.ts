export const age = `
<filter id="age" height="200%" width="200%" x="-50%" y="-50%" data-name="Age" data-category="Image Effects" data-description="Imitate aged photograph" color-interpolation-filters="sRGB">
  <feColorMatrix type="saturate" in="SourceGraphic" values="0" />
  <feColorMatrix values="3 0 0 0 -0.3 0 3 0 0 -0.3 0 0 3 0 -0.3 0 0 0 1 0" result="result0" />
  <feTurbulence baseFrequency="0.111" numOctaves="2" type="fractalNoise" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 -200" />
  <feGaussianBlur stdDeviation="1" />
  <feComposite in2="result0" operator="atop" />
</filter>
`;
