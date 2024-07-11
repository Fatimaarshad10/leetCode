// // Day no 2 
// // Problem no 1 

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

// var hasPathSum = function (root, targetSum) {
//   const data = new TreeNode()
//   data.val = root.length
//   while (data.length != 0) {
//     data.right = root[0]
//     data.left = root[1]
//   }


//   console.log(data)

// };

// hasPathSum([1, 2, 3], 5)

// // Day no 3

// var titleToNumber = function(columnTitle) {
//   const dict = {
//       A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
//       O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
//   }
//   let number = 0;

//   for (let i = 0; i < columnTitle.length; i++) {
//       number = number*26 + dict[columnTitle[i]];
//   }
//   return number;
// };

// Day no 3 Thurday 
// Question no 1 
var TimeLimitedCache = function() {
  this.data = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const now = Date.now();
  const expire = now + duration;
  if (this.data.has(key) && this.data.get(key).expire > now) {
    // Key already exists and is not expired
    this.data.set(key, { value, expire });
    return true;
  } else {
    // Key does not exist or has expired
    this.data.set(key, { value, expire });

    // Schedule expiration
    setTimeout(() => {
      if (this.data.has(key) && this.data.get(key).expire <= now) {
        this.data.delete(key);
      }
    }, duration);

    return false;
  }
};

TimeLimitedCache.prototype.get = function(key) {
  const keyStore = this.data.get(key);
  const now = Date.now();

  if (keyStore && keyStore.expire > now) {
    // Key exists and is not expired
    return keyStore.value;
  } else {
    // Key does not exist or has expired
    return -1;
  }
};


TimeLimitedCache.prototype.count = function() {
  const now = Date.now();
  let count = 0;
  // Count valid entries (not expired)
  for (let [key, value] of this.data.entries()) {
    if (value.expire > now) {
      count++;
    }
  }
  return count;
};

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1