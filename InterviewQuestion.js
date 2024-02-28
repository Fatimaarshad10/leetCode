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

// 28/02/2024
// Contain Duplicate
// var containsDuplicate = function (nums) {
//   let pointer = false;
//   nums.sort((a,b)=> a-b)
//   for (let i = 0; i < nums.length; i++) {
//     // for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[i + 1]) {
//         pointer = true;
//         break
//       }
//     // }
//   }
//   console.log(pointer);
// };
// containsDuplicate([1, 2, 3, 1]);
// containsDuplicate([1, 2, 3, 4]);
// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

// var singleNumber = function(nums) {
//     let single = nums[0]
//     for(let i = 1 ; i < nums.length ; i++){
//         single = single ^ nums[i]
//         // console.log(single)
//     }
//     console.log(single)
    // let result = 0;
// return nums.reduce((acc,next)=> acc ^ next)
    // for (let num of nums) {
    //     console.log(num)
    // //   result ^= num;
    // }
  
    // console.log (result);
//   };
// singleNumber([2,2,1])
// singleNumber([4,4,1,2,1,2, 5])
// singleNumber([1])