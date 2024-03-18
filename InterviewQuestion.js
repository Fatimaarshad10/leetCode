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

// 07/03/2024
// const string = "hello new"
// const second = "world"
// console.log(string.charAt(1))
// console.log(string.concat(second))
// console.log(string.indexOf("new"))
// console.log(string.replace("new" , "secondHellow"))
// console.log(string.slice(0,3))
// console.log(string.split(" "))
// console.log(string.trim())
// First Unique Character in a String
// Input: s = "leetcode"
// Output: 0
// var firstUniqChar = function(s) {
//     for(let i = 0 ; i < s.length ; i++){
//         const char = s.charAt(i)
//         // console.log(char)
//         // console.log(s.indexOf(char,i + 1))
//         if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
//            console.log(i)
//         }
// }
// // return -1

// };

// // firstUniqChar("leetcode")
// firstUniqChar("loveleetcode")

// 08/03/2024

// const value = -23;
// remove the negative sign
// console.log(Math.abs(value))
// // negative sign one
// console.log(Math.sign(value))
// console.log(String(Math.abs(value)))
// console.log(Array.from(value))
// console.log(Array.from(String(Math.abs(value))).reverse())

// const string = "123"
// console.log(Number(String(string)))

// reverse the integer and then make the sign at the top not change the sign

// const string = String(value)
// const array = new Array()
// const sign = Math.sign(string)

// for(let i = 0 ; i < string.length ; i++ ){
//     array.push(string[i])
// }
// const onlyspecific = array.splice(1, array.length).reverse()
// const againString = String(onlyspecific.join(''))
// console.log(againString * sign)
// Input: s = "anagram", t = "nagaram"
// Output: true

// var isAnagram = function (s, t) {
//   if (s.length === t.length) {
//     const array1 = Array.from(s);
//     const array2 = Array.from(t);
//     const check = array1.every((word) => array2.includes(word));
//     console.log(check)
//     const anotherCheck = array2.every((word) => array1.includes(word));
//     console.log(anotherCheck)
//     // if (anotherCheck === false && check === true) {
//     //   console.log(anotherCheck);
//     // }  else if (anotherCheck === true && check === false){
//     //     console.log(check)
//     // }
//     // else {
//     //   console.log(check);
//     // }
//   } else {
//     console.log(false);
//   }
// };
// var isAnagram = function (s, t) {
//     if (s.length === t.length) {
//       const charCount = {};

//       // Increment count for each character in s
//       for (const char of s) {

//         charCount[char] = (charCount[char] || 0) + 1;
//       }

//       // Decrement count for each character in t
//       for (const char of t) {
//         if (!charCount[char]) {
//           console.log(false);
//           return;
//         }
//         charCount[char]--;
//       }

//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   };
// Question no 1
// var isAnagram = function(s, t) {
//     // Sort characters in both strings
//     const sortedS = s.split('').sort().join('');
//     // console.log(sortedS)
//     const sortedT = t.split('').sort().join('');

//     // Check if the sorted strings are equal
//     console.log(sortedS === sortedT);
//   };
// isAnagram("anagram", "nagaram");
// isAnagram("rat", "car");

// isAnagram("aacc", "ccac");

// isAnagram("a", "ab");
// isAnagram("aa", "a");

// Question no 2
// In the string the space , comma and just letter and charater then it
// called the palindrome
// what  is the ascii character
// var isPalindrome = function(s) {
// const firstString = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
// const secondString = firstString.split("").reverse().join('')
// console.log(firstString === secondString)

// };
// isPalindrome( "A man, a plan, a canal: Panama")
// // backward and forward same
// isPalindrome( "race a car")
// isPalindrome( " ")

// Question no 3
// var myAtoi = function (s) {
//   let result = 0;
//   let sign = 1;
//   let isNonWhiteSpace = false;
//   let isNumberphase = false;
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (char === " ") {
//       if (!isNonWhiteSpace) {
//         continue;
//       } else {
//         break;
//       }
//     }
//     isNonWhiteSpace = true;
//     if (char >= "0" && char <= "9") {
//       isNumberphase = true;
//       result = result * 10 + (char - "0");
//       continue;
//     }
//     if (char === "+" && !isNumberphase) {
//       isNumberphase = true;
//       continue;
//     }
//     if (char === "-" && !isNumberphase) {
//       isNumberphase = true;
//       sign *= -1;
//       continue;
//     }
//     break;
//   }
//   result *= sign;
//   console.log(Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1));
// };
// myAtoi("42");

// Question no 4
// var strStr = function(haystack, needle) {
    
//     const first = haystack.indexOf(needle)
// if(first !== -1){
//     return first 
// }else {
//     return -1 
// }
// };
// strStr("sadbutsad", "sad")
// strStr("leetcode", "leeto")

// leetcode", needle = "leeto"

// Question no 5
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//       return '';
//     }
//       strs.sort();
  
//     const firstStr = strs[0];
//     const lastStr = strs[strs.length - 1];
//     console.log(firstStr)
//     // console.log(lastStr)
//     // Find the common prefix between the first and last strings
//     let commonPrefix = '';
//     for (let i = 0; i < firstStr.length; i++) {
//       if (firstStr[i] === lastStr[i]) {
//         commonPrefix += firstStr[i];
//       } else {
//         break;
//       }
//     }
  
//     return commonPrefix;
//   };
  
//   // Example usage:
//   const inputArray = ['flower', 'flow', 'flight'];
//   const result = longestCommonPrefix(inputArray);
//   console.log(result); // Output: 'fl'
  

// 14/03/2024
// fizz buzz 
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// var fizzBuzz = function(n) {
//     let storeData  = []
//     for(let i= 1 ; i <= n ; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             storeData.push("FizzBuzz")
//         }
//         else if (i % 3 == 0 ){
//             storeData.push("Fizz")

//         }
//         else if ( i % 5 === 0){
//             storeData.push("Buzz")
           
//         }else{
//             storeData.push(i.toString())

//         }
        
//     }
//     console.log(storeData)
// };
// fizzBuzz(3)
// fizzBuzz(5)
// fizzBuzz(15)

// // Power of three
// var isPowerOfThree = function(n) {
//     if (n <= 0) {
//         return false;
//     }
//     // if(Math.cbrt(n) === 3){
//     //     console.log(true)
//     // }else{

//     // console.log(false)
//     while(n%3 === 0){
//         n /=3
//     }
//     return n === 1
// };
// isPowerOfThree(-1)

// var romanToInt = function(s) {
//     var romanNumerals = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };
//     let result = 0;
//     for(let i = 0 ; i < s.length ; i++){
//         let current =romanNumerals[s[i]]
//         let next =  romanNumerals[s[i + 1]];
//         if ( current < next) {
       
//             result += next - current;
//             i++;
//         } else {
//             result += current;
//         }
//     }
//     console.log(result)
 

// };
// romanToInt("MCMXCIV")

// 15/03/2024
// var removeNthFromEnd = function(head, n) {
    
// };

// class Node {
//     constructor(value){
//         this.value= value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//     }
//     addNode(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode
//             return 
//         }
//         let current = this.head
//         while(current.next){
//             current = current.next
//         }
//          current.next = newNode
//     }
//     print(){
//         let current = this.head 
//         let arrayStore = []
//         while(current){
//             arrayStore.push(current.value)
//             current = current.next 
//         }
//         console.log(arrayStore.join('->'))
        
//     }
//     remove(value){
//         if (!this.head) {
//             return; 
//         }
//         while (this.head && this.head.value === value) {
//             this.head = this.head.next;
//         }
//         let current = this.head
//         while(current && current.next){
//             if(current.next.value === value){
               
//                 current.next = current.next.next
//             }else{
//                 current = current.next

//             }
//         }
        
//     }
// }
// const createList = new LinkedList()
// createList.addNode(1)
// createList.addNode(2)
// createList.addNode(3)
// createList.remove(1)
// // createList.print()



// console.log(createList)

// function Node (value , next){
//     this.value = (value === undefined ? 0 : value);
//     this.next = (next === undefined ? null : next);
// }
// function createLinkedList (value){
//     let head = new Node(value[0])

//     let current = head 
//     for(let i = 1 ;i < value.length ; i++){
//         let newNode = new Node(value[i])
//         current.next = newNode
//         current = current.next
//     }
//     return head

  
// }
// var reverseList = function(head) {
// let prev = null
//     let current = head 
//     while(current){
//         console.log(current.next)
//         let nextTemp = current.next
//         current.next = prev
//         prev = current
//         current = nextTemp
//         console.log(current)

//     }
//     // console.log(prev)

// };
// function removeNthFromEnd (head , n){
//     let dummy = new Node(0)
//     dummy.next = head
//     let first = dummy
//     let second = dummy

//     for(let i = 0 ; i <=n ; i++){
//         if(first === null){
//             return null
//         }
//         first = first.next
//     }
//     while(first !== null){
//         first = first.next
//         second = second.next
//     }
//     second.next = second.next.next
//     console.log(dummy.next)
//     // console.log('first ', first)
//     // console.log('second' , second)
// }
// const value = [1,2,3,4,5]
// let head = createLinkedList(value)
// // let newHead = removeNthFromEnd(head, 3);
// let reverse = reverseList(head);
// 18/03/2024
class Node {
    constructor(value){
        this.value= value
        this.next = null
    }
}
function createLinkedList (value){
    let head = new Node(value[0])

    let current = head 
    for(let i = 1 ;i < value.length ; i++){
        let newNode = new Node(value[i])
        current.next = newNode
        current = current.next
    }
    return head
}
function mergeLinkedList(first, second) {
    let dummyHead = new Node(-1);
    let current = dummyHead;


    let currentFirst = first;
    let currentSecond = second;

    while (currentFirst !== null && currentSecond !== null) {
        if (currentFirst.value < currentSecond.value) {
            current.next = currentFirst;
            currentFirst = currentFirst.next;
        } else {
            current.next = currentSecond;
            currentSecond = currentSecond.next;
        }
        current = current.next;
    }
// console.log(currentFirst)
    if (currentFirst !== null) {
        current.next = currentFirst;
    } else {
        current.next = currentSecond;
    }

    return dummyHead.next;
}



const firstList = new createLinkedList([1,2,4])
const secondList = new createLinkedList([1,3,4])
const mergeLinked = new mergeLinkedList(firstList,secondList)
// console.log(firstList)
// console.log(secondList)
