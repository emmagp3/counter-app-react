test('Esta prueba no debe de fallar', () => {
  if (1 === 0) /* if (0 === 0) */ {
    throw new Error('No se puede dividir entre cero');
  }
});