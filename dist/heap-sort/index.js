"use strict";
/**
 * 堆排序：利用数据结构中的堆特点进行排序
 * @example
 * 输入:
 * [5,6,3,11,1,0,9]
 * 输出：
 * [0,1,3,5,6,9,11]
 */
/**
 * 堆的定义：一种图的树形结构，被用于实现优先队列.优先队列是一种数据结构，可以自由添加数据，但取出数据时要从最小值开始按顺序取出。
 * 在堆的树形结构中，各个顶点被称为结点”，数据就存储在这些结点中。
 * 特点：
 * 1. 堆中的每个结点最多有两个子结点。
 * 2. 结点的排列顺序为从上到下，同一行里则为从左到右。
 * 3. 子结点必定大于父结点。
 */
//创建一个小顶堆
function _createMinHeap(arr) {
    var _a;
    var len = arr.length;
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
        var minIndex = i;
        for (var j = minIndex * 2 + 1; j < len; j = j * 2 + 1) {
            if (j + 1 < len && arr[j + 1] < arr[j]) {
                j++;
            }
            if (arr[minIndex] <= arr[j]) {
                break;
            }
            else {
                _a = [arr[j], arr[minIndex]], arr[minIndex] = _a[0], arr[j] = _a[1];
                minIndex = j;
            }
        }
    }
    return arr;
}
//创建排序函数
function heapSort(arr) {
    var sortArr = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        _createMinHeap(arr);
        var min = arr.shift();
        sortArr.push(min);
    }
    return sortArr;
}
console.log(heapSort([5, 6, 3, 11, 1, 0, 9]));
