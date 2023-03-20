import { parse as parseBlend} from '../nodes/blend'
import { parse as parseColorMatrix} from '../nodes/colorMatrix'
import { parse as parseComponentTransfer} from '../nodes/componentTransfer'
import { parse as parseComposite} from '../nodes/composite'
import { parse as parseConvolveMatrix} from '../nodes/convolveMatrix'
import { parse as parseGaussianBlur} from '../nodes/gaussianBlur'
import { parse as parseOffset} from '../nodes/offset'
import { parse as parseSpecularLighting} from '../nodes/specularLighting'
import { parse as parseTurbulence} from '../nodes/turbulence'
import { parse as parseSource} from '../nodes/source'


export const parsers = {
    blend: parseBlend,
    colorMatrix: parseColorMatrix,
    componentTransfer: parseComponentTransfer,
    composite: parseComposite,
    convolveMatrix: parseConvolveMatrix,
    gaussianBlur: parseGaussianBlur,
    offset: parseOffset,
    specularLighting: parseSpecularLighting,
    turbulence: parseTurbulence,
    source: parseSource,
}