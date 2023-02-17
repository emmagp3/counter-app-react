import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un héroe', (done) => {
    const testId = 1;
    getHeroeByIdAsync(testId)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
        done();
      });
  });

  test('getHeroeByIdAsync debe obtener un error si no encuenta el héroe', () => {
    const testId = 100;
    getHeroeByIdAsync(testId)
      .catch(error => {
        expect(error).toBe(`No se pudo encontrar el héroe con el id ${testId}`);
        done();
      });
  });
});