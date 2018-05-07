# TimeplusClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.
project creater `nilesh93.j@gmail.com`

## Development server

DO NOT run `ng serve`
Run `npm start` for a dev server with SASS globbing enabled with gulp.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Styling

SASS Globbing enabled.
Use `src/styles.scss` to global styling and importing scss files
DO NOT touch `src/styles.css`
DO NOT include styles css in `.angular-cli.json` config as when doing production builds, some issues may occur


## Using Docker Compose
 
Run `docker-compose up` to start the container. This will bind to `http://localhost:80/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Environment Variables

Use `src/environments/environment.ts` for dev variables
Use `src/environments/environment.prod.ts` for prod variables

## Deployment

Inside `deployment` folder there are 2 docker files for building the application and serving the application.
This is connected with the `docker-compose.yml` file in the root of the project.

`Dockerfile` available in project root is a one shot deployment image which would work ideally with ci/cd pipelines

You can either use the `Dockerfile` or `docker-compose.yml` according to your deployment needs.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Plugins Enabled

Datepicker - `ngx-bootstrap/datepicker`(https://valor-software.com/ngx-bootstrap/#/)
Jquery Enabled
Bootstrap v4 Enabled
Modals - Implemented internally. Check `src/app/shared/components/modal`
Form Validation - Implemented Internally. Check `src/app/shared/components/form-validator`
