TypeScript Jest Mock clear/reset/restore Demo
==============================================

在测试里通过一个全局的`beforeEach(jest.resetAllMocks)`将所有共享的mocks重置，以简化代码。

其中`restoreAllMocks`似乎有bug

```
npm install
npm test
```
