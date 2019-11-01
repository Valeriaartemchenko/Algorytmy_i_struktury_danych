'use strict';


// получаем число рандомно
var getRandomNumber = function (isAbsolute, min, max) {
    if (isAbsolute === true) {
      return Math.floor(Math.random() * (max - min) + min);
    } else {
      return Math.random() * (max - min) + min;
    }
}
/*
//  функция для создания рандомных чисел
var createRandomArray = function (isAbsolute, min, max, arrayLength) {
  var randomNumbers = [];
  for (var i = 0; i < arrayLength; i++) {
    randomNumbers.push(getRandomNumber(isAbsolute,min,max));
  }
  return randomNumbers;
}
// массив готовый - надо при вызове функции подать аргументы
var randomNumbers = createRandomArray();
console.log(randomNumbers);
*/
// функция для создания массива случайных чисел по возрастанию
var createGrowingArray = function (isAbsolute, min, max, arrayLength) {
  var regularNumbers = [min];
  var number = min;
  for (var i = 0; i < arrayLength; i++) {
    number += 3;
    regularNumbers.push(number);
    }
  return regularNumbers;
}

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

var regular = createGrowingArray(true, -10,10,5);
console.log(regular);



/*

var renderArray = function (isAbsolute,min,max,arrayLength,isRandom,isGrowing){
  if (isRandom === true) {
    var array = createRandomArray(isAbsolute,min,max,arrayLength);
  } else if (isRandom === false && isGrowing === true) {

  } else {

  };
  return array;
}

*/

