import React from 'react';
import { render } from '@testing-library/react-native';
import { Counter } from './Counter';

test('Counter renders correctly', () => {
  render(<Counter />);
});
