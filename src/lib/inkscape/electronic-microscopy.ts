export const electronicMicroscopy = `
<filter id="electronic-microscopy" height="200%" width="200%" x="-50%" y="-50%" data-name="Electronic Microscopy" data-category="Bevels" data-description="Bevel, crude light, discoloration and glow like in electronic microscopy" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.5" result="result6" />
  <feComposite operator="in" in="result6" in2="result6" result="result91" />
  <feBlend mode="multiply" in="result6" result="result2" in2="result91" />
  <feGaussianBlur stdDeviation="7" result="result3" in="result2" />
  <feComposite in2="result2" result="result92" />
  <feComposite operator="in" in="result3" result="result5" in2="result92" />
  <feGaussianBlur stdDeviation="1" in="result5" />
  <feSpecularLighting surfaceScale="2" specularConstant="1.5" specularExponent="100">
    <fePointLight x="-5000" y="-5000" z="20000" />
  </feSpecularLighting>
  <feComposite operator="arithmetic" k1="1" in2="result5" result="result93" />
  <feComposite operator="arithmetic" k2="0.1" k3="1" in="result5" in2="result93" result="result94" />
  <feBlend mode="multiply" in2="result94" />
</filter>
`
