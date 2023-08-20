export const tartan = `
<filter id="tartan" height="200%" width="200%" x="-50%" y="-50%" data-name="Tartan" data-category="Overlays" data-description="Checkered tartan pattern" color-interpolation-filters="sRGB">
  <feTurbulence type="turbulence" result="result0" seed="5" numOctaves="1" baseFrequency="0 0.184" />
  <feTurbulence result="result3" type="turbulence" seed="57" numOctaves="1" baseFrequency="0.285 0" />
  <feComposite result="result1" operator="over" in2="result0" />
  <feMerge result="result2">
    <feMergeNode in="result1" />
    <feMergeNode in="result0" />
  </feMerge>
  <feComposite result="result4" in="SourceGraphic" operator="in" in2="result2" id="feComposite2438" />
</filter>
`
