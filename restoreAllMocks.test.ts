// FIXME restoreAllMocks doesn't work well?
beforeEach(() => jest.restoreAllMocks());

describe('restoreAllMocks', () => {

  describe('non-spy', () => {
    const api = jest.fn()

    beforeEach(() => {
      api.mockImplementation(() => 'non-spy mocked');
    })

    it('test1', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);
    })
    it('test2', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);
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
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')
      expect(module.api()).toBe('spy mocked')
      expect(module.api).toHaveBeenCalledTimes(1);
    })
  })

})
