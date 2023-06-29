<!-- The Plan -->

- Build A REST API with Express
  - Define the Crud Endpoints
- Use Prisma to model and interact with the DB
- Implement CRUD operations
- Implement Passwordless Authentication

<!-- step 2 -->
## modules <Operations>
- Users  < create, Get one, List(get all), Update, delete>
- tweets < create, Get one, List(get all), delete>

<!-- working with prisma -->
 - npm i --save-dev prisma  < to install >

 <!-- < to set up schema>  -->
- npx prisma init --datasource-provider sqlite

 <!-- (1) to perfom migration (after settng up prisma schema) 
 (1b): it's like a git commit, making changes to the schema structure, will require this to be run again.\
 (1c) example, the username in the schema was made unique, and this was run again on the terminal as 
  npx prisma migrate dev --name 'unique username'  -->
 - npx prisma migrate dev --name 'init' 
<!-- for running and visualizing the DB layer  -->
npx prisma studio

<!-- step 3 -->
<!-- Querying the dataBase and integrating with it -->
npm install @prisma/client
<!-- ...and then create an instance of it and use it as an ORM -->
 - import { PrismaClient } from "@prisma/client";
 - const prisma = new PrismaClient() 
 e.g  prisma.<modelname>.findMany() <!-- to find a full list  -->

