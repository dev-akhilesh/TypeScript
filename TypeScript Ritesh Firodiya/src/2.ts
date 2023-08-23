const add = (a: number, b: number): string => {
  return `${a + b}`;
};
add(1, 2); //Okay
// add(1, "hello"); //Not OK
add(1, 3); //Okay

const log = (message: string): void => {
  console.log(message);
};
log("hello");
