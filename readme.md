#NodeJS WebAPI Template

This is mostly a set of notes about how to run a clean development environment for a nodejs web api.  

## Features
 - WebAPI using express and body-parser.
 - End-to-end tests using mocha and chai.
 - Automatic transpiling using typescript.
 - Automatic api restarting using nodemon.
 - Automatic file-save test execution using concurrently.

## Environment
Run the following command:
```bash
npm run dev
```

This will: 
 - Start up a typescript watcher for both index.ts and test/main.ts.  When anything changes, it will auto-transpile.
 - Start up a node-monitoring watcher and will auto-restart the index.js nodejs web api when files change (when the transpiler is done).
 - When the nodejs web api is started up, the mocha tests will auto-execute and print the results in the console window.