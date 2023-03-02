export const fluorescence = `
<filter id="fluorescence" height="200%" width="200%" x="-50%" y="-50%" data-name="Fluorescence" data-category="Color" data-description="Oversaturate colors which can be fluorescent in real world" color-interpolation-filters="sRGB">
  <feColorMatrix type="hueRotate" values="0" />
  <feColorMatrix type="saturate" values="1" />
  <feColorMatrix type="matrix" values="2 -1 0 0 0 0 2 -1 0 0 -1 0 2 0 0 0 0 0 1 0 " />
</filter>
`;
