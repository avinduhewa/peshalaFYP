// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authUrl: 'https://x223lb80o8.execute-api.ap-southeast-1.amazonaws.com/dev/magister-auth',
  usersUrl: 'https://kx2drhnmc9.execute-api.ap-southeast-1.amazonaws.com/dev/magister-users',
  classesUrl: 'https://ilh5jw6g6g.execute-api.ap-southeast-1.amazonaws.com/dev/magister-classes',
  projectUrl: 'https://7wk102pmi5.execute-api.ap-southeast-1.amazonaws.com/dev/timeplus-projects',
  taskUrl: ' https://ikgv9sr4el.execute-api.ap-southeast-1.amazonaws.com/dev/timeplus-tasks',
};
