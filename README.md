# API Template

- [1.0 - getting started](#getting-started)
    - [1.0.1 - cloning and setup](#cloning-and-setup)
    - [1.0.2 - development startup](#development-startup)
	- [1.0.4 - api testing](#api-testing)
	- [1.0.5 - starting for production](#starting-for-production)
- [auxiliary](#auxiliary)
- [CHANGELOG](#changelog)

<hr/>

### [getting started](#top)

the following applications are required to run in `production`:
- [Docker](https://docs.docker.com/install/) (recommended: v19.03.2)
- [Docker Compose](https://docs.docker.com/compose/install/) (recommended: v1.24.1)

the following applications are required to run in `development`:
- [GIT](https://git-scm.com/downloads) (recommended: `>= v2.21.0`)
- [Docker](https://docs.docker.com/install/) (recommended: `v19.03.2`)
- [Docker Compose](https://docs.docker.com/compose/install/) (recommended: `v1.24.1`)
- [Node.js](https://nodejs.org/en/download/) (recommended: `v12.18.3`)
- [PM2](https://github.com/Unitech/pm2/releases/) (recommended: `v4.4.0`)

##### [cloning and setup](#top)

```
git clone git@github.com:mi-sec/template-docker-full-stack-app.git
cd template-docker-full-stack-app
git submodule init
git submodule update
```

##### [development startup](#top)

```
./start.dev.sh
```

##### [development startup with ui hot reloading](#top)

```
./start.dev.sh

# wait for the UI to finish building in docker-compose startup then:
cd ui
npm i
npm start
```

##### [api testing](#top)

```
cd api
npm i
npm test
```

##### [starting for production](#top)

```
./start.prod.sh
```

application will be accessible at `http://localhost` by default
api will be accessible at `http://localhost/api/` by default



### [auxiliary](#top)

**API testing**:

For testing API things, import the Postman collection in the `api` folder.
Environment should be set for:

- PROTOCOL: `http`
- HOSTNAME: `localhost`
- PORT: `80`
- PATH: `/api`


### [CHANGELOG](#top)

**v1.0.0**
- initial release
