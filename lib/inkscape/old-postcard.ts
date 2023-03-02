export const oldPostcard = `
<filter id="old-postcard" height="200%" width="200%" x="-50%" y="-50%" data-name="Old Postcard" data-category="Image Paint and Draw" data-description="Slightly posterize and draw edges like on old printed postcards" color-interpolation-filters="sRGB">
  <feFlood flood-color="rgb(255,204,0)" flood-opacity="0.1" result="result1" />
  <feBlend in2="SourceGraphic" mode="darken" result="result6" />
  <feComposite in2="result6" result="result8" operator="arithmetic" k2="1" />
  <feColorMatrix result="result5" values="0" type="hueRotate" in="result8" />
  <feConvolveMatrix result="result1" order="3 3" kernelMatrix="0 -1 0 -1 5.05 -1 0 -1 0 " divisor="1" in="result5" targetX="1" targetY="1" />
  <feGaussianBlur result="result2" stdDeviation="2" in="result1" />
  <feComponentTransfer result="result4" in="result2">
    <feFuncR type="table" tableValues="0 0 0.2 0.2 0.4 0.4 0.6 0.6 0.8 0.8 1 1 1" />
    <feFuncG type="table" tableValues="0 0 0.2 0.2 0.4 0.4 0.6 0.6 0.8 0.8 1 1 1" />
    <feFuncB type="table" tableValues="0 0 0.2 0.2 0.4 0.4 0.6 0.6 0.8 0.8 1 1 1" />
  </feComponentTransfer>
  <feBlend in2="result1" result="result3" mode="darken" in="result4" />
  <feColorMatrix type="saturate" values="1" result="result7" />
  <feComposite in2="SourceGraphic" operator="in" result="fbSourceGraphic" />
</filter>
`;
