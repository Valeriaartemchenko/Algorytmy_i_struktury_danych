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
    for (var i = 0; i < arrayLength-1; i++) {
      number *= Math.random();
      number += STEP;
      growingNumbers.push(number); 
    };
  };
  return growingNumbers;
};

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
   for (var i = arrayLength; i > 0; i--) {
      number *= Math.random();
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
var minimumValue = inputForm.querySelector('#min_value');
var maximimValue = inputForm.querySelector('#max_value');
var numbersAmount = inputForm.querySelector('#array_length');
var radioRandom = inputForm.querySelector('#random_numbers').checked;
var radioGrowing = inputForm.querySelector('#growing_numbers').checked;
var radioReducing = inputForm.querySelector('#reducing_numbers');

var submitBtn = inputForm.querySelector('#submit_btn');

// функция для изменения состояния чекбокса
var onCheckboxChange = function(element) {
  if(element.checked == true) {
    element.removeAttribute('checked'); 
  } else if (element.checked == false) {
    element.setAttribute("checked", 'true');
  };
};
// ивент листенер на состояние изменения чекбокса (может быть и click вместо change)
checkBox.addEventListener('change', function () {
  onCheckboxChange(checkBox);
  console.log(checkBox.checked);
});

/*
numbersAmount.addEventListener('change', function () {
  return numbersAmount.value;
});
minimumValue.addEventListener('change', function () {
  return minimumValue.value;
});
*/
/* собираем данные с полей и по нажатию кнопки обрабатываем*/
submitBtn.addEventListener('click', function () {
  var newArray = renderArray(checkBox.checked, Number(minimumValue.value),Number(maximimValue),numbersAmount.value,radioRandom.checked,radioGrowing);
  console.log(newArray);
});
