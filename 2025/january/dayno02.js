// Back tracking and recursion
// Puzzles problem will be manage by this topic 
// Use of Factorial , combination and permutation 
// Number of possible way to arrange and select items 
// how to arrange the data and select the item from it 

// Where we can use it 
// 1- Arrange the data
// 2- Make design in different way
// 3- Assign task in different way 
// how many way we can do this problem that's called the factorial
// 5! 120 way to sit in the class

// Combination 
// [1,2,3,4,5,6,7,8,9,10,11,12] 6 way 
// [1, 2, 3, 4, 5, 6]

// Permutation 
// Rearrange data for more efficient way 
// Data encrypt , jpg compression , image processing


// n! / k!(n -k)!
var  combination = function(n,k){
    var results = [];
    var recursion = (start , result)=>{
        if(result.length === k){
            results.push(result.map(value => Number(value)))
        }

        for(var i = start ; i < n+1 ; i++){
            result = result.concat(i)
            recursion(i+1 , result)
            result.pop()
        }

    }
    recursion(1,[])
    return results
    // console.log(results) 
}
const data = combination(12,6)
// [1,2,3]
// [1,2,3,4]
console.log(data);