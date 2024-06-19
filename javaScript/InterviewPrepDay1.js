// ==================> Day no 1 <==============
// var merge = function(nums1, m, nums2, n) {
//     // modified in the nums1 
//     p1 = m - 1 
//     p2 = n - 1 
//     p = m + n - 1 
//     while (p1 >= 0 && p2 >= 0){
//         if(nums1[p1] > nums2[p2]){
//             nums1[p] = nums1[p1]
//             p1--
//         }else{
//             nums1[p] = nums2[p2]
//             p2--
//         }
//         p--
//     }
//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p--;
//         p2--;
//     }
//     console.log(nums1)
// };
// merge([0], 0, [1] ,1)


// var removeElement = function(nums, val) {
//     k = 0
//     for(let i = 0 ; i < nums.length ; i++){
//         if(nums[i] !== val){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k 
// };

// ==================> Day no 2 <==============

// var majorityElement = function(nums) {
//     let count = 0 
//     let value ; 
//     if(nums.length === 1){
//        console.log(nums[0])
//     }
//     else{
//         for(let i = 0 ; i < nums.length ; i++){
//             if(nums[count] === nums[i + 1]){
//                 value = nums[count]
//                 count++    
//             }
//         }
//     console.log(value)

//     }
// };

// majorityElement([6,5,5])


// var majorityElement = function(nums) {
//     let count = 0;
//     let candidate = null;

//     // Step 1: Find a candidate for the majority element
//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }

//     // Step 2: Validate if the candidate is indeed the majority element
//     count = 0;
//     for (let num of nums) {
//         if (num === candidate) {
//             count++;
//         }
//     }

//     // Step 3: Output the majority element if it exists
//     if (count > nums.length / 2) {
//     return candidate
//     }
// };


// ==================> Day no 3 <==============

// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0; 
//     let count = 1; 
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[count - 1]) {
//             nums[count] = nums[i]; 
//             count++; 
//         }
//     }
//     console.log(count)
// };
// // Example usage:
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// ==================> Day no 4 <==============
// Medium level
// var removeDuplicates = function(nums) {
//     let count = 1 
//     let occurrences = 1
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             occurrences++;
//         } else {
//             occurrences = 1;
//         }

//         if (occurrences <= 2) {
//             nums[count] = nums[i];
//             count++;
//         }
        
//     }
//     nums.length = count; 
    
//     console.log(nums); 
// };

// removeDuplicates([1,1,1,2,2,3])

// Jump Game 
// ==================> Day no 5 <==============

// var canJump = function(nums) {
//     let maxReachable = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i > maxReachable) {
//             return false;
//         }
//         maxReachable = Math.max(maxReachable, i + nums[i]);
//         if (maxReachable >= nums.length - 1) {
           
//             return true;
//         }
//     }
//     console.log(true);
// };

// canJump([3, 2, 1, 0, 4])

// ==================> Day no 6 <==============
// Another jump count 
// var jump = function(nums) {
//     let count = 0; 
//     let currentEnd = 0; 
//     let farthest = 0; 

//     for (let i = 0; i < nums.length - 1; i++) {
//         farthest = Math.max(farthest, i + nums[i]);

//         if (i == currentEnd) {
//             count++;
//             currentEnd = farthest;

//             if (currentEnd >= nums.length - 1) {
//                 break;
//             }
//         }
//     }

//    console.log(count)
// };


// jump([2,3,1,1,4])

// ==================> Day no 7 <==============


var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0;
    }
    
    let minPrice = prices[0]; 
    let maxProfit = 0; 
    
    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        
        if (currentPrice < minPrice) {
            minPrice= currentPrice;
        }
        
         let Profit = currentPrice - minPrice;
        
        if (Profit > maxProfit) {
            maxProfit = Profit;
        }
        

    }
    
    console.log(maxProfit)
};
maxProfit([7,1,5,3,6,4])