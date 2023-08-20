export const sharpenMore = `
<filter id="sharpen-more" height="200%" width="200%" x="-50%" y="-50%" data-name="Sharpen More" data-category="Image Effects" data-description="Sharpen edges and boundaries within the object, force=0.3" color-interpolation-filters="sRGB">
  <feConvolveMatrix targetY="1" targetX="1" in="SourceGraphic" divisor="1" kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0" order="3 3" result="result1" />
  <feBlend in2="SourceGraphic" mode="normal" result="result2" />
</filter>
`
