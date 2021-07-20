/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let sum = a+b;
    let phrase = a + ' + ' + b + ' = ' + sum;
    return phrase;
}
//works
/*console.log(sumToString(3, 4));
console.log(sumToString(-1,3));
console.log(sumToString(-3,-2));
console.log(sumToString(0,0));
*/
/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let x = startNumber; 
    let array = [];
    let i = 0;
    if (endNumber < startNumber) {
        return [];
    }
    while (x < endNumber) {
        array[i]=x;
        x++;
        i++;
    }
    array[i] = endNumber;
    return array;
}
//works

//console.log(getIncreasingArray(0,5));
//console.log(getIncreasingArray(1,15));
//console.log(getIncreasingArray(-3,2));
//console.log(getIncreasingArray(45,35));


/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    return {min: Math.min(...numbers), max: Math.max(...numbers)};
}

//console.log(maxAndMin([1,2,3]));
//console.log(maxAndMin([3,3,5,21,3215,335,-151,-45]));

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
//how to get object with all these properties
export function countArray(array) {
    //let elems = [];
    //let counts = [];
    //let index = 0;
    let answer = {};
    
    for (let i = 0; i < array.length; i++){
        if(`${array[i]}` in answer) {
            answer[array[i]]++;
        } else {
            answer[array[i]] = 1;
        }
    }
    //syntax used for jquery; takes ref value of the object and returns it
    /*
    for (let i = 0; i < array.length; i++) {
        let duplicate = false;
        for (let j = 0; j < elems.length; j++) {
            if(typeof(array[i] != 'object')) {
                if (array[i] === elems[j]) {
                    counts[j]++;
                    duplicate = true;
                    break;
                }
            }
            else {
                if (typeof(array[i] === typeof(elems[j]))) {
                    if(shallowEqual(array[i],elems[j])) {
                        counts[j]++;
                        duplicate = true;
                        break;
                        return 0;
                    }
                }
            }
        }
        if (!duplicate) {
            elems[index] = array[i];
            counts[index] = 1;
            index++;
        }
    }
    

    let obj = new Object();
    for(let i= 0; i <elems.length; i++) {
        obj[elems[i]] = counts[i];
    } 
    return obj;
    */
    return answer; 
}
console.log(countArray([{name: 'Simon', age: 20},{name: 'Simon', age: 20},34,43,34,43]));
/*
console.log(countArray([1,2,2,3,3,3]));
console.log(countArray([1,2,3]));
console.log(countArray([1,2,3,3,4,5,6,6,6,5,4,2,2,2,1,1,1]));
console.log(countArray([3,6,3,2,2,3,'some','hello','some',1,2]));
*/
