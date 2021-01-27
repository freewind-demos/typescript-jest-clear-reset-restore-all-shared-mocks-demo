// before each test case
beforeEach(() => jest.restoreAllMocks());

describe('restoreAllMocks', () => {

  // Notice: for non-spy mocks, "restoreMock" doesn't work:
  // https://jestjs.io/docs/en/mock-function-api#mockfnmockrestore
  // we have to do what we want manually
  describe('mock', () => {
    const mock = jest.fn(() => 'mocked')

    it('test1', () => {
      expect(mock()).toBe('mocked');
      expect(mock).toHaveBeenCalledTimes(1);
    })
    it('test2', () => {
      // usage data is not cleared by 'restoreAllMocks'
      expect(mock).toHaveBeenCalledTimes(1);
    })
  });

  describe('spy', () => {
    const module = {api: () => 'actual'}

    it('test1', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')
      expect(module.api()).toBe('spy mocked')
      expect(module.api).toHaveBeenCalledTimes(1);
    })
    it('test2', () => {
      // implementation is restore to original implementation by 'restoreAllMocks'
      expect(module.api()).toBe('actual')
    })
  })

})
