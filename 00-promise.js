const PENDDING = "pendding";
const REJECTED = "rejected";
const FULFILLED = "fulfilled";

class Promise {
  constructor(excutor) {
    this.status = PENDDING;
    this.reason = null;
    this.value = null;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (val) => {
      if (this.status === PENDDING) {
        this.status = FULFILLED;
        this.value = val;
        this.onResolvedCallbacks.forEach((fn) => fn(this.value));
      }
    };

    let rejected = (reason) => {
      if (this.status === PENDDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
      }
    };

    try {
      excutor(resolve, rejected);
    } catch (e) {
      rejected(e);
    }
  }

  then(onSuccess, onFail) {
    if (this.status === FULFILLED) {
      onSuccess(this.value);
    }

    if (this.status === REJECTED) {
      onFail(this.reason);
    }

    // 做回调函数的收集 等调用resolve或rejected时再执行
    if (this.status === PENDDING) {
      this.onResolvedCallbacks.push(onSuccess);
      this.onRejectedCallbacks.push(onFail);
    }
  }

  static all1(arr) {
    let counter = 0;
    let length = arr.length;
    let result = [];

    return new Promise((resolve, reject) => {
      arr.map((item, index) => {
        item.then(
          (res) => {
            result.push(res);
            counter++;
            if (counter === length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  static race(arr) {
    return new Promise((resolve, reject) => {
      arr.forEach((item) => {
        item.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
}

// test
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("123");
  }, 1000);
}).then((res, err) => {
  console.log("res===", res, err);
});

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 2000);
});

Promise.all1([p1, p2]).then((res) => {
  console.log("res====", res);
});

Promise.race([p2, p1]).then((res) => {
  console.log("race", res);
});
