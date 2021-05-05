import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';

function renderErrorMsg() {
  return render(<ErrorMsg msg="error test message!" />);
}

describe('ErrorMsg', () => {
  test('should display error', async () => {
    renderErrorMsg();

    const errorElem = screen.getByText("Error!", { exact: false });

    expect(errorElem).toHaveClass('error');
  });
});