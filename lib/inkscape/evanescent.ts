export const evanescent = `
<filter id="evanescent" height="200%" width="200%" x="-50%" y="-50%" data-name="Evanescent" data-category="Blurs" data-description="Blur the contents of objects, preserving the outline and adding progressive transparency at edges" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result6" stdDeviation="3" in="SourceGraphic" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result7" in="SourceGraphic" />
  <feComposite operator="in" in="result6" in2="result7" />
</filter>
`;
