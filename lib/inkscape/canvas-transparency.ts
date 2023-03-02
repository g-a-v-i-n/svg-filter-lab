export const canvasTransparency = `
<filter id="canvas-transparency" height="200%" width="200%" x="-50%" y="-50%" data-name="Canvas Transparency" data-category="Overlays" data-description="Gives a canvas like HSL sensitive transparency." color-interpolation-filters="sRGB">
  <feTurbulence result="result1" numOctaves="10" baseFrequency="0.3" type="turbulence" />
  <feColorMatrix result="result0" in="SourceGraphic" type="luminanceToAlpha" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.4 0 " result="result2" />
  <feComposite in="result2" operator="over" in2="result1" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -4 " result="result91" />
  <feComposite operator="out" in="SourceGraphic" in2="result91" />
  <feGaussianBlur stdDeviation="0.7" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " />
</filter>
`;
