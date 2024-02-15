// ========= ARRAY =========
// ========= QUESTION NO 1 ==========
// var twoSum = function(nums, target) {
//     var indexOfArray = []
//     for(let i = 0 ; i <=nums.length ; i++){
//         for (let j = i + 1; j <= nums.length; j++) {
//             const sum = nums[i] + nums[j]
//             if( sum === target){
//                 indexOfArray.push(i,j)
//             }
//         }
//     }
//     console.log(indexOfArray)
// };
// twoSum([2,7,11,15] , 9);
// twoSum([3,2,4] , 6);
// twoSum([3,3] , 6);
// twoSum([3,2,3] ,6)
// twoSum([0,4,3,0] ,0)

// ========= QUESTION NO 2 ==========
// ========= Singly linked list ==========
// function ListNode(val,next){
//     this.val = (val === undefined ? 0 :val)
//     this.next = (next === undefined ? 0 :next)
// }

// Create a linked list
// const node1 = new ListNode(2)
// const node2 = new ListNode(3)
// const node3 = new ListNode(4)

// node1.next = node2
// node2.next = node3

// 2 -> 3 -> 4

// function printTheListOfNode(head){
//     let current =  head
//     while(current != null){
//         console.log(current.val)
//         current = current.next
//     }
// }

// printTheListOfNode(node1)

// var addTwoNumbers = function(l1, l2) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     let carry = 0;

//     while (l1 !== null || l2 !== null || carry !== 0) {
//         let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
//         carry = Math.floor(sum / 10);

//         current.next = new ListNode(sum % 10);
//         current = current.next;

//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return dummy.next;
// };

// var removeDuplicates = function(nums) {
//     let k = 1;
//     const arr = []
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     arr.push(k)
//    console.log(arr)
// };

// removeDuplicates([1,1,2])

// var removeElement = function(nums, val) {
//     const arr = []
//    for(i = 0; i < nums.length ; i++){
//     if(nums[i] !== val){
//         arr.push(nums[i])
//     }
//    }
//    console.log(arr.length)
// };

// removeElement([3,2,2,3,3,4 ] , 3)

// var searchInsert = function (nums, target) {
//   var searchIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       searchIndex = nums.indexOf(nums[i]);
//     } else if (nums[i] > target) {
//       nums.splice(i, 0, target);
//       if (nums[i] === target) {
//         searchIndex = nums.indexOf(nums[i]);
//       }
//       break;
//     } else {
//       nums.push(target);
//     }
//   }
//   return searchIndex;
// };

// searchInsert([1, 3, 5, 6], 7);

// With the binary search
// left side less
// right side is higher
// middle and move to another target value

// function searchInsert(nums, target){
//     let left = 0
//     let right = nums.length - 1
//     while(left <= right)
//     {
//         const mid = Math.floor((left + right)/2)
//         if(nums[mid] === target){
//             return mid
//         }else if (nums[mid] < target){
//             left = mid + 1
//         }
//         else {
//             right = mid - 1
//         }
//     }
//     console.log(left)

// }
// searchInsert([2,3,4] , 1)

//  December 27 ===> Question no 1 ==> Easy Array
// var plusOne = function(digits) {
//     let array = []
//     for(let i = 0 ; i < digits.length ; i++){
//         if(i === digits.length - 1){
//             const value = digits[i] + 1
//             value.toString().split('').map((data)=>array.push(parseInt(data)))
//         }else{
//             array.push(digits[i])
//         }
//     }
//     console.log(array)
// };

// plusOne([9,9])

// var plusOne = function(digits) {
//     let carry = 1;
//     for (let i = 0; i < digits.length; i++) {
//         const sum = digits[i] + carry;
//         digits[i] = sum % 10;
//         carry = Math.floor(sum / 10);
//         if (carry === 0) {
//             break;
//         }
//     }

//     if (carry > 0) {
//         digits.unshift(carry);
//     }

//     return digits;
// };

// // Example usage
// const result = plusOne([9, 9]);
// console.log(result);

// Question no 2 ===> Merge array
// var merge = function(nums1, m, nums2, n) {
//     nums1.length = m

//     for(let i = 0 ; i < m+n ; i++){
//         if(nums2[i] !== undefined){
//             nums1.push(nums2[i])

//         }
//         m = m+n
//         n = 0
//     }
//    console.log(nums1.sort((a,b)=> a-b))
// };

// merge([-10,-4,-3  ,1,2,3,0,0] , 6 , [-3,2,5,6] , 3)

// ========= Binary Search Tree  ==========
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//      }

//      var sortedArrayToBST = function(nums) {
//         if (nums.length === 0) {
//             return null;
//         }

//         return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
//     };

//     function sortedArrayToBSTHelper(nums, start, end) {
//         if (start > end) {
//             return null;
//         }

//         const mid = Math.floor((start + end) / 2);
//         const val = nums[mid];
//         const node = new TreeNode(val);

//         node.left = sortedArrayToBSTHelper(nums, start, mid - 1);
//         node.right = sortedArrayToBSTHelper(nums, mid + 1, end);

//         return node;
//     }

//     // Example usage:
//     const root = sortedArrayToBST([-10, -3, 0, 5, 9]);
//     console.log(root);

// var generate = function(numRows) {
//     const data = []
//     for (let i = 0; i < numRows; i++) {
//         const row = [];

//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || j === i) {
//                 row.push(1);
//             } else {
//                 // Calculate the value based on the previous row
//                 console.log(data[2-1][2-1] + data[2-1][2])
//                 row.push(data[i - 1][j - 1] + data[i - 1][j]);
//             }

//         }

//         data.push(row);
//         // console.log(row.join(' '));
//     }

//     // console.log(data);
// };

// generate(5)

// Merge sorted array O(m+n)
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   nums1.length = m;
//   for (let i = 0; i <= m; i++) {
//     for (let k = 0; k < n; k++) {
//       if (nums2[k] !== undefined) {
//         nums1.push(nums2[k]);
//       }
//     }
//     m = m + n;
//     n = 0;
//   }
//   console.log(nums1.sort((a, b) => a - b));
// };

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0);
// merge([0], 0, [1], 1);


// 15/02/2024
// Deleting From the End of an Array
// const newArray = new Array(10)
// let value = 0
// for (let i = 0; i < 6; i++) {
//     newArray[value] = i
//     value++
// }
// value--
// for (let i = 0; i < value; i++) {
//     console.log("Index " +i +" contains " +newArray[i])
    
// }

// // Deleting From the Start of an Array
// for (let i = 0; i < value; i++) {
//    newArray[i-1] = newArray[i]
    
// }
// value--;
// for (let i = 0; i < value; i++) {
//     console.log("Index " +i +" contains " +newArray[i])
// }

// // Deleting From Anywhere in the Array

// for (let i = 2; i < value; i++) {
//     newArray[i-1] = newArray[i]
// }
// value--
// for (let i = 0; i < value; i++) {
//     console.log("Index " +i +" contains " +newArray[i])
// }

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
//  */
// var removeElement = function(nums, val) {
//     var k = 0
//    for(i = 0; i < nums.length ; i++){
//     if(nums[i] !== val){
//         nums[k] = nums[i];
//         k++;
//     }
//    }
//    console.log(nums)  
// };
// removeElement([2,3,4] ,  3)
// removeElement([0,1,2,2,3,0,4,2] ,  2)


// const removeDuplicate = function (nums){
//     let k = 0
//     for(let i = 0 ; i < nums.length ; i++){
//         if(nums[i] !== nums[i+1]){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     console.log(k)

// }
// removeDuplicate([1,1,2])