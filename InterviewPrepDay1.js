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

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; 
    let count = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[count - 1]) {
            nums[count] = nums[i]; 
            count++; 
        }
    }
    console.log(count)
};
// Example usage:
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
