
describe('Pruebas en <DemoComponent /> (no existe)', () => {
  test('Esta prueba no debe de fallar', () => {
    // 1. Inicialización
    const message1 = 'Hola Mundo';

    // 2. Estímulo
    const message2 = message1.trim();

    // 3. observar el comportamiento
    expect(message1).toBe(message2);
  });
});