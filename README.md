TypeScript Jest Mock clear/reset/restore Demo
==============================================

在测试里通过最外层的`beforeEach(jest.resetAllMocks/clearAllMocks/restoreAllMocks)`将所有共享的mocks重置，以简化代码。

注意：

1. clearAllMocks: 仅清除spy/mock的调用数据，不清除实现
2. resetAllMocks: 同时清除spy/mock的调用数据和实现（变成 `() => undefined`）
3. restoreAllMocks: 仅用于将spy还原，不管mock

我建议同时强制使用这三者，因为如果同时使用这三者，可以确保代码中用到的每一个mock/spy都是干净的，在test case之间不会产生影响

与之相应，我们需要对测试代码进行调整，比如mock/spy的设置不能放在定义处，而应该放在beforeEach里，确保每个test case运行时，所有的mock/spy都重新设置一遍

```
npm install
npm test
```

为了方便演示，使用`jest --runInBand`启动，会保证每个文件中的test cases从上到下依次执行，所以上一个test case的运行结果会影响到下一个。
