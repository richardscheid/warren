<p align="center">
  <img src="images/logo.png" />
  
  Awesome Warren, projeto para controle de uma conta bancária. 
</p>
<br/>

## Installation

#### Server side:

```
  define your mongo connection and server port (see .env.example)
  then: yarn install && yarn dev
```

| Name            | Description                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| src/models      | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB             |
| src/builders    | Builders define functions that create objects based on interfaces contracts                              |
| src/services    | Services define functions which contains the bank account logic to execute payments, deposit and rescues |
| src/interfaces  | Interfaces defines the syntax that the entities must have                                                |
| src/controllers | Controllers define functions that respond to various requests                                            |
| src/utils       | Utils define support functions that will be used to set up the application                               |
| jest.config.js  | Used to configure Jest running tests written in TypeScript                                               |
| package.json    | File that contains npm dependencies as well as server and test scripts                                   |
| tsconfig.json   | Config settings for compiling server code written in TypeScript                                          |

#### Client side:

```
  yarn install && yarn start
```

| Name           | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| src/assets     | Static assets that will be used client side                            |
| src/components | Components that will be reused on the pages                            |
| src/pages      | Home, Payment, Deposit and Rescue Pages of the solution                |
| src/services   | API configuration to send requestes to the backend                     |
| package.json   | File that contains npm dependencies as well as server and test scripts |
