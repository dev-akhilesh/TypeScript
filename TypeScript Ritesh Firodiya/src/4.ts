let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Ritesh",
};

// user = {lastName:"Firodiya"};
// user.name="Firodiya";    //Okay
// Object
// Object Literal
// Object

let questions: Record<string, boolean> = {
  isMarried: false,
  isEployeed: true,
  isIndia: true,
  //   name:Omkar,|Error
};
questions.isHuman = true;
// questions.name "Akhilesh";  Error
