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

Prisma playground URL:

```
http://localhost:4466/
```

- Frontend build & run

```
$ cd frontend
$ npm install
$ ionic serve
```
