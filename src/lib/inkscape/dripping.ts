export const dripping = `
<filter id="dripping" height="200%" width="200%" x="-50%" y="-50%" data-name="Dripping" data-category="Protrusions" data-description="Random paint streaks downwards" color-interpolation-filters="sRGB">
  <feConvolveMatrix order="3 3" kernelMatrix="0 -1 0 0 -1 0 0 2 0" result="result1" divisor="6.03" />
  <feTurbulence numOctaves="1" baseFrequency="0.078 0.010" result="result0" />
  <feColorMatrix result="result2" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -3.5" />
  <feComposite in2="result2" in="result1" operator="in" />
  <feMorphology operator="dilate" radius="1 30" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0" result="result3" />
  <feOffset dx="0" dy="1.4" result="result4" />
  <feTurbulence numOctaves="2" baseFrequency="0.032 0.025" result="result8" />
  <feColorMatrix values="0 0 0 0 0.52 0 -0.4 0 0 0.45 0 0 1 0 0 0 0 0 1 0" result="result91" />
  <feDisplacementMap in="result4" xChannelSelector="R" yChannelSelector="G" scale="100" result="result9" in2="result91" />
  <feComposite in="SourceGraphic" in2="result9" />
</filter>
`
