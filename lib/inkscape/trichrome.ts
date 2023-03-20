export const trichrome = `
<filter id="trichrome" height="200%" width="200%" x="-50%" y="-50%" data-name="Trichrome" data-category="Color" data-description="Like Duochrome but with three colors" color-interpolation-filters="sRGB">
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.21 -0.72 -0.07 1 0 " result="result1" />
  <feColorMatrix result="result3" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2 -1 " />
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0.72 0.07 0 0 " in="SourceGraphic" result="result2" />
  <feColorMatrix result="result9" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.5 -0.5 " />
  <feMerge result="result11">
    <feMergeNode in="result3" />
    <feMergeNode in="result9" />
  </feMerge>
  <feFlood flood-opacity="1" flood-color="rgb(186,22,91)" result="result10" />
  <feComposite in2="result11" result="result12" operator="out" />
  <feFlood flood-opacity="1" result="result13" flood-color="rgb(1,171,171)" />
  <feComposite in2="result3" result="result14" operator="in" />
  <feComposite in2="result12" result="result17" k3="1" k2="1" operator="arithmetic" />
  <feFlood flood-opacity="1" result="result15" flood-color="rgb(255,255,0)" />
  <feComposite in2="result9" result="result16" operator="in" />
  <feComposite in2="result17" result="result18" k3="1" k2="1" operator="arithmetic" />
  <feComposite in2="SourceGraphic" operator="in" />
</filter>
`
