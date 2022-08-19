// 将对象组合成树形结构 表示 整体-部分的层结构

class TrainOrder {
  create() {
    console.log("创建火车票");
  }
}

class HotelOrder {
  create() {
    console.log("创建酒店订单");
  }
}

class TotalOrder {
  constructor() {
    this.orderList = [];
  }

  addOrder(order) {
    this.orderList.push(order);
    return this;
  }

  create() {
    this.orderList.forEach((item) => {
      item.create();
    });
    return this;
  }
}

let train = new TrainOrder();
let hotel = new HotelOrder();
let total = new TotalOrder();

total.addOrder(train).addOrder(hotel).create();
