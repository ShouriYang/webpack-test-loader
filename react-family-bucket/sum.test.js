
import functions from './sum';

test('getAuthor()返回的对象深度相等', () => {
  expect(functions.getAuthor()).toEqual(functions.getAuthor());
})

test('getAuthor()返回的对象内存地址不同', () => {
  expect(functions.getAuthor()).not.toBe(functions.getAuthor());
})

test('getIntArray(3)返回的数组长度应该为3', () => {
  expect(functions.getIntArray(3)).toHaveLength(3);
})

test('getIntArray(3.3)应该抛出错误', () => {
  function getIntArrayWrapFn() {
    functions.getIntArray(3.3);
  }
  expect(getIntArrayWrapFn).toThrow('"getIntArray"')
})

test('getAuthor().name应该包含"li"这个姓氏', () => {
  expect(functions.getAuthor().name).toMatch(/li/i);
})

test('fetchUser() 可以请求到一个用户名字为Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham')
})