let defaultArr = [16,2,24,63,4,5,2,17,31,96,50];

function mergeSort(arr) {
    let arrLen = arr.length;
    if (arrLen === 1) {
        return arr;
    }

    //从中间开始分离数组
    let middleIdx = Math.floor(arrLen / 2),
        left = arr.slice(0,middleIdx),
        right = arr.slice(middleIdx,arrLen);

    //递归执行mergeSort进行数组的拆分,merge将两数组中的数值进行排序以及合并
    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr,rightArr) {
    let result = [],
        leftLen = leftArr.length,
        rightLen = rightArr.length,
        il = 0,
        ir = 0;

    //两数组进行对比,将小的放入result中
    while (il < leftLen && ir < rightLen) {
        if (leftArr[il] < rightArr[ir]) {
            result.push(leftArr[il]);
            il++;
        }else {
            result.push(rightArr[ir]);
            ir++;
        }
    }

    //将左数组剩余的数值全部push到result中
    while (il < leftLen) {
        result.push(leftArr[il]);
        il++;
    }

    //将右数组剩余的数值全部push到result中
    while (ir < rightLen) {
        result.push(rightArr[ir]);
        ir++;
    }

    return result;
}

let newArr = mergeSort(defaultArr);

console.log(newArr);
