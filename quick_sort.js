let arr = [16,2,24,63,4,5,2,17,31,96,50];

function quickSort(arr) {
	let arrLen = arr.length;

	//arrLen<=1时,直接返回原数组,递归结束
	if ( arrLen <= 1 ) {
		return arr;
	}else {
		//中间基准数值下标
        let middleIdx = Math.floor(arrLen / 2);
        // console.log(`middleIdx:${middleIdx}`);

		//基准值
        let benchMark = arr.splice(middleIdx, 1)[0];
        // console.log(`benchMark:${benchMark}`);

        let leftArr = [];
        let rightArr = [];

        //遍历去除掉benchMark的数组,最小放左,等于或者最大放右
        arr.forEach((item, idx) => {
        	// console.log(item);
            if (item < benchMark) {
                leftArr.push(item);
            } else {
                rightArr.push(item);
            }
        });

        //递归执行left和right
        leftArr = quickSort(leftArr);
        rightArr = quickSort(rightArr);

        return leftArr.concat([benchMark], rightArr);
    }
}

let sortedArr = quickSort(arr);

console.log(sortedArr);