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

// 29/02/2024
// var intersect = function(nums1, nums2) {
//     let newArray = []
//     for(let i = 0 ; i < nums1.length ; i++){
//         for(let j = 0 ; j < nums2.length ; j++){
//             if(nums1[i] === nums2[j]){
//                 newArray.push(nums1[i])
//                 nums2[j] = undefined;
//                 break
//             }
//         }
//     }
//    console.log(newArray)
// };

// intersect([4,7,9,7,6,7],
//     [5,0,0,6,1,6,2,2,4])
// intersect([4,9,5],[9,4,9,8,4] )
// nums1 = , nums2 =

// function rotateLeft(d, arr) {
//   let newArray = arr.splice(d);
//   const newData = [...newArray, ...arr];
//   console.log(newData);
// }
// rotateLeft(2, [1, 2, 3, 4, 5]);

// 01/03/2024
// stringList=['ab', 'ab', 'abc']
// queries = ['ab', 'abc', 'bc']
// query check how many ab in the string list
// abc is 1 time ab 2 time and bc 0 

// function matchingStrings(stringList, queries) {
//     // Write your code here
//     let count = 0
//     let newArray = []
//     for(let i = 0 ; i < queries.length ; i++ ){
//         for(let j = 0 ; j < stringList.length ; j++){
//             if(queries[i] === stringList[j]){
               
//                 console.log('stringList[j]',stringList[j])
//                 count++
               

//             }
//         }
//         newArray.push(count)
//         count = 0
//     }
//     console.log(newArray)
// }
// matchingStrings(['aba', 'baba', 'aba' , 'xzxb'],  ['aba', 'xzxb', 'ab'])
// matchingStrings(['def', 'de', 'fgh' , 'xzxb'],  ['de', 'lmn', 'fgh'])


// n = 10
// queries = [[1,5,3],[4,8,7], [6,9,1]]
// function arrayManipulation(n, queries) {

//     let newArray = new Array(n).fill(0);
//     // Write your code here
//     for(let i = 0 ; i < queries.length  ; i++){
//             const pick = queries[i]
//             const a = pick[0]
//             const b = pick[1]
//             const k = pick[2]
//            newArray[a-1] +=  k 
//            if (b < newArray.length) {
//             newArray[b] -= k;
//         }
      
//     }
//     let max = 0;
//     let current = 0;
//     for (let j = 0; j < newArray.length; j++) {
//         current += newArray[j];
//         if (current > max) {
//             max = current;
//         }
//     }

//     console.log(max);
// }



// arrayManipulation(10, [[1,5,3],[4,8,7],[6,9,1]])
// arrayManipulation(10, [[1, 2 , 100],[2 ,5 ,100],[3 ,4 ,100]])

// 02/03/2024 hackerrank test
// holiday

// 04/03/2024

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// var isValidSudoku = function(board) {
//     const row = {}
//     const column ={}
//     const box = {}
//      for(let i = 0 ; i < 9 ; i++){
//         for(let j = 0 ; j< 9 ; j++){
//             const value = board[i][j]
//             if(value !== '.'){
//                 const boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)
//                 if(row[`${i}-${value}`] || 
//                 column[`${j}-${value}`] ||
//                 box[`${boxIndex}-${value}`] ){
//                     return false
//                 }
          

//                 row[`${i}-${value}`] = true
//                 column[`${j}-${value}`] = true
//                 box[`${boxIndex}-${value}`] = true
//             }
//         }
//     }
//     return true
// };
// isValidSudoku([["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]])


// 05/03/2024
// var rotate = function(matrix) {
//     let array = []
//     for(let i = 0; i < matrix.length ; i++){
//         for(let j = i+1 ; j < matrix.length ; j++){
//             let temp = matrix[i][j]
//             matrix[i][j] = matrix[j][i]
//             matrix[j][i] =  temp
            
//         }
//     }
//     for(let i = 0 ; i < matrix.length ; i++){
//         matrix[i].reverse()
//     }
//     console.log(matrix)
// };
// // 
// // Output: [[7,4,1],[8,5,2],[9,6,3]]

// rotate([[1,2,3],[4,5,6],[7,8,9]])


// var reverseString = function(s) {
  
//     console.log(s.reverse())
// };

// // Output: ["o","l","l","e","h"]
// reverseString(["h","e","l","l","o"])

// function reverse(n) {  
//     const data = Number(Array.from(String(Math.abs(n))).reverse().join('')) * Math.sign(n);
//     // Check if reversed falls within the 32-bit signed integer range
//    if (data < Math.pow(-2, 31) || data > Math.pow(2, 31) - 1) {
//       return 0
//    } else {
//         return data 
//    }
  
//  }
// -2 power 31 <= x <= 2 power 31 - 1