import { getUser, getActiveUser } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test('getActiveUser debe de retornar un objeto', () => {
    const testName = "Emmanuel";

    const user = getActiveUser(testName);
    expect(user).toEqual({
      uid: 'ABC567',
      username: testName
    });
  });
});