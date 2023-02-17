import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas para 09-promesas', () => {
  test('getImagen debe retornar un error dado que la API KEY no existe', async () => {
    const response = await getImagen();
    expect(response).toBe('No se encontró la imagen');
  });
});