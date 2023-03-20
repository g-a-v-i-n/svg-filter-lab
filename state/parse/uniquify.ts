import { uuid } from "../../lib/uuid"

export function uniquify(tags) {
    const aliases = {
        // oldId: 'newId'
    }

    const newTags =  tags.map(tag => {
        const in1 = tag.attributes.in1
        const in2 = tag.attributes.in2
        const result = tag.attributes.result

        if (result) {
            if (result in aliases) {
                // If this attribute has been seen before, assign the the id an alias in
                // both aliases and replace it with the new value in the tag
                const newId = uuid('n')
                tag.attributes.result = newId
                aliases[result] = newId
            } else {
                // If its a new id, add it to aliases but don't change it.
                // aliases[result] = result

                const newId = uuid('n')
                tag.attributes.result = newId
                aliases[result] = newId
            }
        }

        if (in1) {
            if (in1 in aliases) {
                // if this id has an alias, use the alias instead of the existing ID
                tag.attributes.in1 = aliases[in1]
            } else {
                // if this id has no result id at all, it may be an error, or it could be a reserved id.
                console.log(in1)
            }
        }

        if (in2) {
            if (in2 in aliases) {
                // if this id has an alias, use the alias instead of the existing ID
                tag.attributes.in2 = aliases[in2]
            } else {
                // if this id has no result id at all, it may be an error, or it could be a reserved id.
                console.log(in2)
            }
        }

        return tag
    })
    // console.log('uniqify', newTags)

    return newTags
}