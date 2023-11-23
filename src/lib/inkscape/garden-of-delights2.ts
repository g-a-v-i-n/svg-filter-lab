export const gardenOfDelights = /*svg*/`
<filter id="garden-of-delights" height="200%" width="200%" x="-50%" y="-50%" data-name="Garden of Delights" data-category="Overlays" data-description="Phantasmagorical turbulent wisps, like Hieronymus Bosch&apos;s Garden of Delights" color-interpolation-filters="sRGB">
  <feTurbulence result="result1" baseFrequency="0.005 0.01" numOctaves="8" type="fractalNoise" seed="20" />
  <feColorMatrix result="result3" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1.2 -0.4 " />
  <feConvolveMatrix order="3 3" kernelMatrix="3 0 0 0 2 0 0 0 -1 " targetX="1" targetY="1" divisor="2" result="result8" />
  <feComposite result="fbSourceGraphic" in2="SourceGraphic" operator="atop" in="result8" />
  <feTurbulence baseFrequency="0.027 0.025" numOctaves="7" type="turbulence" seed="20" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 4.7 -2 " result="result5" />
  <feComposite in2="result5" operator="in" in="fbSourceGraphic" result="result6" />
  <feDisplacementMap in2="result5" result="result4" scale="48" yChannelSelector="A" xChannelSelector="R" in="result6" />
  <feFlood flood-color="rgb(222,217,217)" flood-opacity="1" />
  <feComposite in2="result4" operator="in" result="result2" />
  <feComposite in2="fbSourceGraphic" operator="atop" in="result2" result="result91" />
  <feBlend mode="darken" in2="result91" />
</filter>
`

const out = /*svg*/ `
<filter x="-50%" y="-50%" width="200%" height="200%" id="filter-blend-Ap8tl0bD"><feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="8" seed="20" stitchTiles="noStitch" result="turbulence-Fpg8p5Nz" in="SourceGraphic"></feTurbulence>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1.2 -0.4" result="colorMatrix-wX0LLU0D" in="turbulence-Fpg8p5Nz"></feColorMatrix>
<feConvolveMatrix kernelMatrix="3 0 0 0 2 0 0 0 -1 " order="3" divisor="2" bias="0" targetX="1" targetY="1" edgeMode="duplicate" kernelUnitLength="3" result="convolveMatrix-6WN8rCvP" in="colorMatrix-wX0LLU0D"></feConvolveMatrix>
<feComposite in2="composite-duKKKxAd" operator="atop" result="composite-duKKKxAd" in="convolveMatrix-6WN8rCvP"></feComposite>
<feTurbulence type="turbulence" baseFrequency="0.027" numOctaves="7" seed="20" stitchTiles="noStitch" result="turbulence-ZaXHBd82" in="SourceGraphic"></feTurbulence>
<feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 4.7 -2" result="colorMatrix-iwzI3QSU" in="turbulence-ZaXHBd82"></feColorMatrix>
<feComposite in2="colorMatrix-iwzI3QSU" operator="in" result="composite-fMp8BJPs" in="composite-duKKKxAd"></feComposite>
<feDisplacementMap in2="colorMatrix-iwzI3QSU" scale="48" xChannelSelector="R" yChannelSelector="A" result="displacementMap-hot3IFrx" in="composite-fMp8BJPs"></feDisplacementMap>
<feFlood flood-color="rgb(222, 217, 217)" flood-opacity="1" result="flood-tDcHDuJT" in="SourceGraphic"></feFlood>
<feComposite in2="displacementMap-hot3IFrx" operator="in" result="composite-VDHK5mcA" in="flood-tDcHDuJT"></feComposite>
<feComposite in2="composite-duKKKxAd" operator="atop" result="composite-Xg7q0vEQ" in="composite-VDHK5mcA"></feComposite>
<feBlend in2="composite-Xg7q0vEQ" mode="darken" result="blend-Ap8tl0bD" in="flood-tDcHDuJT"></feBlend></filter>
`;