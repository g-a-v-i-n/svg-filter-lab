export const softFocusLens = `
<filter id="soft-focus-lens" height="200%" width="200%" x="-50%" y="-50%" data-name="Soft Focus Lens" data-category="Image Effects" data-description="Glowing image content without blurring it" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result3" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 " result="result7" />
  <feComposite operator="in" in2="SourceGraphic" result="result9" />
  <feComposite in2="result7" operator="arithmetic" in="result9" k1="0.5" k3="0.5" result="result1" />
  <feBlend in2="result1" result="result5" mode="screen" in="SourceGraphic" />
  <feBlend in2="result5" mode="darken" in="result5" result="result6" />
  <feComposite in2="SourceGraphic" operator="in" result="result8" />
</filter>
`;
