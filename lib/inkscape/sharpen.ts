export const sharpen = `
<filter id="sharpen" height="200%" width="200%" x="-50%" y="-50%" data-name="Sharpen" data-category="Image Effects" data-description="Sharpen edges and boundaries within the object, force=0.15" color-interpolation-filters="sRGB">
  <feConvolveMatrix order="3 3" kernelMatrix="0 -0.15 0 -0.15 1.6 -0.15 0 -0.15 0" divisor="1" in="SourceGraphic" targetX="1" targetY="1" />
</filter>
`;
