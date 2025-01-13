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
var combination = function (n, k) {
    var results = [];

    var recursion = (start, result) => {
        // 0 === 2  false
        //  1=== 2 
        if (result.length === k) {
            results.push(result.map(value => Number(value)))

        }
        // start = 1  , 2 
        //  4 time loop run 
        // 3  time 
        // result =[1],  [1, 2]

        for (var i = start; i < n + 1; i++) {
            result = result.concat(i)
            recursion(i + 1, result)
            result.pop()

        }

    }
    recursion(1, [])
    return results
    // console.log(results) 
}
const data = combination(4, 2)
// [1,2,3]
// [1,2,3,4] 4/2
console.log(data);

// n!  4       4    = 4*3*2*1 = 24
// k!(n-k)! 2(4-2)   = (2*1)(2*1) = 4


// 6 


function combinationLoop(n, k) {
    let results = [];

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            results.push([i, j]);
        }
    }

    return results;
}

console.log(combinationLoop(4, 2));
// Output: [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]


function combinationLexicographic(n, k) {
    let result = [];
    let combination = Array.from({ length: k }, (_, i) => i + 1); // [1, 2, ..., k]

    while (true) {
        result.push([...combination]);

        let i = k - 1;
        while (i >= 0 && combination[i] === n - k + i + 1) {
            i--;
        }

        if (i < 0) break;

        combination[i]++;

        for (let j = i + 1; j < k; j++) {
            combination[j] = combination[j - 1] + 1;
        }
    }

    return result;
}

console.log(combinationLexicographic(4, 2));
// Output: [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
