export const speckle = `
<filter id="speckle" height="200%" width="200%" x="-50%" y="-50%" data-name="Speckle" data-category="Overlays" data-description="Fill object with sparse translucent specks" color-interpolation-filters="sRGB">
  <feTurbulence result="result1" numOctaves="1" baseFrequency="0.21" type="fractalNoise" />
  <feColorMatrix result="result0" in="SourceGraphic" type="luminanceToAlpha" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.8 0" result="result2" />
  <feComposite in="result1" operator="over" in2="result2" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -14" result="result91" />
  <feComposite operator="out" in="SourceGraphic" in2="result91" />
</filter>
`
