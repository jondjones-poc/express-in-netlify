# Express In Netlify - By Jon D Jones 💥

This is a base project that spins up a simple Express.js server that can be used within Netlify  using serverless-http.  This project has two routes:

```bash
/  
/alternative
```

The routing works in netlify using the index.html and alternative.jt,l files found in the route.  This could be swapped for a better Javascript solution.

## 👾 How To Use ☄️

To debug locally use:

```bash
npm run start-api
```

This will allow you to debug on port 3000.  You can also debug the express server directly, using nodemon.

```bash
npm run start 
```

## 👻 Live Site URL & Status 👺

[https://express-in-netlify.netlify.app/](https://express-in-netlify.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/06440163-f575-4937-be4d-82c88abeb12a/deploy-status)](https://app.netlify.com/sites/express-in-netlify/deploys)

