/*
 * Example 4
 * js 파일을 ts 로 rename 하세요.
 * bankAccount args 와 return value 에 대한 interface 를 정의하세요.
 * tsc 로 작성한 ts 파일을 compile 하세요.
 * node 커맨드로 compiled 된 js 파일을 실행 하세요.
 */

const bankAccount = (initialBalance) => {
  let balance = initialBalance;

  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
  };
};

const account = bankAccount(100);

console.log(account.getBalance()); // 100
console.log(account.deposit(10)); // 110
console.log('실습 종료!');
