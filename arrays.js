'use strict';
var STEP = 3; // шаг изменения числа 

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
// массив готовый - надо при вызове функции подать аргументы



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

;

/* функция создает рандомные числа по возрастанию, но работает с глюком
var i = 0;
var createGrowingArray = function (isAbsolute, min, max, arrayLength) {
  var regularNumbers = [min];
  while (regularNumbers.length != arrayLength) {
    
    var number = getRandomNumber(isAbsolute,min,max);
    var number2 = regularNumbers[i];
      if (number > number2) {
        regularNumbers.push(number);
        i++;
      }
    }
  return regularNumbers;
}
*/

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


/*Dane wejściowe:
wybór typu liczb: całkowite/rzeczywiste ++
wybór rodzaju wektora: wszystkie/tylko losowy/tylko rosnący/tylko malejący ++
liczność zbioru ++
zakres generowanych liczb: min i max lub tylko max (min =  0) ++
opcja wyświetlenia wygenerowanych zbiorów --

*/

//-------------------работа с событиями ввода----------------------//
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
/* собираем данные с полей и по нажатию кнопки обрабатываем  событие*/
var newarray = [];

submitBtn.addEventListener('click', function () {
  newarray = renderArray(checkBox.checked, Number(minimumValue.value),Number(maximimValue.value),elementsAmount.value,radioRandom.checked,radioGrowing.checked);
  console.log(newarray);

  if (showVectorCheckbox.checked === true) { //если выбрана опция показывать массив сгенерированных чисел, то вставляется в тексереа
    textArea.innerText = newarray;
  } else {
    textArea.innerText = ' '; //если нет то очищаю ставкой пустой строки
  };
});

/*-------------------------Insert Sort Algotithm------------------------*/
//var arraytest = [8,3,0,6,2,1,4,9,5,7]; для тестирование работы алгоритма в консоли

var insertionSort = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let tmp = nums[i]
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j+1] = tmp
  }
  return nums
};
/*
sortBtn.addEventListener('click', function(){
  var sortedArray = insertionSort(newarray);
  console.log(sortedArray);
});
*/

/*--------------------------Bubble Sort-------------------------------*/
let bubbleSort = function(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

sortBtn.addEventListener('click', function(){
  var sortedArray = bubbleSort(newarray);
  console.log(sortedArray);
});





