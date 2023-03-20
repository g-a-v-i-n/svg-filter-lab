export const contouringDiscrete = `
<filter id="contouring-discrete" height="200%" width="200%" x="-50%" y="-50%" data-name="Contouring Discrete" data-category="Morphology" data-description="Sharp multiple contour for objects" color-interpolation-filters="sRGB">
  <feFlood flood-color="rgb(255,255,255)" result="result2" />
  <feGaussianBlur stdDeviation="14" in="SourceAlpha" result="result1" />
  <feComposite in2="result1" operator="in" result="result17" />
  <feComposite in2="result2" operator="over" result="fbSourceGraphic" in="result17" />
  <feComponentTransfer result="result9" in="fbSourceGraphic">
    <feFuncR tableValues="0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1" type="discrete" />
    <feFuncG tableValues="0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1" type="discrete" />
    <feFuncB tableValues="0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1" type="discrete" />
  </feComponentTransfer>
  <feColorMatrix in="result9" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -0.21 -0.72 -0.07 1 0 " result="result6" />
  <feFlood result="result8" flood-color="rgb(128,128,128)" />
  <feComposite in2="result6" operator="in" result="result12" />
</filter>
`
