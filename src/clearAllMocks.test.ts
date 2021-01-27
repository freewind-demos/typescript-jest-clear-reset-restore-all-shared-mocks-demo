// before each test case
beforeEach(jest.clearAllMocks);

// notice: these test cases are run in sequence to make it clear
// PS: we specified `jest --runInBand`
describe('clearAllMocks', () => {

  describe('spyOn', () => {
    const module = {api: () => 'actual'}

    it('test1', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy1')

      expect(module.api()).toBe('spy1');
      expect(module.api).toHaveBeenCalledTimes(1);
    })

    it('test2', () => {
      // usage data is cleared by 'clearAllMocks'
      expect(module.api).toHaveBeenCalledTimes(0);

      // the spy implementation is still working
      expect(module.api()).toBe('spy1');
    })
  })

  describe('mock', () => {
    const api = jest.fn(() => 'mock');

    it('test1', () => {
      expect(api()).toBe('mock');
      expect(api).toHaveBeenCalledTimes(1);
    })
    it('test2', () => {
      // usage data is cleared by 'clearAllMocks'
      expect(api).toHaveBeenCalledTimes(0);

      // the mock implementation is still working
      expect(api()).toBe('mock');
    })
  })

})
