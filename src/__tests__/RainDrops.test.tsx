import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RainDrops from '../components/RainDrops/RainDrops';

function renderRegularRainDrops() {
  return render(<RainDrops count={50} />);
}

describe('RainDrops', () => {
  test('should display RainDrops', async () => {
    renderRegularRainDrops();

    const RainDropsElems = document.getElementsByClassName('rain-drop');
    expect(RainDropsElems.length).toBe(50);
  });
});