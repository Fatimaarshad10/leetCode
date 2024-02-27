// 27-02-2024
// Interview Questions
// var maxProfit = function (prices) {

//   let profit = 0;
//   let totalProfilt = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let buy = 0;
//     let sell = 0;
//     buy = prices[i];
//     sell = prices[i + 1];
//     profit = sell - buy;
//     // const negative = Math.sign(profit);
//     if (profit > 0) {
//       totalProfilt += profit;
//     } else {
//       totalProfilt += 0;
//     }
//   }
//   console.log(totalProfilt);
// };
// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([1, 2, 3, 4, 5]);
// maxProfit([7, 6, 4, 3, 1]);

// var rotate = function (nums, k) {
//     k = k % nums.length
//     let rotatedPart = nums.splice(nums.length - k);
//     nums.unshift(...rotatedPart);
//     console.log(nums);
// };
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1,-100,3,99] , 2)
// rotate([1,2] , 2)

// var rotate = function(nums, k) {
//     let newArray = []
//     for(let i = nums.length -1  ; i > 0 ; i--){
//         if(k !==0){
//            newArray.push(nums[i])
//             nums.pop(nums[i])
//             k--
//         }
//     }
//     newArray.map((data)=> nums.unshift(data) )
//    return nums


    
// };