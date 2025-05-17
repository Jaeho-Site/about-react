// function delay(msg, ms) {
//   return new Promise(resolve => setTimeout(() => resolve(msg), ms));
// }

// async function run() {
//   const one = await delay("첫 번째", 1000);
//   console.log(one);

//   const two = await delay("두 번째", 1000);
//   console.log(two);
// }
// const result = run();
// console.log(result);
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error(`HTTP 오류! 상태: ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('에러 발생:', err);
  }
}
getData();
