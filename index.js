//  function isPrime(n) {
//      if (isNaN(n)) {
//          throw new Error("n必须是一个正常的数字");
//      }
//      if (n < 2) {
//          return false;
//      }
//      for (var i = 2; i < n; i++) {
//          if (n % i === 0) {
//              return false;
//          }
//      }
//      return true;
//  }

//  console.log(isPrime("abc"));


 function A() {
     B();
     console.log("AAAAA");
 }

 function B() {
     try {
         C();
         console.log("B1");
     } catch (err) {
         console.log("运行时发生了错误", err);
     } finally {
         console.log("jghsjkh");
     }
 }

 function C() {
     throw new ReferenceError("abc");
     console.log("c1")

 }
 A();