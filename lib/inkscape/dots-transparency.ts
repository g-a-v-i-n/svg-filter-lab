export const dotsTransparency = `
<filter id="dots-transparency" height="200%" width="200%" x="-50%" y="-50%" data-name="Dots Transparency" data-category="Overlays" data-description="Gives a pointillist HSL sensitive transparency" color-interpolation-filters="sRGB">
  <feTurbulence result="result1" numOctaves="3" baseFrequency="1" type="fractalNoise" seed="50" />
  <feColorMatrix result="result0" in="SourceGraphic" type="luminanceToAlpha" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.7 0 " result="result2" />
  <feComposite in="result1" operator="over" in2="result2" result="result3" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -3.2 " result="result91" />
  <feComposite operator="out" in="SourceGraphic" result="result4" in2="result91" />
</filter>
`
