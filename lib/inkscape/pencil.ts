export const pencil = `
<filter id="pencil" height="200%" width="200%" x="-50%" y="-50%" data-name="Pencil" data-category="Image Paint and Draw" data-description="Detect color edges and retrace them in grayscale" color-interpolation-filters="sRGB">
  <feConvolveMatrix bias="0" result="result0" preserveAlpha="true" targetY="1" targetX="1" divisor="1" in="SourceGraphic" kernelMatrix="1 1 1 1 -8 1 1 1 1" order="3 3" />
  <feColorMatrix values="-0.15 -0.3 -0.05 0 1 -0.15 -0.3 -0.05 0 1 -0.15 -0.3 -0.05 0 1 0 0 0 1 0" result="result3" />
</filter>
`;
