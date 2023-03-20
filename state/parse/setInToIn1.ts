export function setInToIn1(node) {
  const in1 = node.attributes.in
  delete node.attributes.in
  node.attributes.in1 = in1
  return node
}
