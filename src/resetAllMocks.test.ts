// before each test case
beforeEach(jest.resetAllMocks);

// notice: these test cases are run in sequence to make it clear
// PS: we specified `jest --runInBand`
describe('resetAllMocks', () => {

  describe('spy', () => {
    const module = {api: () => 'actual'}

    it('test1', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy');
      expect(module.api()).toBe('spy');
      expect(module.api).toHaveBeenCalledTimes(1);
    })

    it('test1', () => {
      // usage data is cleared by 'resetAllMocks'
      expect(module.api).toHaveBeenCalledTimes(0);

      // the spy implementation is reset to undefined
      expect(module.api()).toBe(undefined);

    })
  })

  describe('mock', () => {
    // we need to avoid setting implementation when defining it
    const mock = jest.fn(() => 'mocked');

    it('test2', () => {
      // the mock implementation is reset to undefined
      expect(mock()).toBe(undefined);
    })

    it('test2', () => {
      mock.mockImplementation(() => 'mocked')
      expect(mock()).toBe('mocked');
      expect(mock).toHaveBeenCalledTimes(1);
    })
  })
})
