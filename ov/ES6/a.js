// function confirmReservation(user) {
//     const { name, roomType, date:firstDate } = user;
    
//     return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`
// }

// const userInfo = {
// name: "James",
// roomType: "Deluxe",
// date: "2023-05-30"
// }
// const result = confirmReservation(userInfo);
// console.log(result);

// const obj1 = { name: "르탄이", age: 25 };
// const obj2 = { name: "르순이", email: "rsoony@sparta.com" };

// const mergedObj={...obj1, ...obj2};
// console.log(mergedObj); // { name: '르순이', age: 25, email: '

const person = { name: 'Young', age: 35, job: "developer", password: "1234" }

sampleObj= { ...person };
delete sampleObj.password; // delete password property from the copied object

console.log(sampleObj) // => { name: 'Young', age: 35, job: "developer" }