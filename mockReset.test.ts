describe('when calling mockReset()', () => {
  test('on a spy with custom implementation, it replaces the implementation to a new undefined-returning mock fn', () => {
    const module = { api: () => 'actual' }
    jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');

    expect(module.api()).toStrictEqual('spy mocked');
    expect(module.api).toHaveBeenCalledTimes(1);

    (module.api as any).mockReset();

    expect(module.api()).toStrictEqual(undefined)
    expect(module.api).toHaveBeenCalledTimes(1)
  })

  test('on a non-spy with custom implementation, it replaces the implementation to a new undefined-returning mock fn', () => {
    const api = jest.fn(() => 'non-spy mocked');

    expect(api()).toStrictEqual('non-spy mocked');
    expect(api).toHaveBeenCalledTimes(1);

    (api as any).mockReset()

    expect(api()).toStrictEqual(undefined);
    expect(api).toHaveBeenCalledTimes(1);
  })
})
