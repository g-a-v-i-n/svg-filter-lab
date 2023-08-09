
// Function to serialize a tag into a string representation
export function serializeTag(tag): string {
    // Extract the attributes from the tag, following the order specified by attrOrder
    const attrs = tag.attrOrder.map((attrName) => {
        // Get the attribute object using the attribute name
        const attr = tag.attr[attrName];

        // Determine the value of the attribute: if it's marked as unset, use an empty string, otherwise serialize it
        const isUnset = attr.component.props.isUnset;
        const value = isUnset ? '' : attr.serialize(attr.component.props.value);

        // Return the attribute in the form of a string key-value pair
        return `${attr.attrName}="${value}"`;
    });

    // Return the entire tag as a string, including the tag name and all attributes
    return `<${tag.tagName} ${attrs.join(' ')} />`;
}


// Function to serialize attributes into a string representation
export const serialize = {
    string: (v) => {
        return v
    },
    number: (v) => {
        return String(v)
    },
    boolean: (v) => {
        return String(v)
    },
    array: (v) => {
        return v.join(' ')
    },
    matrix: (v) => {
        return v.map((row) => row.join(' ')).join(' ')
    },
    color: (v) => {
        return v
    },
};