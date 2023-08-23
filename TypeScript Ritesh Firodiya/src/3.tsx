let arr1: number[] = [1, 2, 3]; //Array literals
arr1.push(4);
// arr1.push("hello");

let arr2: Array<number> = [1, 2, 3]; //Array constructor
arr2.push(4);
// arr2.push("hello");

let arr3: Array<number | string> = [1, 2, 3]; //Array constructor
arr3.push(4);
arr3.push("hello");

let arr4: readonly string[] = ["a", "b", "c"];
arr1.push(4);
// arr1.push("hello");

// readonly works in Arrays & Tuples
