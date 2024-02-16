var maxPoints = function(points) {
  if (points.length === 1) return 1;
  let result = 0;
  let length = points.length;

  for (let i = 0; i < length; i++) {
    let obj = {};
    for (let j = 0; j < length; j++) {
      if (i === j) continue;
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      let slope = (y2 - y1)/(x2 - x1);

      if (obj[slope] !== undefined) {
        obj[slope] = obj[slope] + 1;
      } else {
        obj[slope] = 2;
      }
    }
    result = Math.max(result, ...Object.values(obj));
  }
  return result;
};