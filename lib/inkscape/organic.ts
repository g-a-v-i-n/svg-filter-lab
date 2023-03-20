export const organic = `
<filter id="organic" height="200%" width="200%" x="-50%" y="-50%" data-name="Organic" data-category="Textures" data-description="Bulging, knotty, slick 3D surface" color-interpolation-filters="sRGB">
  <feTurbulence numOctaves="3" baseFrequency="0.037" result="result0" />
  <feSpecularLighting specularExponent="24.3" surfaceScale="2" specularConstant="1" result="result1">
    <feDistantLight elevation="45" azimuth="225" />
  </feSpecularLighting>
  <feDiffuseLighting in="result0" surfaceScale="3" diffuseConstant="1.21">
    <feDistantLight azimuth="225" elevation="42" />
  </feDiffuseLighting>
  <feBlend in2="SourceGraphic" mode="multiply" result="result91" />
  <feComposite operator="arithmetic" in="result1" k2="1" k3="1" in2="result91" />
  <feComposite in2="SourceAlpha" operator="in" result="result2" />
</filter>
`
