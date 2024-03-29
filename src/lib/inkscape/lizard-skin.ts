export const lizardSkin = `
<filter id="lizard-skin" height="200%" width="200%" x="-50%" y="-50%" data-name="Lizard Skin" data-category="Materials" data-description="Stylized reptile skin texture" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.5" in="SourceGraphic" result="result0" />
  <feTurbulence result="result1" numOctaves="1" seed="488" baseFrequency="0.095" type="turbulence" />
  <feComposite in="result0" in2="result1" operator="in" result="result2" />
  <feComposite operator="arithmetic" in="result4" in2="result2" k3="1" k1="3" result="result91" />
  <feBlend mode="multiply" result="fbSourceGraphic" in2="result91" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 5 0" />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="3" />
  <feOffset result="result3" in="result0" dy="2" dx="2" />
  <feSpecularLighting specularExponent="30" specularConstant="1.1" surfaceScale="2" lighting-color="rgb(111,236,253)" result="result1" in="result0">
    <fePointLight z="20000" y="-10000" x="-5000" />
  </feSpecularLighting>
  <feComposite k2="-1" operator="in" result="result2" in="result1" in2="fbSourceGraphicAlpha" />
  <feComposite k3="1" k2="3" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feBlend mode="multiply" in2="result4" />
</filter>
`;

// [
//   {
//    "name": "feGaussianBlur",
//    "attributes": {
//     "stdDeviation": "0.5",
//     "result": "result0",
//     "in1": "SourceGraphic"
//    }
//   },
//   {
//    "name": "feTurbulence",
//    "attributes": {
//     "result": "result1",
//     "numOctaves": "1",
//     "seed": "488",
//     "baseFrequency": "0.095",
//     "type": "turbulence",
//     "in1": "result0",
//     "in2": "result0"
//    }
//   },
//   {
//    "name": "feComposite",
//    "attributes": {
//     "in2": "result1",
//     "operator": "in",
//     "result": "result2",
//     "in1": "result0"
//    }
//   },
//   {
//    "name": "feComposite",
//    "attributes": {
//     "operator": "arithmetic",
//     "in2": "result2",
//     "k3": "1",
//     "k1": "3",
//     "result": "result91",
//     "in1": "result4"
//    }
//   },
//   {
//    "name": "feBlend",
//    "attributes": {
//     "mode": "multiply",
//     "result": "fbSourceGraphic",
//     "in2": "result91",
//     "in1": "result91"
//    }
//   },
//   {
//    "name": "feColorMatrix",
//    "attributes": {
//     "result": "fbSourceGraphicAlpha",
//     "values": "0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 5 0",
//     "in1": "fbSourceGraphic"
//    }
//   },
//   {
//    "name": "feGaussianBlur",
//    "attributes": {
//     "result": "result0",
//     "stdDeviation": "3",
//     "in1": "fbSourceGraphicAlpha"
//    }
//   },
//   {
//    "name": "feOffset",
//    "attributes": {
//     "result": "result3",
//     "dy": "2",
//     "dx": "2",
//     "in1": "n-WrCegtAH"
//    }
//   },
//   {
//    "name": "feSpecularLighting",
//    "attributes": {
//     "specularExponent": "30",
//     "specularConstant": "1.1",
//     "surfaceScale": "2",
//     "lighting-color": "rgb(111,236,253)",
//     "result": "result1",
//     "in1": "n-WrCegtAH"
//    }
//   },
//   {
//    "name": "feComposite",
//    "attributes": {
//     "k2": "-1",
//     "operator": "in",
//     "result": "result2",
//     "in2": "fbSourceGraphicAlpha",
//     "in1": "n-MDtwVPAA"
//    }
//   },
//   {
//    "name": "feComposite",
//    "attributes": {
//     "k3": "1",
//     "k2": "3",
//     "operator": "arithmetic",
//     "result": "result1",
//     "in2": "n-Rf0JAoLy",
//     "in1": "fbSourceGraphic"
//    }
//   },
//   {
//    "name": "feBlend",
//    "attributes": {
//     "mode": "multiply",
//     "in2": "result4",
//     "in1": "result1",
//     "result": "result897"
//    }
//   }
//  ]