const api = require('./exercise2-3');

describe('Testing API request', () => {
  describe('Testing a successful request', () => {
    afterEach(() => api.fetchURL.mockRestore())
    objSucess = {
      message: 'https://images.dog.ceo/breeds/terrier-border/n02093754_5662.jpg',
      status: 'success',
    };
    const stringFailed = 'request failed';
    test('Request was a success', () => {
      api.fetchURL = jest.fn().mockResolvedValue(objSucess);
      return api.fetchURL().then((result) => {
        expect(result).toBe(objSucess);
        expect(api.fetchURL).toHaveBeenCalledTimes(1);
      })
    });

    test('Request was failed', async () => {
      try {
        await api.fetchURL();
      } catch (error) {
        expect(error).toBe(stringFailed);
      }
    })

  })
})