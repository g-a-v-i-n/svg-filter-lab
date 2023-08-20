export const softColors = `
<filter id="soft-colors" height="200%" width="200%" x="-50%" y="-50%" data-name="Soft Colors" data-category="Color" data-description="Adds a colorizable edges glow inside objects and pictures" color-interpolation-filters="sRGB">
  <feColorMatrix type="saturate" values="1" result="result91" />
  <feComposite in2="result91" result="result15" operator="arithmetic" k2="0.4" k1="0.3" k3="0.3" />
  <feGaussianBlur in="result15" result="result8" stdDeviation="5" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 " />
  <feComposite in2="SourceGraphic" operator="in" result="result13" />
  <feComposite in2="result13" k3="0.3" k1="0.3" k2="0.4" operator="arithmetic" in="result15" result="result6" />
  <feFlood flood-color="rgb(128,172,0)" flood-opacity="1" result="result10" />
  <feBlend in2="result10" result="result12" in="result6" mode="darken" />
  <feBlend in2="result6" result="result14" mode="screen" />
  <feComposite in2="SourceGraphic" in="result14" operator="in" />
</filter>
`
