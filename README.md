# TypeScript Advance

## Pre-requisites

-   Before you go through this module, make sure you’ve gone through basic typescript classes.
-   You understand `interfaces` , `types` and how typescript is used in a simple Node.js application
-   If you understand the following code, you’re good to go!

    ```ts
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
    ```

### Recap setup procedure

-   To recap, if you want to start a Typescript project locally, please do the following
-   Initialize TS

    ```bash
    npx tsc --init
    ```

-   Change tsconfig as per your needs. Usually changing rootDir and outDir is a good idea

    ```json
    {
    	"rootDir": "./src",
    	"outDir": "./dist"
    }
    ```

## Pick

-   `Pick` allows you to create a new type by selecting a set of properties (`Keys`) from an existing type (`Type`).
-   Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.

    ```ts
    interface User {
    	id: number;
    	name: string;
    	email: string;
    	age: string;
    	password: string;
    }

    // For a profile display, only pick `name` and `email`
    type UserProfile = Pick<User, "name" | "email" | "age">;

    const displayUserProfile = (user: UserProfile) => {
    	console.log(`Name: ${user.name}, Email: ${user.email}`);
    };
    ```

## Partial

-   `Partial` makes all properties of a type `optional`, creating a type with the same properties, but each marked as optional.

    ```
    interface User {    |   interface User {
        name: string    |       name?: string
        email: string   |       email?: string
        age: number     |       age?: number
    }                   |   }
    ```

-   Specifically useful when you want to do `updates`

    ```ts
    interface User {
    	id: number;
    	name: string;
    	email: string;
    	age: number;
    	password: string;
    }

    type UpdateProps = Pick<User, "name" | "email" | "age">;
    type UpdatePropsOptional = Partial<UpdateProps>;

    function updateUser(updatedProps: UpdatePropsOptional) {
    	// hit the database tp update the user
    }
    updateUser({});
    ```

## Readonly

-   When you have a configuration object that should not be altered after initialization, making it `Readonly` ensures its properties cannot be changed.

    ```ts
    // interface Config {
    //	readonly endpoint: string;
    //	readonly apiKey: string;
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
    ```

    > This is compile time checking, not runtime (unlike const)
