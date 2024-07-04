interface Guitarist {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
}

const logMsg = (message: any): void => {
  console.log(message);
};

let TimHenson = {
  name: "Tim",
  active: true,
  albums: [],
};

TimHenson.active = false;

// console.log(TimHenson.active);

const greetGuitarist = (guitarist: Guitarist): string => {
  return `Hello ${guitarist.name?.toLocaleUpperCase()}`;
};

enum Grade {
  U = 5,
  D,
  C,
  B,
  A,
}

// type aliases

type stringOrNumber = string | number;
type stringOrNumberArray = stringOrNumber[];

// interface Pianist {
//   // or type pianist
//   name: string;
//   album: stringOrNumberArray;
//   active: boolean;
// }

//interface has to be an object for a class. if the type is an object only then can we use interface

let myName: "dave";
// myName ="john" - literal assingnment cannot be reassigned

let myothername: "dave" | "Peter" | "Joseph";

myothername = "Joseph";

function add(a: number, b: number): number {
  return a + b;
}

const greetPerson = (guitarist: Guitarist): void => {
  console.log("Hello");
  console.log(guitarist);
};

// greetPerson(TimHenson);

// type mathFunction = (a: number, b: number) => number;

interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = (a, b) => {
  return a * b;
};

// console.log(multiply(2, 3));

//optional parameters

const addAll = (a: number = 5, b: number, c: number | undefined): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// console.log(addAll(5,3,2));

//Rest Parameters

const total = (...nums: number[]): number => {
  return nums.reduce((prev, current) => prev + current);
};

// console.log(total(3,4,5,6,7,8,9))

//never type - without explicitly defining the return type, typescript implicitly defines never

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// never types could indicate an endless loop
const Infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // removing this line makes it a never type
  }
};

//use of the never type

const isNumberOrString = (value: stringOrNumber): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This is not possible at all");
};

// type casting and type asstertions

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): stringOrNumber => {
  if (c === "concat") return "" + a + b;
  return a + b;
};

let myval: string = addOrConcat(2, 4, "concat") as string; // without the type assertion, typescript identifies an error

// use case

const img = document.querySelector("img");
const img2 = document.querySelector("img")!; // ! is a non null assertions

const img3 = document.getElementById("img") as HTMLImageElement;
const img4 = <HTMLImageElement>document.getElementById("img");

//classes

class Coder {
  secondLang!: string; // does not have to be immediately initialized

  constructor(
    public readonly name: string,
    private age: number,
    public music: string,
    protected lang: string = "typescript"
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.music = music;
  }

  public getAge(): string {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", 24, "Rap");

// console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    lang: string
  ) {
    super(name, age, music, lang);
    this.computer = computer;
  }

  public getCodersAge(): void {
    // console.log(this.age)// cannot access age outside class coder
  }

  public getlang(): void {
    console.log(`I use ${this.lang}`);
  }
}

const John = new WebDev("Mac", "John", "Rock", 24, "Typescript");

// logMsg(John.getlang())

interface Musician {
  name: string;
  instrument: string;
  play: (action: string) => string;
}

class Pianist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  public play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Joh = new Pianist("John", "Piano");

// logMsg(Joh.play('hammers'))

/////////////////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount = (): void => {
    console.log(Peeps.count);
  };
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Joseph = new Peeps("Joseph");
const Joseph2 = new Peeps("Joseph");
const Joseph3 = new Peeps("Joseph");
const Joseph4 = new Peeps("Joseph");
// logMsg(Joseph4.id)

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(datas: string[]) {
    this.dataState = datas;
  }
}

const favbands = <string[]>["Page", "Something", "Something else"];

const MyBands = new Bands();

MyBands.data = [...MyBands.data, ...favbands];

// logMsg(MyBands.data);
MyBands.data = [...MyBands.data, ...favbands];
// logMsg(MyBands.data);

///////////////////////////////////////////////////////////////////////////////

////////////////INDEX SIGNATURE////////////////////////////////////////////////

interface Transactions {
  Pizza: number;
  Books: number;
  Job: number;
}
const todaysTransactions = <Transactions>{
  Pizza: -300,
  Books: 300,
  Job: 200,
};

// logMsg(todaysTransactions['Pizza'])

for (const key in todaysTransactions) {
  if (Object.prototype.hasOwnProperty.call(todaysTransactions, key)) {
    const element = todaysTransactions[key as keyof Transactions]; // [key as keyof typeof todaysTransactions]
    // console.log(element);
  }
}

interface TransactionObj {
  [index: string]: number; // can also add predefined keys  e.g Tea as here
  Tea: number;
}

const todaysTransaction = <TransactionObj>{
  Pizza: -300,
  Books: 300,
  Job: 200,
  Coffee: 104,
  Tea: 233,
};

const getTodaysDeal = (): void => {
  let total = 0;
  for (let key in todaysTransaction) {
    logMsg(todaysTransaction[key]);
    total += todaysTransaction[key];
  }
  // logMsg(total);
};

// getTodaysDeal()

interface Student {
  name: string;
  GPA: stringOrNumber;
  classes?: number[];
  [key: string]: string | number | number[] | undefined; // you have to define all the types that are inthe mandatory keys
}

/////////////////////////////////////////////////////////////////////////////

//GENERICS

/////////////////////////////////////////////////////////////////////////////

const isObj = <T>(args: T): boolean => {
  return (
    typeof args === "object" && typeof args !== null && !Array.isArray(args)
  );
};

// console.log(isObj({}));
// console.log(isObj({id:1}));
// console.log(isObj([]));
// console.log(isObj("true"));
// console.log(isObj(123));

const isTrue = <T>(args: T): { args: T; is: boolean } => {
  return {
    args,
    is:
      Array.isArray(args) && !!args.length
        ? true
        : typeof args === "object" &&
          typeof args !== null &&
          Object.keys(args as keyof T).length
        ? true
        : false,
  };
};

// logMsg(isTrue(""));
// logMsg(isTrue("Peter"));
// logMsg(isTrue({ name: "John" }));
// logMsg(isTrue([]));
// logMsg(isTrue([1, 2, 3, 4]));

interface hasId {
  id: number;
}

const getProperty = <T extends hasId, K extends keyof T>(
  value: T[],
  key: K
): T[K][] => {
  return value.map((val) => val[key]);
};

const dbusers = [
  {
    id: 1,
    name: "John",
    username: "john",
    email: "john@email.com",
  },
  {
    id: 1,
    name: "Joseph",
    username: "jose",
    email: "jose@email.com",
  },
];

// logMsg(getProperty(dbusers, "id"))

//////////////////////////////////////////////////////////////////////////////

//////////////////UTUTLITY TYPES////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////

interface Assingnment {
  studentId: number;
  title: string;
  grade: number;
}

const assignGrade = (
  assign: Assingnment,
  val: Partial<Assingnment>
): Assingnment => {
  return { ...assign, ...val };
};

const studentass: Assingnment = {
  studentId: 23,
  title: "Final year",
  grade: 1,
};

// logMsg(assignGrade(studentass, {grade:3}))
/* 
  partial - gets partial props
  Required - gets all props, default(i guess)
  ReadOnly - sets prop to read only and cannot be changed once initialized
  Record - Record<string, string> - key and value are going to be strings, essentially for objects or interfaces

  pick<> picks the specified keys, omit dows the opposite
  exclude and extract
  nonnullable - selects the props that can be null, eg null or undefined
  returntype
  parameters
  awaited - return type of promise
*/

type PianistResult = Pick<Pianist, "instrument" | "name">;

const preview: PianistResult = {
  instrument: "vuvuela",
  name: "John",
};

// logMsg(preview)

type letterGrades = "A" | "B" | "C" | "D" | "U";

type upperGrades = Exclude<letterGrades, "U">;
type lowergrades = Extract<letterGrades, "U">;

const createNewAssign = (title: string, points: number) => {
  return { title, points, x: 12 };
};

type NewAssign = ReturnType<typeof createNewAssign>;
/* what this does is it dynamically defines the type newassign based of of the return type of createnewassign */

// const tsAssign: NewAssign = createNewAssign("Utility", 25);

interface User {
  _id: string;
  name: string;
  email: string;
  [index: string]: stringOrNumber | undefined | string[];
}

const fetchUser = async (): Promise<User[]> => {
  const data = await fetch(
    "http://localhost:3000/user/profile/6631287578876c2cfb69c3be"
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) logMsg(err.message);
    });

  return data;
};

/// noted that you cannot wrap the async function with awaited

type newReturnType = Awaited<ReturnType<typeof fetchUser>>; // try to comment to see if it still works

fetchUser().then((users) => logMsg(users));
