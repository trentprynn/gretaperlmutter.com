# gretaperlmutter.com
Repository for Greta Perlmutter's portfolio

## Development
1. clone the repository
2. navigate into it 
5. run `yarn`
    - installs dependencies
6. run `yarn dev`
    - runs application with hot reloading enabled

## Deployment
- On a push to master the website will be deployed automatically by Railway
- The following commands can be used to locally build and run the Dockerfile that will be deployed
    - build image: `docker build . -t gretaperlmutter.com`
    - create container: `docker run -d --name gretaperlmutter.com -p 8080:80 gretaperlmutter.com`
    - stop container: `docker stop gretaperlmutter.com`
    - delete container: `docker rm gretaperlmutter.com`
    - delete image: `docker rmi gretaperlmutter.com`
