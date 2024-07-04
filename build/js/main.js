"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const logMsg = (message) => {
    console.log(message);
};
let TimHenson = {
    name: "Tim",
    active: true,
    albums: [],
};
TimHenson.active = false;
// console.log(TimHenson.active);
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}`;
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 5] = "U";
    Grade[Grade["D"] = 6] = "D";
    Grade[Grade["C"] = 7] = "C";
    Grade[Grade["B"] = 8] = "B";
    Grade[Grade["A"] = 9] = "A";
})(Grade || (Grade = {}));
// interface Pianist {
//   // or type pianist
//   name: string;
//   album: stringOrNumberArray;
//   active: boolean;
// }
//interface has to be an object for a class. if the type is an object only then can we use interface
let myName;
// myName ="john" - literal assingnment cannot be reassigned
let myothername;
myothername = "Joseph";
function add(a, b) {
    return a + b;
}
const greetPerson = (guitarist) => {
    console.log("Hello");
    console.log(guitarist);
};
let multiply = (a, b) => {
    return a * b;
};
// console.log(multiply(2, 3));
//optional parameters
const addAll = (a = 5, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// console.log(addAll(5,3,2));
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
// console.log(total(3,4,5,6,7,8,9))
//never type - without explicitly defining the return type, typescript implicitly defines never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// never types could indicate an endless loop
const Infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // removing this line makes it a never type
    }
};
//use of the never type
const isNumberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This is not possible at all");
};
// type casting and type asstertions
const addOrConcat = (a, b, c) => {
    if (c === "concat")
        return "" + a + b;
    return a + b;
};
let myval = addOrConcat(2, 4, "concat"); // without the type assertion, typescript identifies an error
// use case
const img = document.querySelector("img");
const img2 = document.querySelector("img"); // ! is a non null assertions
const img3 = document.getElementById("img");
const img4 = document.getElementById("img");
//classes
class Coder {
    constructor(name, age, music, lang = "typescript") {
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", 24, "Rap");
// console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, age, music, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getCodersAge() {
        // console.log(this.age)// cannot access age outside class coder
    }
    getlang() {
        console.log(`I use ${this.lang}`);
    }
}
const John = new WebDev("Mac", "John", "Rock", 24, "Typescript");
class Pianist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Joh = new Pianist("John", "Piano");
// logMsg(Joh.play('hammers'))
/////////////////////////////////////////////////////////////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
Peeps.getCount = () => {
    console.log(Peeps.count);
};
const Joseph = new Peeps("Joseph");
const Joseph2 = new Peeps("Joseph");
const Joseph3 = new Peeps("Joseph");
const Joseph4 = new Peeps("Joseph");
// logMsg(Joseph4.id)
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(datas) {
        this.dataState = datas;
    }
}
const favbands = ["Page", "Something", "Something else"];
const MyBands = new Bands();
MyBands.data = [...MyBands.data, ...favbands];
// logMsg(MyBands.data);
MyBands.data = [...MyBands.data, ...favbands];
const todaysTransactions = {
    Pizza: -300,
    Books: 300,
    Job: 200,
};
// logMsg(todaysTransactions['Pizza'])
for (const key in todaysTransactions) {
    if (Object.prototype.hasOwnProperty.call(todaysTransactions, key)) {
        const element = todaysTransactions[key]; // [key as keyof typeof todaysTransactions]
        // console.log(element);
    }
}
const todaysTransaction = {
    Pizza: -300,
    Books: 300,
    Job: 200,
    Coffee: 104,
    Tea: 233,
};
const getTodaysDeal = () => {
    let total = 0;
    for (let key in todaysTransaction) {
        logMsg(todaysTransaction[key]);
        total += todaysTransaction[key];
    }
    // logMsg(total);
};
/////////////////////////////////////////////////////////////////////////////
//GENERICS
/////////////////////////////////////////////////////////////////////////////
const isObj = (args) => {
    return (typeof args === "object" && typeof args !== null && !Array.isArray(args));
};
// console.log(isObj({}));
// console.log(isObj({id:1}));
// console.log(isObj([]));
// console.log(isObj("true"));
// console.log(isObj(123));
const isTrue = (args) => {
    return {
        args,
        is: Array.isArray(args) && !!args.length
            ? true
            : typeof args === "object" &&
                typeof args !== null &&
                Object.keys(args).length
                ? true
                : false,
    };
};
const getProperty = (value, key) => {
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
const assignGrade = (assign, val) => {
    return Object.assign(Object.assign({}, assign), val);
};
const studentass = {
    studentId: 23,
    title: "Final year",
    grade: 1,
};
const preview = {
    instrument: "vuvuela",
    name: "John",
};
const createNewAssign = (title, points) => {
    return { title, points, x: 12 };
};
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("http://localhost:3000/user/profile/6631287578876c2cfb69c3be")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            logMsg(err.message);
    });
    return data;
});
fetchUser().then((users) => logMsg(users));
