import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas para 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => {
    const { testClave, testEdad } = { clave: 'ABC567', edad: 10 };
    const obj = usContext({ testClave, testEdad });
    expect(obj).toStrictEqual({
      nombreClave: testClave,
      anios: testEdad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });
  });
});