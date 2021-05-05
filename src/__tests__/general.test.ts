import { calcPizzaChance } from '../utils/general';

describe('calcPizzaChance', () => {
  test('should show correct pizzaChance calculation', async () => {
    expect(calcPizzaChance(10, 60)).toBe(100);
    expect(calcPizzaChance(10, 600)).toBe(50);
  });
});