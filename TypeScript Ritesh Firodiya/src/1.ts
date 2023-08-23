let a: string = "hello";
a = "Bye!"; //Okay
// a = 2 ; //Error

let b: number = 1;
b = 321; //Okay
// b = "hi"; //Error

let c: boolean = true;
c = false; //Okay
// c = "hello"; //Error

// Union type
let d: undefined | string;
d = "hello"; //Okay
// d=null  //Error
d = "hello"; //Okay

// any --> solution for everything
let e: any = "hello";
e = true;
e = 2;
e = null;
e = undefined;
e();


// CUSTOM TYPE:-

// string literals with union
let f: "foo" | "bar" = "foo";
f = "bar"; //Okay
// f = "Bar";  // Error
