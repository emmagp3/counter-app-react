import { getHeroById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heores';

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

  /**
   * Test de tarea: Debe retornar una arreglos con todos los héroes de DC. 
   * (Aplicar toEqual al arreglo filtrado)
   * Además, debe evaluarse la longitud del arreglo (Debe ser 3).
   */
  test('Debe retornar una arreglos con todos los héroes de DC', () => {
    const testOwner = 'DC';
    const dcHeroes = getHeroesByOwner(testOwner);

    expect(dcHeroes).toEqual(heroes.filter(hero => hero.owner === testOwner));
    expect(dcHeroes.length).toBe(3);
  });

  /**
   * Test de tarea: Debe retornar una arreglos con todos los héroes de Marvel. Solo debe evaluarse la
   * longitud del arreglo (Debe ser 2),
   */
  test('Debe retornar una arreglos con todos los héroes de Marvel', () => {
    const testOwner = 'Marvel';
    const marvelHeroes = getHeroesByOwner(testOwner);

    expect(marvelHeroes).toEqual(heroes.filter(hero => hero.owner === testOwner));
    expect(marvelHeroes.length).toBe(2);
  });
});

