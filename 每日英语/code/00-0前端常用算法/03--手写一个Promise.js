class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;

        // 1000ms 之后， 执行如下两个：
        console.log("1");
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      console.log("reject");
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      // executor 作为 new Promise(executor)的入参
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilledHandler = (value) => {
        try {
          if (typeof onFulfilled === "function") {
            const result = onFulfilled(value);
            console.log("2");
            resolve(result);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      };

      const rejectedHandler = (reason) => {
        try {
          if (typeof onRejected === "function") {
            const result = onRejected(reason);
            resolve(result);
          } else {
            reject(reason);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        setTimeout(() => fulfilledHandler(this.value), 0);
      } else if (this.state === "rejected") {
        setTimeout(() => rejectedHandler(this.reason), 0);
      } else {
        this.onFulfilledCallbacks.push(fulfilledHandler);
        this.onRejectedCallbacks.push(rejectedHandler);
      }
    });
  }

  catch(onRejected) {
    // catch 是 用 then 实现的
    return this.then(null, onRejected);
  }

  static resolve(value) {
    // Promise.resolve 返回一个新的 Promise
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    // Promise.reject 返回一个新的 Promise
    return new MyPromise((_, reject) => reject(reason));
  }
}

const p = new MyPromise((resolve) => {
  setTimeout(() => resolve("完成"), 1000);
});

p.then((value) => console.log("第一个 then:", value));
p.then((value) => console.log("第二个 then:", value));

// 1000毫秒 之后输出

// 1
// 第一个 then: 完成
// 2
// 1
// 第二个 then: 完成
// 2
