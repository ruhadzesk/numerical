console.log('There is lab N1');

let a = [1,1,1];
let b = [4,4,4,4];
let c = [1,1,1];
let d = [5,6,6,5];
let N = 4;

let alpha = [];
let beta = [];
let x = [];

// Прямой ход метода прогонки
alpha[0] = -1 * c[0]/b[0];
beta[0] = d[0]/b[0];

for (n = 1; n < N; n++) {
	alpha[n] = -1 * c[n] / (a[n-1] * alpha[n-1] + b[n]);
	beta[n] = (d[n] - a[n-1] * beta[n-1]) / (a[n-1] * alpha[n-1] + b[n])   
}
console.log('alpha:')
console.log(alpha);
console.log('beta:');
console.log(beta);

// Обратный ход метода прогонки
x[N-1] = beta[N-1];

for (n = N-2; n >= 0; n--) {
	x[n] = alpha[n] * x[n+1] + beta[n];
}

console.log('x:');
console.log(x);