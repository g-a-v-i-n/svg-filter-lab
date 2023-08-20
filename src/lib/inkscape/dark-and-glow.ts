export const darkAndGlow = `
<filter id="dark-and-glow" height="200%" width="200%" x="-50%" y="-50%" data-name="Dark and Glow" data-category="Shadows and Glows" data-description="Darkens the edge with an inner blur and adds a flexible glow" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result6" id="feGaussianBlur2933" />
  <feComposite result="result8" in="SourceGraphic" operator="atop" in2="result6" />
  <feComposite result="result9" operator="over" in2="SourceAlpha" in="result8" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result10" />
  <feBlend in="result10" mode="normal" in2="result6" />
</filter>
`
