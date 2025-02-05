

// // Пример использования:
// const distances = [10, 20, 30, 40, 50, 60, 70];
// const x = 35;

// function findNearestCityIndex(distances, x) {
//     let left = 0;
//     let right = distances.length - 1;



//     // let minIndex = 0;
//     // let min = distances[minIndex];
//     // for (const distanceIndex in distances) {
//     //     if (distances[distanceIndex] < min) {
//     //         min = distances[distanceIndex];
//     //         minIndex = distanceIndex;
//     //     }
//     // }

//     // console.log('max :>> ', max);

//     // let minDifference = x - min;
//     // console.log('minDifference :>> ', minDifference);
//     // // let minIndex = maxIndex;

//     // while (left <= right) {
//     //     const mid = Math.floor((left + right) / 2);

//     //     console.log('distances[mid] :>> ', distances[mid]);
//     //     console.log('x :>> ', x);


//     //     if (distances[mid] === x) return mid;
//     //     if (distances[mid] < x) {
//     //         if ((x - distances[mid]) <= minDifference) {
//     //             minIndex = mid;
//     //             minDifference = x - distances[mid];
//     //         }
//     //         console.log('minDifference :>> ', minDifference);
//     //         left = mid + 1;
//     //     }
//     //     else if (distances[mid] > x) right = mid - 1;
//     // }

//     // console.log('minDifference :>> ', minDifference);
//     // console.log('minIndex :>> ', minIndex);

//     // let minDifference = -1;

//     // while (left <= right) {
//     //     let mid = Math.floor((left + right) / 2);

//     //     if(distances[mid] < x) {
//     //         left = mid + 1;
//     //         minDifference = distances[mid];
//     //     }
//     //     else right = mid - 1;
//     // }

//     // console.log('minDifference :>> ', minDifference);

//     let resultIndex = 0;
//     let result = distances[resultIndex];

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if(distances[mid] === x) return distances[mid];

//         let midDifference = Math.abs(distances[mid] - x);
//         let minDifference = Math.abs(result - x);

//         if(
//             midDifference < minDifference ||
//             (midDifference === minDifference && distances[mid] < result)
//         ) {
//             result = distances[mid];
//             resultIndex = mid;
//         }

//         if(distances[mid] < x) left = mid + 1;
//         else right = mid - 1;
//     }

//     console.log('result :>> ', result);
//     return resultIndex;
// }

// // console.log('index :>> ', findNearestCityIndex(distances, x));



// function findNearestCityIndexLoop(distances, x) {
//     let resultIndex = 0;
//     let result = distances[resultIndex];

//     let minDifference = Math.abs(result - x);

//     for(let i = 1; i < distances.length; i++) {
//         let difference = Math.abs(distances[i] - x);

//         if(
//             difference < minDifference ||
//             (difference === minDifference && distances[i] < result) 
//         ) {
//             result = distances[i];
//             resultIndex = i;
//             minDifference = difference;
//         }
//     }

//     console.log('result :>> ', result);
//     return resultIndex;
// }

// console.log('index :>> ', findNearestCityIndexLoop(distances, x));



// const ads = [
//     { name: 'ad1', price: 1.8, show: 0 },
//     { name: 'ad2', price: 1.55, show: 0 },
//     { name: 'ad3', price: 1.13, show: 0 },
//     { name: 'ad4', price: 0.48, show: 0 },
// ];

// // function spreadTrafficEvenly(banners) {
// //     let leastShownAd = banners[0];


// //     for(const ad of banners) {        
// //         if(ad.show < leastShownAd.show) {
// //             leastShownAd = ad;
// //         }
// //     }

// //     leastShownAd.show++;
// // }
// function spreadTrafficEvenly(banners) {
//     let randomAd = banners[Math.floor(Math.random() * banners.length)];

//     randomAd.show++;
// }

// for (let i = 0; i < 1000000; i++) {
//     spreadTrafficEvenly(ads);
// }

// console.log(ads)

// // [
// //    { name: 'ad1', price: 1.8, show: 250000 },
// //    { name: 'ad2', price: 1.55, show: 250000 },
// //    { name: 'ad3', price: 1.13, show: 250000 },
// //    { name: 'ad4', price: 0.48, show: 250000 },
// //];



// Чем выше цена тем больше трафика получит баннер

// В данном случае
// 1.8$ = 36% трафика 
// 1.55$ = 31% трафика
// 1.13$ = 23%
// 0.48$ = 10%


const ads = [
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
];

function spreadTrafficByPrice(banners) {

    let weightedAd = banners[0];
    let maxWeight = banners[0].show / banners[0].price;

    for (const ad of banners) {
        let weight = ad.show / ad.price;

        if (weight < maxWeight) {
            maxWeight = weight;
            weightedAd = ad;
        }
    }

    weightedAd.show++;
}

for (let i = 0; i < 1000000; i++) {
    spreadTrafficByPrice(ads);
}

// for(let i = 0; i < 12; i++) {
//     spreadTrafficByPrice(ads);
// }

console.log(ads)