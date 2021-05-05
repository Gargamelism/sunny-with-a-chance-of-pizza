import { getMinutesToNextTime } from '../utils/time';

describe('getMinutesToNextTime after', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('May 5, 2020 20:43:00'))
  });

  test('should show correct minutes to next occurence of time when time has passed', async () => {
    expect(getMinutesToNextTime('17:00')).toBe(1217);
  });
});

describe('getMinutesToNextTime before', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('May 5, 2020 16:43:00'))
  });

  test('should show correct minutes to next occurence of time when time not passed', async () => {
    expect(getMinutesToNextTime('17:00')).toBe(17);
  });
});

describe('getMinutesToNextTime just passed', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('May 5, 2020 17:43:00'))
  });

  test('should show correct minutes to next occurence of time when time has just passed', async () => {
    expect(getMinutesToNextTime('17:00')).toBe(1397);
  });
});