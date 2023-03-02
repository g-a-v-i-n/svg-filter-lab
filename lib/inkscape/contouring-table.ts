export const contouringTable = `
<filter id="contouring-table" height="200%" width="200%" x="-50%" y="-50%" data-name="Contouring Table" data-category="Morphology" data-description="Blurred multiple contours for objects" color-interpolation-filters="sRGB">
  <feFlood result="result2" flood-color="rgb(255,255,255)" />
  <feGaussianBlur result="result1" in="SourceAlpha" stdDeviation="17" />
  <feComposite in2="result1" result="result17" operator="in" />
  <feComposite in2="result2" in="result17" result="fbSourceGraphic" operator="over" />
  <feComponentTransfer in="fbSourceGraphic" result="result9">
    <feFuncR type="table" tableValues="0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1" />
    <feFuncG type="table" tableValues="0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1" />
    <feFuncB type="table" tableValues="0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1" />
  </feComponentTransfer>
  <feColorMatrix result="result6" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -0.21 -0.72 -0.07 1 0 " in="result9" />
  <feFlood flood-color="rgb(128,128,128)" result="result8" />
  <feComposite in2="result6" result="result12" operator="in" />
</filter>
`;
