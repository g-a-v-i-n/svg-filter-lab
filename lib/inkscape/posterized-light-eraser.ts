export const posterizedLightEraser = `
<filter id="posterized-light-eraser" height="200%" width="200%" x="-50%" y="-50%" data-name="Posterized Light Eraser" data-category="Fill and Transparency" data-description="Create a semi transparent posterized image" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.01" result="result1" in="SourceGraphic" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 " result="fbSourceGraphic" in="result1" />
  <feColorMatrix type="saturate" result="result8" values="1" />
  <feComponentTransfer in="result8" result="result7">
    <feFuncR tableValues="0 0.2 0.4 0.6 0.8 1 1" type="discrete" />
    <feFuncG tableValues="0 0.2 0.4 0.6 0.8 1 1" type="discrete" />
    <feFuncB tableValues="0 0.2 0.4 0.6 0.8 1 1" type="discrete" />
  </feComponentTransfer>
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -0.21 -0.72 -0.07 1 0 " result="result2" in="result7" />
  <feComposite in2="SourceGraphic" operator="in" result="result9" in="result2" />
</filter>
`;
