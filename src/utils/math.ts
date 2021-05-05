
function convertRanges(fromVal: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number {
  const fromRange = fromMax - fromMin;
  const toRange = toMax - toMin;

  const converted = (((fromVal - fromMin) * toRange) / fromRange) + toMin;

  return converted;
}

export { convertRanges };