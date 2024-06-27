// Can you explain about Interface and Enum, and where will you be using, please make some examples.

// Enum 常用來定義一組常數，可以用來限制變數的值只能是 Enum 中的其中一個。
enum Profession {
  Student = 'Student',
  Freelancer = 'Freelancer',
  ProductOwner = 'ProductOwner',
  Enginner = 'Enginner',
  SystemAnalyst = 'SystemAnalyst',
}

// Interface 常用來定義一個物件的形狀，可以用來檢查物件是否符合該形狀，也可以透過 extends 擴充物件的形狀。

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface Employee extends Person {
  id: number;
  email: string;
  profession: Profession;
}
