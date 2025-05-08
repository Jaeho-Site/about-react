// if (true) {
//     let temp = 'local';
//     console.log(temp); // 'local'
// }
// console.log(temp); // ReferenceError: temp is not defined

const user={
    name:'John',
    age:30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
const userDetails = {
    occupation: "개발자",
    name: "홍길동",
  };
  Object.assign(user, userDetails);
  console.log(user);