

In the project directory, you can run:

### `npm start`

1. I tried to use TailwindCSS to build all css by myself, which is very time-consumeing, I use MUI later on.
2. Time is limited, I only build OnBoarding page and one part of Explore page, but they are typical, and I use react-router-dom to navigate.

The diffculties I met:
1. the react-router-dom 6.x has changed a lot. I use Switch and useHistory first, which I found has been deprecated. Solve this by looking through the offical document.
2. CORS issue
   I know how to solve in backend and in VueJS frontend project(Vue.config.js), but I haven't solve the issue on production environment for this project.
   I tried jsonp solution but failed.
   Will build my own proxy to solve this issue.
Thank you.

   