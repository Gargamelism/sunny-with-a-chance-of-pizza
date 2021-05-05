import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PizzaForecast from '../components/PizzaForecast/PizzaForecast';

function renderRegularPizzaForecast() {
  return render(<PizzaForecast bugsCount={10} minutesLeft={500} pizzaChance={60} />);
}

function renderZeroPizzaForecast() {
  return render(<PizzaForecast bugsCount={0} minutesLeft={500} pizzaChance={0} />);
}

describe('PizzaForecast', () => {
  test('should display PizzaForecast', async () => {
    renderRegularPizzaForecast();

    const pizzaForecastHeaderElem = screen.getByText("Rainy with", { exact: false });
    expect(pizzaForecastHeaderElem).toHaveClass('header');
    
    const pizzaForecastDetailsElem = screen.getByText("bugs found", { exact: false });
    expect(pizzaForecastDetailsElem).toHaveClass('details');

    renderZeroPizzaForecast();
    const pizzaZeroForecastHeaderElem = screen.getByText("Though very impressive", { exact: false });
    expect(pizzaZeroForecastHeaderElem).toHaveClass('header');
  });
});