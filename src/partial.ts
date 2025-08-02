interface User {
	id: number;
	name: string;
	email: string;
	age: number;
	password: string;
}

type UpdateProps = Pick<User, "name" | "email" | "age">;

type UpdatePropsOptional = Partial<UpdateProps>; // Partial makes all the properties optional

function updateUser(updatedProps: UpdatePropsOptional) {
	console.log(updatedProps);
	// hit the database tp update the user
}
updateUser({ name: "jack" }); // only name will be updated, not age or email
