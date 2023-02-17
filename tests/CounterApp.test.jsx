import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Tests en CounterApp', () => {
  const value = 100;

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial de 100', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
  });

  test('Debe de incrementar el contador al dar click en el botón "+1"', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test('Debe de decrementar el contador al dar click en el botón -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test('Debe funcionar el botón de "Reset"', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByRole('heading', { name: 'label-count' }).innerHTML).toContain(`${value}`);
  });
});