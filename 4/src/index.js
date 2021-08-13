const { name } = require("./name");
import data from './age.js';
class Test {
    constructor() {
        this.name = name;
        this.age = data.age;
        this.print();
    }
    print() {
        alert(`姓名：${this.name}，年龄：${this.age}`);
    }
}
new Test();
