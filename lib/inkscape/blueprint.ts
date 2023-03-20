export const blueprint = `
<filter id="blueprint" height="200%" width="200%" x="-50%" y="-50%" data-name="Blueprint" data-category="Image Paint and Draw" data-description="Detect color edges and retrace them in blue" color-interpolation-filters="sRGB">
  <feConvolveMatrix order="3 3" kernelMatrix="1 1 1 1 -8 1 1 1 1" in="SourceGraphic" divisor="1" targetX="1" targetY="1" preserveAlpha="true" result="result0" bias="0" />
  <feColorMatrix result="result3" values="-0.15 -0.3 -0.05 0 1 -0.15 -0.3 -0.05 0 1 0 0 0 0 1 0 0 0 1 0" />
</filter>
`
