// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// ES6 modules, different js file can 相互引用， Es5 requireJs commonJS(research)
// named export: can have as many as you want
export const environment = {
  API_URL: 'http://localhost:8080',
  production: false
};

// default export : one file can only one default export
let env;
export default env = {
  API_URL: 'http://localhost:8080',
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
