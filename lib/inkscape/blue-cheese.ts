export const blueCheese = `
<filter id="blue-cheese" height="200%" width="200%" x="-50%" y="-50%" data-name="Blue Cheese" data-category="Overlays" data-description="Marble-like bluish speckles" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="2" baseFrequency="0.063" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 -10 1" />
  <feGaussianBlur stdDeviation="1" result="result1" />
  <feTurbulence numOctaves="3" baseFrequency="0.031" type="fractalNoise" result="result0" />
  <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2 -0.5" />
  <feComposite operator="in" in2="result2" in="result1" />
  <feComposite in2="SourceGraphic" operator="atop" />
</filter>
`;
