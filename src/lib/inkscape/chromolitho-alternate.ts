export const chromolithoAlternate = `
<filter id="chromolitho-alternate" height="200%" width="200%" x="-50%" y="-50%" data-name="Chromolitho Alternate" data-category="Image Paint and Draw" data-description="Old chromolithographic effect" color-interpolation-filters="sRGB">
  <feConvolveMatrix result="convolve" order="3 3" kernelMatrix="0 250 0 250 -1025 250 0 250 0" in="SourceGraphic" divisor="0" bias="0" />
  <feBlend in2="SourceGraphic" result="blend" mode="multiply" in="convolve" />
  <feTurbulence result="turbulence" seed="0" numOctaves="3" baseFrequency="1 1" type="fractalNoise" />
  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result3" type="matrix" />
  <feColorMatrix type="saturate" result="result7" values="1" />
  <feComposite in2="blend" result="composite1" operator="arithmetic" k3="0.1" k2="1" k1="3.5" in="result7" />
  <feBlend in2="blend" mode="normal" result="result6" />
  <feColorMatrix values="1" result="result2" type="saturate" in="result6" />
  <feComponentTransfer result="fbSourceGraphic">
    <feFuncR type="discrete" tableValues="0 1 1" />
    <feFuncG type="discrete" tableValues="0 1 1" />
    <feFuncB type="discrete" tableValues="0 1 1" />
  </feComponentTransfer>
  <feComposite in2="SourceGraphic" in="fbSourceGraphic" result="composite" k2="1" operator="in" />
</filter>
`
