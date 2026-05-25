Title:Pick and Omit utility types and DRY(Don't Repeat Yourself)

Introduction:In Typescript we use large interfaces in many fields.Some times we need specialized verson of interface such as selecting only a few properties or excluding some.Typescripts utility types pick and omit solve this problem.

Body Paragraph:

Pick:Pick<Type,Keys> creates a new type with only the selected properties of an existing interface.

Examole:
interface User{
id:number;
name:string;
email:string;
role:string;
}

type PickUser=Pick<User,"id"|"name">

Omit:Omit<Type,Keys> Creates a new type with some field removed.

Example:

type omitUser=Omit<User,"id"|"role">

DRY(Don't Repeat Yourself):It states that every piece of code should have single and no repeatation.The Omit and Pick utility type support this principle.

Conclusion:Pick and Omit are used to reduce repeat of code and easy the code and swave time.
