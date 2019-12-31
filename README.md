# ionic4-graphql

## Requirements

- Ionic
- Docker
- Prisma

## Building and Running

- Backend build & run

```
$ cd backend
$ docker-compose up -d
$ prisma deploy
```

- Frontend build & run

```
$ cd frontend
$ npm install
$ ionic serve
```

## Preparing sample data

We can execute queries and mutations from Prisma playground

```
http://localhost:4466/

```

This is a very simple mutation for create a user:

```
mutation($name: String!) {
    createUser(data: { name: $name }) {
        name
    }
}
```

NOTE: don't forget to add name as a query variable in the bottom left section

```
{
    "name": "John Doe"
}
```
