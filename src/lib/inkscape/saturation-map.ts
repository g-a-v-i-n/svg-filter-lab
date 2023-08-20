export const saturationMap = `
<filter id="saturation-map" height="200%" width="200%" x="-50%" y="-50%" data-name="Saturation Map" data-category="Fill and Transparency" data-description="Creates an approximative semi-transparent and colorizable image of the saturation levels" color-interpolation-filters="sRGB">
  <feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 " type="matrix" result="r" in="SourceGraphic" />
  <feColorMatrix values="0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 " type="matrix" result="g" in="SourceGraphic" />
  <feColorMatrix values="0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 1 " type="matrix" result="b" in="SourceGraphic" />
  <feBlend result="minrg" in2="g" in="r" mode="darken" />
  <feBlend result="p" in2="b" in="minrg" mode="darken" />
  <feBlend result="maxrg" in2="g" in="r" mode="lighten" />
  <feBlend result="q" in2="b" in="maxrg" mode="lighten" />
  <feComponentTransfer result="q2" in="q">
    <feFuncR slope="0" type="linear" />
  </feComponentTransfer>
  <feBlend result="pq" in2="q2" in="p" mode="lighten" />
  <feColorMatrix values="-1 1 0 0 0 -1 1 0 0 0 -1 1 0 0 0 0 0 0 0 1 " type="matrix" result="qminp" in="pq" />
  <feColorMatrix type="luminanceToAlpha" result="result1" in="qminp" />
  <feComposite k2="0" k3="0" k1="1" operator="arithmetic" in2="qminp" in="result1" result="result3" />
  <feComposite in="result3" operator="in" in2="SourceGraphic" result="fbSourceGraphic" />
  <feFlood flood-color="rgb(255,204,0)" result="result1" />
  <feComposite operator="in" in2="fbSourceGraphic" result="result2" />
</filter>
`
