export const jigsawPiece = `
<filter id="jigsaw-piece" height="200%" width="200%" x="-50%" y="-50%" data-name="Jigsaw Piece" data-category="Bevels" data-description="Low, sharp bevel" color-interpolation-filters="sRGB">
  <feSpecularLighting in="SourceAlpha" surfaceScale="1" specularConstant="2" specularExponent="18.5">
    <feDistantLight elevation="30" azimuth="225" />
  </feSpecularLighting>
  <feComposite result="result0" operator="atop" in2="SourceGraphic" />
  <feMorphology radius="2" result="result1" in="SourceAlpha" operator="dilate" />
  <feComposite in="result0" in2="result1" />
</filter>
`;
