
// let addCoffee=function(name){
//   return function(prevName){
//     return new Promise(function(resolve){
//       setTimeout(function(){
//         let newName=prevName?(prevName + ','+name) : name;
//         console.log(newName);
//         resolve(newName);
//       },500);
//     })
//   }
// }
// addCoffee('에스프레소')()
// 	.then(addCoffee('아메리카노'))
// 	.then(addCoffee('카페모카'))
// 	.then(addCoffee('카페라떼'));

// var addCoffee = function (name) {
// 	return new Promise(function (resolve) {
// 		setTimeout(function(){
// 			resolve(name);
// 		}, 500);
// 	});
// };
// const p = addCoffee("에스프레소");
// p.then(()=>console.log(p));
fetch('https://example.com/data-not-found')
  .then(response => {
    console.log(response.ok);        // false (404 에러)
    console.log(response.status);    // 404
    console.log('fulfilled 상태임'); // 이 줄은 실행됨!
  })
  .catch(error => {
    console.log('여기 안 옴!');
  });

  fetch('https://not-exist.example.com') // 존재하지 않는 서버
  .then(response => {
    console.log('이건 실행 안됨');
  })
  .catch(error => {
    console.error('이건 실행됨: 네트워크 오류'); // DNS 오류, 인터넷 끊김 등
  });



// console.log(p); // Promise { <pending> }

// setTimeout(() => {
// 	console.log(p); // Promise { '에스프레소' } after 500ms
// }, 1000);

// var coffeeMaker = async function () {
// 	var coffeeList = '';
// 	var _addCoffee = async function (name) {
// 		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
// 	};
// 	await _addCoffee('에스프레소');
// 	console.log(coffeeList);
// 	await _addCoffee('아메리카노');
// 	console.log(coffeeList);
// 	await _addCoffee('카페모카');
// 	console.log(coffeeList);
// 	await _addCoffee('카페라떼');
// 	console.log(coffeeList);
// };
// coffeeMaker();