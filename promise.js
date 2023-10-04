const sum = (delay,r) => {
	return new Promise((resolve, reject) => {
		let a = 0;
		setTimeout(() => {
			a = Math.floor(Math.random() * 10);
			if (delay > 2000) {
				resolve(r);
			}
			reject(r);
		}, delay);
	});
};

// sum().then((r) => console.log('resolved', r)).catch((e) => {
//   console.log('catch',e)
// })


const display = async () => {
	try {
		const result = await sum();
		console.log("result", result);
	} catch (e) {
		console.log("error", e);
	} finally {
		console.log("I am done");
	}
};



const p1 = sum(1000, 100)
const p2 = sum(4000, 400)
const p3 = sum(3000, 300)

// Promise.all([p1,p2.catch(e =>e),p3]).then((res) => console.log(res)).catch((e) => {
//   console.log('all Error',e)
// })

// Promise.allSettled([p1,p2,p3]).then((r) => console.log('allSettled',r))

Promise.any([p1,p2,p3]).then((r) => console.log('race',r)).catch((e) => console.log('race E',e))
