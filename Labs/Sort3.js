'use strict';
var STEP = 3; // шаг изменения числа 
var TO_NANO_SECONDS = 1000000;

// получаем число рандомно
var getRandomNumber = function (isAbsolute, min, max) {
    if (isAbsolute === true) {
      return Math.floor(Math.random() * (max - min) + min);
    } else {
      return Math.random() * (max - min) + min;
    }
}

//  функция для создания рандомных чисел
var createRandomArray = function (isAbsolute, min, max, arrayLength) {
  var randomNumbers = [];
  for (var i = 0; i < arrayLength; i++) {
    randomNumbers.push(getRandomNumber(isAbsolute,min,max));
  }
  return randomNumbers;
}

// функция для создания массива случайных чисел по возрастанию
var createGrowingArray = function (isAbsolute, min, max, arrayLength) {
  var growingNumbers = [min];
  var number = min;
  if (isAbsolute === true) {
    for (var i = 0; i < arrayLength-1; i++) {
      number += STEP;
      growingNumbers.push(number);   
    };
  } else {
    number *= Math.random();
    for (var i = 0; i < arrayLength-1; i++) {  
      number += STEP;  
      growingNumbers.push(number); 
    };
  };
  return growingNumbers;
};

var createReducingArray = function (isAbsolute, min, max, arrayLength) {
  var reducingNumbers = [];
  reducingNumbers[0] = max;
  var number = max;
  if (isAbsolute === true) {
    for (var i = arrayLength; i > 0; i--) {
      number -= STEP;
      reducingNumbers.push(number);   
   }
 } else {
   number *= Math.random();
   for (var i = arrayLength; i > 0; i--) {
      number -= STEP;
      reducingNumbers.push(number);   
   }
 }
  return reducingNumbers;
};

var renderArray = function (isAbsolute,min,max,arrayLength,isRandom,isGrowing){
  if (isRandom === true && isGrowing === false) {
    var array = createRandomArray(isAbsolute,min,max,arrayLength);
  } else if (isRandom === false && isGrowing === true) {
    var array = createGrowingArray(isAbsolute, min, max, arrayLength);
  } else if(isRandom === false && isGrowing === false) {
    var array = createReducingArray(isAbsolute, min, max, arrayLength);
  };
  return array;
};

var inputForm = document.querySelector('.input_form');
var checkBox = inputForm.querySelector('#integer_irrational');
var radioRandom = inputForm.querySelector('#random_numbers');
var radioGrowing = inputForm.querySelector('#growing_numbers');
var radioReducing = inputForm.querySelector('#reducing_numbers');

var minimumValue = inputForm.querySelector('#min_value');
var maximimValue = inputForm.querySelector('#max_value');
var elementsAmount = inputForm.querySelector('#array_length');

var submitBtn = inputForm.querySelector('#submit_btn');
var textArea = document.querySelector('#input_array');
var showVectorCheckbox = inputForm.querySelector('#show_vectors');
var sortBtn = inputForm.querySelector('#sort_btn');
var resultArea = document.querySelector('#output_array');
var selectSort = document.querySelector('#sort_options');
var executionTime = document.querySelector('#time');
/* собираем данные с полей и по нажатию кнопки обрабатываем  событие*/

var newarray = [];
submitBtn.addEventListener('click', function () {
  newarray = renderArray(checkBox.checked, Number(minimumValue.value),Number(maximimValue.value),elementsAmount.value,radioRandom.checked,radioGrowing.checked);

  if (showVectorCheckbox.checked === true) { //если выбрана опция показывать массив сгенерированных чисел, то вставляется в тексереа
    textArea.innerText = newarray;
  } else {
    textArea.innerText = ' '; //если нет то очищаю ставкой пустой строки
  };
});


function radixSort(arr) {
   // Find the max number and multiply it by 10 to get a number
   // with no. of digits of max + 1
   const maxNum = Math.max(...arr) * 10;
   let divisor = 10;
   while (divisor < maxNum) {
      // Create bucket arrays for each of 0-9
      let buckets = [...Array(10)].map(() => []);
      // For each number, get the current significant digit and put it in the respective bucket
      for (let num of arr) {
         buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
      }
      // Reconstruct the array by concatinating all sub arrays
      arr = [].concat.apply([], buckets);
      // Move to the next significant digit
      divisor *= 10;
   }
   return arr;
}



sortBtn.addEventListener('click', function(){
  
  var sortedArray = radixSort(newarray);

  resultArea.innerText = sortedArray;
  //console.log(sortedArray);
});
