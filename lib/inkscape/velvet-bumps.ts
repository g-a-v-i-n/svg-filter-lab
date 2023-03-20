export const velvetBumps = `
<filter id="velvet-bumps" height="200%" width="200%" x="-50%" y="-50%" data-name="Velvet Bumps" data-category="Bumps" data-description="Gives Smooth Bumps velvet like" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" result="result3" />
  <feBlend in2="result3" result="result5" mode="screen" in="SourceGraphic" />
  <feGaussianBlur stdDeviation="1" result="result7" />
  <feConvolveMatrix order="3 3" kernelMatrix="2 0 0 1 1 -1 0 0 -2 " targetX="1" targetY="1" result="result8" />
  <feBlend mode="darken" in="result7" result="result6" in2="result8" />
</filter>
`
