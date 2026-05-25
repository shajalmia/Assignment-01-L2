//Problem-01:
const filterEvenNumbers = (arr: number[]) => {
  return arr.filter((ele) => ele % 2 == 0);
};

//Problem-02:

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

//Problem-03:

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
};

//Problem-04:

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

//Problem-05:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const isRead: boolean = true;

const toggleReadStatus = (input: Book) => {
  const output = { ...input, isRead };
  return output;
};

//Problem-06:

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `"Name:${this.name} ,Age:${this.age}, Grade:${this.grade}"`;
  }
}

//Problem-07:

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [3, 4, 5, 6, 7];

const getInterSection = (input1: number[], input2: number[]) => {
  return input1.filter((ele) => input2.includes(ele));
};
