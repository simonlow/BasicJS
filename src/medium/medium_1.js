import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
//works
//console.log(getSum([1,2,3])); 

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sorted = array.sort(function(a,b) {return a-b});
    let median = 0;
    
    if (array.length % 2 != 0) {
        median = sorted[Math.floor(array.length/2)];
    }
    else {
        median = (sorted[array.length/2] + sorted[array.length/2 - 1])/2;
    }
    /*
    if(array.length % 2 === 0) {
        median = (array[array.length/2] + array[(array.length/2) - 1])/2;
    }
    else if (array.length % 2 > 0) {
        median = array[(array.length-1)/2];
    }
    */
    return median; 
    
}
//seems to work
//console.log(getMedian([1,2,3,4,5]));
//console.log(getMedian([1,2,3,4]));
//console.log(getMedian([1,9,2,8,3,7,4,6,5]));
//console.log(getMedian([1,12,15,3,41,54]));
console.log(getMedian([1,12,15,3,41,54,54]));

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let sum = 0;
    let min = array[0];
    let max = array[0];
    let median = getMedian(array);
    let sum_squared_diffs = 0; 
    for(let i=0; i< array.length;i++) {
        sum+= array[i];
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    let mean = sum/array.length;
    for(let i = 0; i< array.length; i++) {
        sum_squared_diffs+= (array[i]-mean)*(array[i]-mean);
    }
    let vari = sum_squared_diffs/array.length;
    let std_dev = Math.sqrt(vari);
    const obj = {};
    obj.length = array.length;
    obj.sum = sum; 
    obj.mean = mean;
    obj.median = median;
    obj.min = min;
    obj.max = max;
    obj.variance = vari;
    obj.standard_deviation = std_dev;
    return obj;
}
//seems to work
//console.log(getStatistics([1,2,3,4]));
//console.log(getStatistics([1]));
//console.log(getStatistics([1,5,6,8,3,4,9,100,56,37,5,67,12,43]));
//console.log(getStatistics(1,3,12,15,41,54,54));

