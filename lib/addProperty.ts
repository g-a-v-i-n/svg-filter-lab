export function addProperty(property, value) {
    return typeof value !== "undefined" ? `${value}="${property}"` : ""
}
