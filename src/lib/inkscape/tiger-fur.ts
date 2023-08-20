export const tigerFur = `
<filter id="tiger-fur" height="200%" width="200%" x="-50%" y="-50%" data-name="Tiger Fur" data-category="Overlays" data-description="Tiger fur pattern with folds and bevel around the edges" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" result="result0" seed="57" numOctaves="2" baseFrequency="0.1 0.015" />
  <feComposite result="result1" operator="over" in2="result0" in="result0" />
  <feComposite result="fbSourceGraphic" in="SourceGraphic" operator="arithmetic" in2="result1" k1="1" />
  <feGaussianBlur stdDeviation="10" result="result8" in="fbSourceGraphic" />
  <feComposite in2="result8" result="result6" operator="xor" in="result8" />
  <feDisplacementMap xChannelSelector="A" yChannelSelector="A" scale="100" result="result4" in="result1" in2="result6" />
  <feComposite in2="result4" result="result2" operator="arithmetic" k1="1" in="SourceGraphic" />
  <feComposite operator="out" in="SourceGraphic" in2="result2" />
</filter>
`
