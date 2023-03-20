export const apparition = `
<filter id="apparition" height="200%" width="200%" x="-50%" y="-50%" data-name="Apparition" data-category="Blurs" data-description="Edges are partly feathered out" color-interpolation-filters="sRGB">
  <feMorphology radius="4" in="SourceGraphic" result="result0" />
  <feGaussianBlur in="result0" stdDeviation="8" result="result91" />
  <feComposite operator="in" in="SourceGraphic" in2="result91" />
</filter>
`
