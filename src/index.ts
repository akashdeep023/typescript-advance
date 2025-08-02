// If you understand the following code, you’re good to go!
interface Student {
	name: string;
	age: number;
}
function sumOfAge(student1: Student, student2: Student) {
	return student1.age + student2.age;
}
// Example usage
const result = sumOfAge(
	{
		name: "jack",
		age: 20,
	},
	{
		name: "bob",
		age: 21,
	}
);
console.log(result);
