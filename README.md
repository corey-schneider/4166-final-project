# Corey Schneider - Personal Budget application

### This application was created using [React](https://reactjs.org/), [Node.js](https://nodejs.org/en/), and [MongoDB](https://www.mongodb.com/)

## Personal Budget layout -- what doesn't work is *italicized*
- Single Page Application (Main/Main.js)
    - Navigation
    - Home page
        - Has information, welcomes the user
    - Dashboard page
        - Pulls data from MongoDB (React -> Nodejs server -> MongoDB)
        - Add item to budget
        - chartjs pie chart and bar chart
        - JsonTable table
        - *Remove item from budget*
        - *Edit budget*
    - Users
        - All users are stored in a MongoDB database
            - Registration and log in both utilize the database
        - User schema includes:
            - first name
            - last name
            - user name
            - created date
            - password hash -- None of the passwords are stored in clear text
        - Log in page (React -> Nodejs server -> MongoDB)
            - Log in POST using axios
            - jwt token saved in browser
            - Reject if username or password do not match database
        - Registration page (React -> Nodejs server -> MongoDB)
            - Registration POST using axios
            - Reject if username is taken

## Server location:
- React (frontend): http://104.236.19.163/ or http://cschne11.tk/
- Node server (API): http://104.236.19.163:3001/

##### Thank you to the resources who've helped me during development:
- [General understanding of React](https://www.youtube.com/watch?v=fnpmR6Q5lEc&ab_channel=Simplilearn)
- [Creating React SPA](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm)
- [401/any error handling](https://stackoverflow.com/a/47216863)
- [MongoDB connection using Node](https://www.youtube.com/watch?v=Qn0SOL8vK8w&ab_channel=SaturdayDeveloper)
    - (also a huge thank you to our TA, Ayman Ali)
- [Read data from JSON file](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app)
- [react-json-to-table](https://www.npmjs.com/package/react-json-to-table)
- [Node.js and MongoDB authentication / registration / login](https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management)
- Thank you to our TA Akshay Popli for meeting with me and answering my questions
- [More advanced users](https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management)


## TO DO:
- ~~remove Button component~~
- ~~change localhost:3001 to IP when live app is deployed~~
- ~~remove /backend-api folder - unused~~
- ~~homepage~~
- log in / out
- ~~sign up (registration)~~
- configure budgets
    - ~~add~~
    - remove
    - edit
    - monthly
- token expire after 60s <-- extra credit
- make sure all text boxes are filled in on dashboard before POST to mongo
- ~~remove Secret~~
- ~~remove Configure budgets~~
- remove 2nd login option
- fix "logged in status"
- fix Dashboard page
    - remove all function
    - ~~color picker (implement)~~
- DigitalOcean
    - ~~nginx for react~~
    - ~~pm2 for node server~~
- Users
    - ~~Log in~~
        - ~~Save token~~
        - ~~Request from Node -> MongoDB~~
        - ~~Check if account exists~~
    - Log out
        - Remove token
    - ~~Register~~
        - ~~Send to MongoDB~~
        - ~~Check if username is taken~~
            - ~~Reject if taken~~
- gitignore
    - ~~Remove MongoDB password from these locations:~~ DONE, what you see is an old invalid password.
        - ~~/backend (nodejs)/config/keys.js~~
        - ~~/backend (nodejs)/config.json~~


## Additional helpful articles that were not used in this application:
- https://faizanv.medium.com/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0
- https://github.com/faizanv/react-auth-example
- https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management (1 with CRUD)
- https://jasonwatmore.com/post/2020/06/17/nodejs-mongodb-api-jwt-authentication-with-refresh-tokens (and 2 without CRUD)
- https://www.youtube.com/watch?v=EbUNgXQIqrk&ab_channel=edutechional
- https://www.youtube.com/watch?v=QoLUB0QkUaE&ab_channel=edutechional
- https://www.youtube.com/watch?v=PV9FqNEI-go&ab_channel=edutechional
    - His application is here: https://github.com/jordanhudgens/react-auth-app
- https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/ good token information
- https://www.youtube.com/watch?v=My3c4IQHq_Y&ab_channel=RizwanKhan deploy react, node, or express.js application to production | digital ocean
- https://stackoverflow.com/questions/54730396/react-axios-401-unauthorized/54730601
- https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-create-react-app
