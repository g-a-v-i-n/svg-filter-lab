export default [
  {
    key: "normal",
    label: "Normal",
    category: "Default",
  },
  {
    key: "darken",
    label: "Darken",
    category: "Darkener",
  },
  {
    key: "multiply",
    label: "Multiply",
    category: "Darkener",
  },
  {
    key: "color-burn",
    label: "Color Burn",
    category: "Darkener",
  },
  {
    key: "lighten",
    label: "Lighten",
    category: "Lightener",
  },
  {
    key: "screen",
    label: "Screen",
    category: "Lightener",
  },
  {
    key: "color-dodge",
    label: "Color Dodge",
    category: "Lightener",
  },
  {
    key: "overlay",
    label: "Overlay",
    category: "Contrast",
  },
  {
    key: "hard-light",
    label: "Hard Light",
    category: "Contrast",
  },
  {
    key: "soft-light",
    label: "Soft Light",
    category: "Contrast",
  },
  {
    key: "difference",
    label: "Difference",
    category: "Inversion",
  },
  {
    key: "exclusion",
    label: "Exclusion",
    category: "Inversion",
  },
  {
    key: "hue",
    label: "Hue",
    category: "Component",
  },
  {
    key: "saturation",
    label: "Saturation",
    category: "Component",
  },
  {
    key: "color",
    label: "Color",
    category: "Component",
  },
  {
    key: "luminosity",
    label: "Luminosity",
    category: "Component",
  },
];

export type BlendMode = {
  key: string;
  label: string;
  category: string;
};
