import generateRainDrops from '../utils/rainDropGenerator';

describe('generateRainDrops', () => {
  test('should generate raindrop values as expected', async () => {
    const raindrops = generateRainDrops(10);
    raindrops.forEach(({position, size, opacity}) => {
      expect(position.x).toBeGreaterThanOrEqual(0);
      expect(position.x).toBeLessThanOrEqual(95);
      
      expect(position.y).toBeGreaterThanOrEqual(0);
      expect(position.y).toBeLessThanOrEqual(95);
      
      expect(size.width).toBeGreaterThanOrEqual(5);
      expect(size.width).toBeLessThanOrEqual(10);
      
      expect(size.height).toBeGreaterThanOrEqual(10);
      expect(size.height).toBeLessThanOrEqual(20);
      
      expect(opacity).toBeGreaterThanOrEqual(25);
      expect(opacity).toBeLessThanOrEqual(100);
    });
  });
});