export const growingCells = `
<filter id="growing-cells" height="200%" width="200%" x="-50%" y="-50%" data-name="Growing Cells" data-category="Overlays" data-description="Random rounded living cells like fill" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="result7" />
  <feColorMatrix values="0" result="result8" type="saturate" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -12 " result="result6" type="matrix" />
  <feGaussianBlur stdDeviation="2" result="result5" in="result6" />
  <feColorMatrix in="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -0.1 " result="result0" type="matrix" />
  <feComposite k1="0.8" k2="1" in2="SourceGraphic" operator="arithmetic" result="result3" in="result0" />
  <feComposite operator="atop" in2="result8" />
  <feBlend mode="normal" in2="SourceGraphic" result="result9" />
  <feComposite in="result9" in2="SourceGraphic" operator="atop" result="result2" />
</filter>
`;
