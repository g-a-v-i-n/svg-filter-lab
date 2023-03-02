export const cutoutGlow = `
<filter id="cutout-glow" height="200%" width="200%" x="-50%" y="-50%" data-name="Cutout Glow" data-category="Shadows and Glows" data-description="In and out glow with a possible offset and colorizable flood" color-interpolation-filters="sRGB">
  <feOffset dy="3" dx="3" />
  <feGaussianBlur stdDeviation="3" result="blur" />
  <feFlood flood-color="rgb(0,0,0)" flood-opacity="1" result="flood" />
  <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite" />
  <feBlend in="blur" in2="composite" mode="normal" />
</filter>
`;
