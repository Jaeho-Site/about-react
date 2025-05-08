// async function fetchData() {
//     return 'Data loaded';
// }

function fetchData() {
	return Promise.resolve('Data loaded');
}

fetchData().then(console.log);