// const myPromise =new Promise(function(resolve,reject){
//     if(true){
//         resolve('Success!')
//     }else{
//         reject('Failure!')
//     }
// }).then(function(value){
//     console.log(value); // Success!
// }).catch(function(error){
//     console.log(error); // Failure!
// }).finally(() => {
//     // 항상 실행되는 코드
//     console.log("작업 완료");
//   });

// const waitTwoSeconds = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2초가 지났습니다!");
//     }, 2000);
//   });
  
//   waitTwoSeconds
//     .then(msg => {
//       console.log(msg);  // → 2초 후 "2초가 지났습니다!" 출력
//     })
//     .catch(err => {
//       console.error(err);
//     });

new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  })
    .then(result => {
      console.log("1단계:", result); // 1
      return result + 1;
    })
    .then(result => {
      console.log("2단계:", result); // 2
      return new Promise(resolve => setTimeout(() => resolve(result + 1), 1000));
    })
    .then(result => {
      console.log("3단계:", result); // 3
    });
  