import { convertRanges } from '../utils/math';

describe('convertRanges', () => {
  test('should convert ranges correctly', async () => {
    expect(convertRanges(100, 0, 100, -90, 90)).toBe(90);
    expect(convertRanges(0, 0, 100, -90, 90)).toBe(-90);
    expect(convertRanges(50, 0, 100, -90, 90)).toBe(0);
    expect(convertRanges(110, 0, 100, -90, 90)).toBe(108);
  });
});