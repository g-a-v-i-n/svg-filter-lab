import { uuid } from "../../lib/uuid"
import { allowedInputs } from "./allowedInputs"

export function infill(tags) {

    let lastUnsetResult = "SourceGraphic"

   const newTags = tags.map(tag => {

        const in1 = tag.attributes.in1
        const in2 = tag.attributes.in2
        const result = tag.attributes.result
        
        if (in1) {
            // noop
        } else {
            if (allowedInputs[tag.name].includes('in1')) {
                tag.attributes.in1 = lastUnsetResult
            }
        }
        
        if (in2) {
            // noop
        } else {
            if (allowedInputs[tag.name].includes('in2')) {

            tag.attributes.in2 = lastUnsetResult
            }
        }

        if (result) {
            // noop
        } else {
            const newId = uuid('n')
            tag.attributes.result = newId
            lastUnsetResult = newId
        }

        return tag
   })
//    console.log('infill', newTags)
   return newTags
}