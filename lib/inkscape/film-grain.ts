export const filmGrain = `
<filter id="film-grain" height="200%" width="200%" x="-50%" y="-50%" data-name="Film Grain" data-category="Image Effects" data-description="Adds a small scale graininess" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" numOctaves="3" baseFrequency="1" seed="0" result="result0" />
  <feColorMatrix result="result4" values="0" type="saturate" />
  <feComposite in="SourceGraphic" in2="result4" operator="arithmetic" k1="1.25" k2="0.5" k3="0.5" result="result2" />
  <feBlend result="result5" mode="normal" in="result2" in2="SourceGraphic" />
  <feComposite in="result5" in2="SourceGraphic" operator="in" result="result3" />
</filter>
`;
