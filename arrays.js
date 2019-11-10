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

var myArray = renderArray(true, 0,100,20,false,true);
console.log(myArray);

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

/* собираем данные с полей и по нажатию кнопки обрабатываем*/

submitBtn.addEventListener('click', function () {
  var newarray = renderArray(checkBox.checked, Number(minimumValue.value),Number(maximimValue.value),elementsAmount.value,radioRandom.checked,radioGrowing.checked);
  console.log(newarray);
});





