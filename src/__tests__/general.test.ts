import { calcPizzaChance } from '../utils/general';

describe('calcPizzaChance', () => {
  test('should show correct pizzaChance calculation', async () => {
    expect(calcPizzaChance(10, 5, 60)).toBe(100);
    expect(calcPizzaChance(10, 5, 600)).toBe(20);
    expect(calcPizzaChance(10, 5, 1200)).toBe(10);
  });
});