import { getHeroById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroById debe retornar un héroe', () => {
    const testId = 1;
    const hero = getHeroById(testId);
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  });

  test('getHeroById debe retornara undefined si el heroe no existe', () => {
    const testId = 100;
    const hero = getHeroById(testId);
    expect(hero).toBeFalsy();
  });
});

