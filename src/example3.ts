/*
 * Example 3
 * Interface, Types
 */

const func = (args) => {
  return args;
};

func({
  a: 100,
  b: 'test',
  c: true,
  d: (arg) => {
    if (arg === 10) {
      window.alert('ok');
    }
  },
  e: [1,2,3,4,5]
});
