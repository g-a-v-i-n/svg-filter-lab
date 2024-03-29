// Converts a pair of vectors to an angle in rads
function angle(cx: number, cy: number, ex: number, ey: number) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  // if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

export function rubberbandPath(sourceX: number, sourceY: number, targetX: number, targetY: number) {
  // direction, 1 is right, -1 is left
  const d = targetX - sourceX > 0 ? 1 : -1
  // approximate 'radius' of the arc
  const r = (targetX - sourceX) / 5 > 16 ? 16 : (targetX - sourceX) / 5
  // horizontal offset from the edge of the node
  const o = 4 * d


  /*
  calulate the theta of the connection line with respect to offset
  o----*\  <----- theta
       | \
       |  \
       a   \
       |    \
       |  b  \----o
  */
  const theta = angle(
    sourceX + r + o, sourceY,
    targetX - r - o, targetY
  );

  // calculate the a and b segments of the triangle shown in the diagram above. mirror using the value of `d`
  const a = d * r * Math.sin(theta)
  const b = d * r * Math.cos(theta)

  // construct the path instructions
  const path = `
      M${sourceX} ${sourceY}
      H${sourceX + o}
      Q${sourceX + r + o} ${sourceY} ${sourceX + b + r + o} ${sourceY + a}
      L${targetX - b - r - o} ${targetY - a}
      Q${targetX - r - o} ${targetY} ${targetX - o} ${targetY}
      H${targetX}
    `
  return path
}