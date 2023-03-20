export const blendOpposites = `
<filter id="blend-opposites" height="200%" width="200%" x="-50%" y="-50%" data-name="Blend Opposites" data-category="Color" data-description="Blend an image with its hue opposite" color-interpolation-filters="sRGB">
  <feColorMatrix type="hueRotate" values="180" result="fbSourceGraphic" in="SourceGraphic" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -0.2125 -0.7154 -0.0721 1 0 " in="SourceGraphic" result="result1" />
  <feColorMatrix type="hueRotate" values="0" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result3" />
  <feComposite in2="result3" result="result6" operator="atop" />
  <feComposite in2="result6" operator="arithmetic" k2="0.5" k1="0.5" k3="0.5" in="result6" result="result4" />
  <feBlend in2="fbSourceGraphic" mode="normal" result="result2" in="result4" />
  <feComposite in2="result2" operator="arithmetic" k2="1" result="result5" />
  <feComposite in2="SourceGraphic" operator="in" result="result5" />
</filter>
`
