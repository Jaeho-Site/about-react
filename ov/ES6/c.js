// async function fetchData() {
//     return 'Data loaded';
// }

// function fetchData() {
// 	return Promise.resolve('Data loaded');
// }

// fetchData().then(console.log);
function printAlert() {
	alert('이 함수는 브라우저 환경에서만 실행됩니다.');
}

printAlert();