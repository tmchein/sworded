# Sworded

Having trouble managing a set of rules for your password fields? Sworded brings support for developers to implement an easy password field that keeps standard all along the application.

## Assumptions made in this challenge

The only assumptions made in this challenge were in the form the passwordReqs where used, in the code the PasswordField component has got a prop called passwordReqs which is represented as set of objects with properties as description and checker

```ts
type Requirements = {
  numberReq: {
    id: string | number;
    description: string;
    checker: typeof hasNumberChecker;
  };
  specialChars?: {
    id: string | number;
    description: string;
    checker: typeof hasSpecialCharChecker;
  };
  upperCase?: {
    id: string | number;
    description: string;
    checker: typeof hasUpperCaseChecker;
  };
  noConsecutive?: {
    id: string | number;
    description: string;
    checker: typeof hasNoConsecutiveLetterChecker;
  };
};
```

Only one of the requirements is mandatory as the doc states there should be one or more requirements in the component.

## How would I improve stuff all around the project?

I'd made requirement an independent type with only the structure of a requirement and then i'd use the requirements as an array of requirement

```ts
type Requirement = {
    id: string | number;
    description: string;
    checker: () => RegExp;
}

requirement[]
```

This way the user would be able to bring his own filters to the password field.

## Demo

https://sworded.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/tmchein/sworded
```

Go to the project directory

```bash
  cd sworded
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

