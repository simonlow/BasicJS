import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: avgMpg(),
    allYearStats: allYearStats(),
    ratioHybrids: ratioHybrids() 
};
export function avgMpg() { 
    let highway_mpg = mpg_data.map(car => car.highway_mpg);
    let sum_mpgs = (acc, cur) => acc + cur;
    let avg_highway = highway_mpg.reduce(sum_mpgs, 0)/highway_mpg.length;
    let city_mpg = mpg_data.map(car => car.city_mpg);
    let avg_city = city_mpg.reduce(sum_mpgs, 0)/city_mpg.length;
    let obj = {'city': avg_city, 'highway': avg_highway};
    return obj; 
}
export function allYearStats() {
    let years = mpg_data.map(car => car.year);
    let obj = getStatistics(years);
    return obj;
}
export function ratioHybrids() {
    let hybrid_cars = mpg_data.filter(car => car.hybrid == true);
    let normal_cars = mpg_data.filter(car => car.hybrid == false);
    return hybrid_cars.length/mpg_data.length;
    /*
    let hybrid_cars = mpg_data.map(car => car.hybrid == true);
    let s = (acc, cur) => acc + cur;
    let num_hybrid = hybrid_cars.reduce(s, 0);
    //console.log(num_hybrid);
    let normal_cars = mpg_data.map(car => car.hybrid == false);
    let num_not_hybrid = normal_cars.reduce(s, 0);
    //console.log(num_not_hybrid);
    return num_hybrid/num_not_hybrid;
    */
}
console.log(allCarStats);


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: makerHybrids, 
    avgMpgByYearAndHybrid: avgMpgByYearAndHybrid
};
export function makerHybrids() { 
    let car_makes = mpg_data.map(car => car.make);
    let hybrids = car_makes.map(make => car.make.hybrid);
    hybrids.sort(function(a,b) {b.hybrid.length - a.hybrid.length });
    return hybrids;
}
export function avgMpgByYearAndHybrid() {
    let years = mpg_data.map(car => car.year);
    let hybrids = years.map(car => car.make.hybrid == true);
    let non_hybrids = years.map(car => car.make.hybrid == false);
    let hybrid_city_all = hybrids.map(car => car.city_mpg);
    let non_hybrid_city_all = non_hybrids.map(car => car.city_mpg);
    let hybrid_highway_all = hybrids.map(car => car.highway_mpg);
    let non_hybrid_highway_all = non_hybrids.map(car => car.highway_mpg);
    let sum_mpgs = (acc, cur) => acc + cur;
    let hybrid_avg_city = (hybrid_city_all.reduce(sum_mpgs, 0))/hybrid_city_all.length;
    let hybrid_avg_highway = (hybrid_highway_all.reduce(sum_mpgs, 0))/hybrid_highway_all.length;
    let non_hybrid_avg_city = (non_hybrid_city_all.reduce(sum_mpgs, 0))/non_hybrid_city_all.length;
    let non_hybrid_avg_highway = (non_hybrid_highway_all.reduce(sum_mpgs, 0))/non_hybrid_highway_all.length;
    let return_value = {hybrid: {'city': hybrid_avg_city, 'highway': hybrid_avg_highway}, 
        notHybrid: {'city': non_hybrid_avg_city, 'highway': non_hybrid_avg_highway}};
    return return_value; 
}
