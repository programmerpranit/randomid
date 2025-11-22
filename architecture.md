The site is made up with next js with help of app router and server actions,
the database used here is postgres and prisma for orm. 

Since prisma generates the types from the database schema we use them most of the times.
But still we use zod for validation checking and for types checking.

Almost for every table there will be a zod schema.
lets suppose i want to create a feature the flow will be:
1. Create Table Schema in prisma
2. Create Zod Schema - for create/update form validation.
3. in app/admin/ create a folder with the name of the feature. here we will take /joke
in which we will handle the crud part of jokes in admin panel.
4. The folder will have atleast 3 files.
 - actions.ts -> which includes actions like getAllJokes (paginated), and deleteJokeById
 - page.ts -> a server side entrypoint which will only contain serverside code. such as getting serverside data and authentication. 
 - JokesTable.ts -> This will be a client side component which generally contain the paginated list of jokes.
5. For creating and updating the jokes we will use same page like /admin/joke/[id]. If id is new then the route will work as Create Joke and if id is legit id of a joke then it will work as update joke.
6. We use react-hook-form for forms and zod for schema validation. generally for create and update we use same schema validation.
 in /admin/joke/[id] there will be same folder structure.
 - actions.ts -> createJokeById, updateJokeById, getJokeById
 - page.ts -> authentication and getting initial data
 - JokeForm -> Client component with zod form.

There is a folder of generic component as to avoide repetation we are using custom made form component which avoids most of the extra code. you can check the same thing in other forms.
