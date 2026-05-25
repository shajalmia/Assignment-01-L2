Title: any vs unknown and concept of type Narrowing:

Introduction:any and unknown types used to represent data when type is not known at compile time.

Body Paragraph: The type any is a type safetyhole it disables TypeScripts protection and throw runtime error.On the other hand unknown keeps program safe by forcing to check the program type.

Example of any:

let data:any;
data=123;
data.toUpperCase(); //It does not throw error in compile time.

Example of unknown:

let value:unknown;
value="Hello";
value.toUpperCase(); //It throw error;

Type Narrowing:Type narrowing is the process to reduce a broad or unknown type after checking some conditions.

Example:

let input:unknown="Hello World";

if(input==="string"){
console.log(input.toUpperCase())
}

Conclusion:any type remove Typescripts type checking.unknown is used to reduce runtime error and type narrow is used to write correct code.
