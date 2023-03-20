export const chalkAndSponge = `
<filter id="chalk-and-sponge" height="200%" width="200%" x="-50%" y="-50%" data-name="Chalk and Sponge" data-category="Distort" data-description="Low turbulence gives sponge look and high turbulence chalk" color-interpolation-filters="sRGB">
  <feTurbulence baseFrequency="0.4" type="fractalNoise" seed="0" numOctaves="5" result="result1" />
  <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="result1" />
</filter>
`
