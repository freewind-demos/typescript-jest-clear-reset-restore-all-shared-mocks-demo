beforeEach(jest.resetAllMocks);

describe('resetAllMocks', () => {

  describe('spy', () => {
    const module = {api: () => 'actual'}

    it('test1', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');
      expect(module.api()).toBe('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);
    })
    it('test1', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');
      expect(module.api()).toBe('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);
    })
  })

  describe('non-spy', () => {
    const api = jest.fn();

    beforeEach(() => {
      api.mockImplementation(() => 'non-spy mocked');
    })
    
    it('test2', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);
    })
    it('test2', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);
    })
  })
})
