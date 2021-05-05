import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PizzaMeter from '../components/PizzaMeter/PizzaMeter';

function renderRegularPizzaMeter() {
  return render(<PizzaMeter percent={50} markerExternalClasses={['test-class']} />);
}

describe('PizzaMeter', () => {
  test('should display PizzaMeter', async () => {
    renderRegularPizzaMeter();

    const PizzaMeterElem = document.getElementsByClassName('completion-marker')[0];
    expect(PizzaMeterElem).toHaveClass('test-class');
  });
});