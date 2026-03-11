import { render } from '@testing-library/react';

describe('Basic Tests', () => {
  test('basic test passes', () => {
    expect(1 + 1).toBe(2);
  });

  test('can render a simple component', () => {
    const TestComponent = () => <div>Test</div>;
    const { container } = render(<TestComponent />);
    expect(container.firstChild).toBeInTheDocument();
  });
});