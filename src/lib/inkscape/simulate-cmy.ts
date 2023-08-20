export const simulateCmy = `
<filter id="simulate-cmy" height="200%" width="200%" x="-50%" y="-50%" data-name="Simulate CMY" data-category="Color" data-description="Render Cyan, Magenta and Yellow channels with a colorizable background" color-interpolation-filters="sRGB">
  <feFlood flood-color="rgb(255,255,255)" result="result6" flood-opacity="0" />
  <feColorMatrix result="result3" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 -1 0 0 1 0 " in="SourceGraphic" />
  <feBlend mode="multiply" in2="result6" result="result7" in="result3" />
  <feColorMatrix result="result2" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 -1 0 1 0 " />
  <feBlend result="result4" in="result2" in2="result7" mode="multiply" />
  <feColorMatrix result="result1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 -1 1 0 " in="SourceGraphic" />
  <feBlend in2="result4" mode="multiply" result="result5" in="result1" />
</filter>
`
