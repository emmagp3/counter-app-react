import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas para 09-promesas', () => {
  test('getImagen debe retornar el url de una imagen', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
});