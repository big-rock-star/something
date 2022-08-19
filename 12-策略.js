const strategies = {
  isEmpty: function (value, errorMsg) {
    if (!value) {
      return errorMsg;
    }
  },

  isNoSpace(value, errorMsg) {
    if (value.indexOf(" ") !== -1) {
      return errorMsg;
    }
  },

  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },

  maxLength(value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
  },

  isMobile(value, errorMsg) {
    if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
};

class Validator {
  constructor() {
    this.catch = [];
  }

  add(dom, rules) {
    for (var i = 0, rule; (rule = rules[i++]); ) {
      let strategyAry = rule.strategy.split(":");
      let errorMsg = rule.errorMsg;

      this.catch.push(function () {
        let strategy = strategyAry.shift();
        strategyAry.unshift(dom.value);
        strategyAry.push(errorMsg);
        return strategies[strategy].apply(dom, strategyAry);
      });
    }
  }

  start() {
    for (var i = 0, validatorFunc; (validatorFunc = this.catch[i++]); ) {
      let errorMsg = validatorFunc();
      if (errorMsg) {
        return errorMsg;
      }
    }
  }
}

let regsiterForm = document.getElementById("regsiterForm");
let validator = new Validator();

let validataFunc = function () {
  let validator = new Validator();
  validator.add(regsiterForm.userName, [
    {
      strategy: "isEmpty",
      errorMsg: "用户名不能为空",
    },
    {
      strategy: "minLength:6",
      errorMsg: "用户名不能小于6位",
    },
    {
      strategies: "maxLength:12",
      errorMsg: "用户名不能大于12位",
    },
    {
      strategy: "isNoSpace",
      errorMsg: "用户名不能有空格",
    },
    {
      strategy: "isMobile",
      errorMsg: "请输入正确的手机号",
    },
  ]);

  return validator.start();
};

regsiterForm.addEventListener("submit", function (e) {
  let errorMsg = validataFunc();
  if (errorMsg) {
    console("errorMsg", errorMsg);
    return false;
  }
  return true;
});
