"use strict";
var arr = [4, 37, 951, 144, 36]
function swap(arr, firstIndex, secondIndex){
    var memp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = memp;
}
function middleSort(arr, left, right) {
    var middle = arr[Math.floor((right + left) / 2)],
        p = left,
        l = right;
    while (p <= l) {
        while (arr[p] < middle) {
            p++;
        }
        while (arr[l] > middle) {
            l--;
        }
        if (p <= l) {
            swap(arr, p, l);
            p++;
            l--;
        }
    }
    return p;
}
function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = middleSort(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
var result = quickSort(arr, 0, arr.length - 1);
console.log(arr); 