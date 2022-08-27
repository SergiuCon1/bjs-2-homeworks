// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let array of arr) {
    if (array < min) {
      min = array;
    } else if (array > max) {
      max = array;
    }
    sum += array;
  }
  
  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let array of arr) {
      sum += array;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sumArr = func(arrOfArr[i]);
    if (sumArr > max) {
      max = sumArr;
  }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let array of arr) {
    if (array < min) {
      min = array;
    } else if (array > max) { 
      max = array;
    }
  }
  let diffenence = max - min;

  return Math.abs(diffenence);
  // Ваш код
}
