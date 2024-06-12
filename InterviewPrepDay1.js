var merge = function(nums1, m, nums2, n) {
    // modified in the nums1 
    p1 = m - 1 
    p2 = n - 1 
    p = m + n - 1 
    while (p1 >= 0 && p2 >= 0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1]
            p1--
        }else{
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
    console.log(nums1)
};
merge([0], 0, [1] ,1)


var removeElement = function(nums, val) {
    k = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k 
};
