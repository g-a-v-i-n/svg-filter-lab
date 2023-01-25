import { Node } from "reactflow";
import { updateNodeProp } from "../lib/updateNodeProp";

export const blendModes = [
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

export const blendModesByCategory = [
  {
    "category": "Default",
    "items": [
      {
        "key": "normal",
        "label": "Normal"
      }
    ]
  },
  {
    "category": "Darkener",
    "items": [
      {
        "key": "darken",
        "label": "Darken"
      },
      {
        "key": "multiply",
        "label": "Multiply"
      },
      {
        "key": "color-burn",
        "label": "Color Burn"
      }
    ]
  },
  {
    "category": "Lightener",
    "items": [
      {
        "key": "lighten",
        "label": "Lighten"
      },
      {
        "key": "screen",
        "label": "Screen"
      },
      {
        "key": "color-dodge",
        "label": "Color Dodge"
      }
    ]
  },
  {
    "category": "Contrast",
    "items": [
      {
        "key": "overlay",
        "label": "Overlay"
      },
      {
        "key": "hard-light",
        "label": "Hard Light"
      },
      {
        "key": "soft-light",
        "label": "Soft Light"
      }
    ]
  },
  {
    "category": "Inversion",
    "items": [
      {
        "key": "difference",
        "label": "Difference"
      },
      {
        "key": "exclusion",
        "label": "Exclusion"
      }
    ]
  },
  {
    "category": "Component",
    "items": [
      {
        "key": "hue",
        "label": "Hue"
      },
      {
        "key": "saturation",
        "label": "Saturation"
      },
      {
        "key": "color",
        "label": "Color"
      },
      {
        "key": "luminosity",
        "label": "Luminosity"
      }
    ]
  }
]

export type BlendModes = typeof blendModes;

export type BlendMode = BlendModes[number];

export type BlendNodeData = {
  mode: BlendMode;
};

export type BlendNodeState = Node<BlendNodeData>;

export type BlendNodeSlice = {
  updateMode: (nodeId: string, type: BlendMode) => void;
};

export const createBlendNodeSlice = (set) => ({
  blendNode: {
    updateMode: (nodeId: string, newMode: BlendMode) => updateNodeProp(set, nodeId, "mode", newMode),
  }
});

export const defaultBlendNodeData: BlendNodeData = {
  mode: blendModes[0],
};


