interface User {
	id: number;
	name: string;
	email: string;
	age: number; // string
	password: string;
}

// type UserPreview = {
//     name: string;
//     email: string;
//     age: number; // string (also changed from number to string)
// };

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email" | "age">;

const displayUserProfile = (user: UserProfile) => {
	console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({ name: "jack", email: "jack@jack.com", age: 20 });
