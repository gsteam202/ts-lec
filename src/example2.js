/*
 * Example 2
 * 앞서 작성해보신 Basic Type 을 활용하여 JavaScript 코드를 TypeScript 로 작성 해보겠습니다.
 * function arguments 와 return 에 각 types 를 정의해주세요.
 */

const func = (a, b, c, d, e, f) => {
  return 'ok';
};

const haha = 20000;
func(100, 'hello', true, null, { keyA: () => {}, keyB: [] }, haha);
