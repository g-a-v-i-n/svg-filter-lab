export const clouds = `
<filter id="clouds" height="200%" width="200%" x="-50%" y="-50%" data-name="Clouds" data-category="Overlays" data-description="Airy, fluffy, sparse white clouds" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="3" baseFrequency="0.040 0.107" type="fractalNoise" />
  <feColorMatrix result="result0" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -2.7" />
  <feFlood flood-opacity="1" flood-color="rgb(255,255,255)" />
  <feComposite operator="in" in2="result0" />
  <feComposite operator="atop" in2="SourceGraphic" />
</filter>
`
