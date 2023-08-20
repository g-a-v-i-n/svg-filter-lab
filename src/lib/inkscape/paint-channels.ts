export const paintChannels = `
<filter id="paint-channels" height="200%" width="200%" x="-50%" y="-50%" data-name="Paint Channels" data-category="Color" data-description="Colorize separately the three color channels" color-interpolation-filters="sRGB">
  <feColorMatrix type="saturate" values="0" result="result3" />
  <feColorMatrix in="SourceGraphic" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.5 -0.5 0 0 " result="colormatrix" />
  <feFlood flood-color="rgb(68,0,134)" result="result1" flood-opacity="1" />
  <feComposite in2="colormatrix" operator="in" result="result2" />
  <feComposite in2="colormatrix" result="result12" operator="arithmetic" k2="1" k3="-0.5" />
  <feBlend in2="result3" mode="normal" in="result12" result="result6" />
  <feColorMatrix result="colormatrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.5 1 -0.5 0 0 " in="SourceGraphic" />
  <feFlood flood-color="rgb(254,63,0)" result="result4" flood-opacity="1" />
  <feComposite in2="colormatrix" operator="in" result="result5" />
  <feComposite in2="colormatrix" result="result13" operator="arithmetic" k2="1" k3="-0.5" />
  <feBlend in2="result6" in="result13" mode="normal" result="result9" />
  <feColorMatrix in="SourceGraphic" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.5 -0.5 1 0 0 " result="colormatrix" />
  <feFlood flood-color="rgb(255,204,0)" result="result7" flood-opacity="1" />
  <feComposite in2="colormatrix" operator="in" result="result8" />
  <feComposite in2="colormatrix" result="result14" operator="arithmetic" k2="1" k3="-0.5" />
  <feBlend in2="result9" mode="normal" in="result14" result="result10" />
  <feComposite in2="SourceGraphic" operator="in" result="result11" in="result10" />
</filter>
`
