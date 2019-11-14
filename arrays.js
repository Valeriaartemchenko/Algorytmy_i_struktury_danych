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

/*-------------------------Insert Sort Algotithm------------------------*/

var insertionSort = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let tmp = nums[i];
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = tmp;
  }
  return nums;
};

/*--------------------------Bubble Sort-------------------------------*/

var bubbleSort = function(inputArr) {
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

/*-------------------------Merge Sort-------------------------------*/

var merge = function(left, right){
    let result = [],
        leftLen = left.length,
        rightLen = right.length,
        l = 0,
        r = 0;
    while (l < leftLen && r < rightLen) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
};
var mergeSort = function(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

/*--------------------------------Heap Sort ---------------------------*/
var  swap = function(array, firstItemIndex, lastItemInde) {
  var tmp = array[firstItemIndex];
  
  // Swap first and last items in the array.
  array[firstItemIndex] = array[lastItemInde];
  array[lastItemInde] = tmp;
};

var heapify = function(heap, i, max) {
  var index, leftChild, righChild;
  
  while(i < max) {
    index = i;

    leftChild = 2*i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }
      
    if (index == i) {
      return;
    }

    swap(heap,i, index);
    
    i = index;
  };
};

var buildMaxHeap = function(array) {
  var i;
  i = array.length / 2 - 1;
  i = Math.floor(i);

  // Build a max heap out of
  // all array elements passed in.
  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  };
};

var heapSort = function(array) {
  // Build our max heap.
  buildMaxHeap(array);

  // Find last element.
  lastElement = array.length - 1;

  // Continue heap sorting until we have
  // just one element left in the array.
  while(lastElement > 0) {
    swap(array, 0, lastElement);

    heapify(array, 0, lastElement);

    lastElement -= 1
  };
  return array;
};

/*------------------------------Quick Sort -----------------------------*/
var swap = function(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

var partition = function(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      };
      while (items[j] > pivot) {
        j--;
      };
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      };
    };
  return i;
};

var quickSort = function(items, left, right) {
  var index;
    if (items.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;
      index = partition(items, left, right);
        if (left < index - 1) {
          quickSort(items, left, index - 1);
        };
        if (index < right) {
          quickSort(items, index, right);
        };
    };
  return items;
};

/*---------------------------сборная функция сортировки-----------------------------*/
var sortArray = function (array) {
  if (selectSort.value === 'insertion_sort') {
    var sortedArray = insertionSort(array);
  };

  if (selectSort.value === 'bubble_sort') {
    var sortedArray = bubbleSort(array);
  };

  if (selectSort.value === 'merge_sort') {
    var sortedArray = mergeSort(array);
  };

  if (selectSort.value === 'heap_sort') {
    var sortedArray = heapSort(array);
  };

  if (selectSort.value === 'quick_sort') {
    var sortedArray = quickSort(array);
  }
  return sortedArray;
};


//---------------------------Обработка события нажития кнопки сортировки-------------------------//
sortBtn.addEventListener('click', function(){
  //const start= new Date().getTime();
  const start=window.performance.now() * TO_NANO_SECONDS;
  var sortedArray = sortArray(newarray);
  //const end = new Date().getTime();
  const end = window.performance.now() * TO_NANO_SECONDS;
  var time = Math.floor(end - start) + ' nanoseconds';
  executionTime.innerText = time;
  resultArea.innerText = sortedArray;
  //console.log(sortedArray);
});


