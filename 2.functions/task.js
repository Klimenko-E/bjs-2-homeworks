"use strict"
// Задача 1
function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		} else if (arr[i] < min) {
			min = arr[i]
		}
		sum = sum + arr[i];
	};

	let avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

//Задача 2
//2.1
function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

//2.2
function differenceMaxMinWorker(...arr) {

	if (arr.length > 0) {

		return Math.max(...arr) - Math.min(...arr)
	} else {
		return 0
	}
}

//2.3
function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i]
		} else {
			sumOddElement = sumOddElement + arr[i]
		}
	}

	return sumEvenElement - sumOddElement;
}

//2.4
function averageEvenElementsWorker(...arr) {

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++
		}
	}
	if (countEvenElement != 0) {
		return sumEvenElement / countEvenElement
	} else {
		return 0
	}
}

//Задача 3
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const max = func(...arrOfArr[i]);

		if (max > maxWorkerResult) {
			maxWorkerResult = max;
		}
	}
	return maxWorkerResult;
}