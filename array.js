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

// // Create a linked list
// const node1 = new ListNode(2)
// const node2 = new ListNode(3)
// const node3 = new ListNode(4)

// node1.next = node2
// node2.next = node3

// // 2 -> 3 -> 4

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

function searchInsert(nums, target){
    let left = 0
    let right = nums.length - 1
    while(left <= right)
    {
        const mid = Math.floor((left + right)/2)
        if(nums[mid] === target){
            return mid
        }else if (nums[mid] < target){
            left = mid + 1
        }
        else {
            right = mid - 1 
        }
    }
    console.log(left)
    
} 
searchInsert([2,3,4] , 1)
