export const lightContour = `
<filter id="light-contour" height="200%" width="200%" x="-50%" y="-50%" data-name="Light Contour" data-category="Image Paint and Draw" data-description="Uses vertical specular light to draw lines" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="result3" />
  <feComponentTransfer result="result1" in="result3">
    <feFuncR type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" />
    <feFuncG type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" />
    <feFuncB type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" />
  </feComponentTransfer>
  <feGaussianBlur result="result5" stdDeviation="0.01" />
  <feBlend in2="result5" result="result6" mode="lighten" in="result5" />
  <feColorMatrix in="result6" type="luminanceToAlpha" result="result2" />
  <feSpecularLighting surfaceScale="5" result="result9" specularExponent="20" in="result2" specularConstant="1">
    <feDistantLight azimuth="180" elevation="90" />
  </feSpecularLighting>
  <feComposite in2="result6" operator="arithmetic" in="result9" k1="0.4" k3="0.7" result="result3" />
  <feBlend in2="result1" in="result3" mode="normal" result="result8" />
  <feComposite in2="SourceGraphic" in="result8" operator="in" result="result7" />
</filter>
`;
