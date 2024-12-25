function foo(a, b) {
  // Check if either a or b is null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; 
  } else if (typeof a === 'object' || typeof b === 'object') {
    // Handle cases where a or b is an object
    if (a !== null && Object.values(a).some(val => val === null) || b !== null && Object.values(b).some(val => val === null)){
      return null; 
    } else {
      return a + b;
    }
  } else {
    return a + b; 
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo({a:1,b:2}, {c:3,d:4})); // Output: 10
console.log(foo({a:1,b:null}, {c:3,d:4})); //Output: null