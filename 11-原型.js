class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }

  sayHello() {
    console.log("Hello, I am a student. name is", this.getName());
  }
}

let student = new Student("张三");
student.sayHello();
