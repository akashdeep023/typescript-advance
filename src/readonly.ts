const firstName = "jack";
// firstName = "bob"; // Error: Cannot assign to 'firstName' because it is a constant.

const data = {
	firstName: "jack",
	lastName: "ji",
	age: 10,
};
data.firstName = "bob"; // Updated successfully because firstName is not readonly and we updated the value of firstName key of data object
console.log(data); // { firstName: 'bob', lastName: 'ji', age: 10 }

// data = { // Error: Cannot assign to 'data' because it is a constant, because we are trying to update the value of data object
//     firstName: "new jack",
//     lastName: "ji",
//     age: 20,
// }

// In Object and Array we can change the inside values but not the object or array itself

// Sometime we need to create an object that should not be changed after initialization.

// interface Config {
// 	readonly endpoint: string;
// 	readonly apiKey: string;
// }
interface Config {
	endpoint: string;
	apiKey: string;
}

const config: Readonly<Config> = {
	endpoint: "https://api.example.com",
	apiKey: "abcdef123456",
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
