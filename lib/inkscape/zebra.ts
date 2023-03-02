export const zebra = `
<filter id="zebra" height="200%" width="200%" x="-50%" y="-50%" data-name="Zebra" data-category="Overlays" data-description="Irregular vertical dark stripes (loses object&apos;s own color)" color-interpolation-filters="sRGB">
  <feColorMatrix result="result0" values="0.15 0.3 0.05 0 0.5 0.15 0.3 0.05 0 0.5 0.15 0.3 0.05 0 0.5 0 0 0 1 0" />
  <feTurbulence baseFrequency="0.078 0.012" numOctaves="1" />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 5 -0.8" />
  <feComposite operator="atop" in2="result0" />
</filter>
`;
