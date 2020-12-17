require('rootpath')();
const express = require('express');
const app = express();

const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const jwt2 = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const budgetModel = require("./models/chart_schema");
const userModel = require("./models/user_schema");


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3001;
app.use(cors());

const secretKey = 'My super secret key';
const jwtMW = exjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

app.use(jwt2());
app.use('/users', require('./users/users.controller'));
app.use(errorHandler);


let users = [
    {
        id: 1,
        username: 'corey',
        password: '123'
    },
    {
        id: 2,
        username: 'test',
        password: '321'
    }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    for (let user of users) {
        if(username == user.username && password == user.password) {
            let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '7d' });
            res.json({
                success: true,
                err: null,
                token,
                username
            });
            break;
        } else {
            res.status(401).json({
                success: false,
                token: null,
                err: 'Username or password incorrect'
            });
        }
    }
    
});

app.get('/api/dashboard', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'Secret content that only logged in people can see!!!'
    });
});

app.get('/api/prices', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'The price is $3.99'
    });
});

app.all('/api/settings', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'You are in the settings route now.'
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function (err, req, res, next) {
    if(err.name === 'UnauthorizedError') {
        res.status(401).json({
            success: false,
            officialError: err,
            err: 'Username or password is incorrect 2 (server.js message)'
        });
    } else {
        next(err);
    }
});



app.get('/api/budget', (req, res) => {
    //res.sendFile('budget-data2.json', {root: __dirname});

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        budgetModel.find({})
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
        }).catch((connectionError) => {
            console.log(connectionError);
        }).catch((connectionError) => {
            console.log(connectionError);
        })
    })

});

app.post('/api/budget', (req, res) => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        var budgetEntity = {
            title: req.body.title,
            budget: req.body.budget,
            backgroundColor: req.body.backgroundColor
        };

        budgetModel.insertMany(budgetEntity)
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
            console.log("Successfully communicated with database (budget); connection closed");
        }).catch((connectionError) => {
            console.log(connectionError);
        })
    }).catch((connectionError) => {
            console.log(connectionError);
        })
})


app.post('/api/register', (req, res) => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        var registerEntity = {
            username: req.body.username,
            password: req.body.password
        };

        userModel.insertMany(registerEntity)
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
            console.log("Successfully communicated with database (user registration); connection closed");
        }).catch((connectionError) => {
            console.log(connectionError);
        })
    }).catch((connectionError) => {
            console.log(connectionError);
        })
})


app.post('/api/login2', (req, res) => {

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        var loginEntity = {
            username: req.body.username,
            password: req.body.password
        };

        userModel.findOne(loginEntity)
        .then((data) => {
            console.log("found "+data.name);
            res.json(data);
            mongoose.connection.close();
            console.log("Successfully communicated with database (user login); connection closed");
        }).catch((connectionError) => {
            console.log(connectionError);
        })
    }).catch((connectionError) => {
            console.log(connectionError);
        })

    // const { username, password } = req.body;

    // for (let user of users) {
    //     if(username == user.username && password == user.password) {
    //         let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '7d' });
    //         res.json({
    //             success: true,
    //             err: null,
    //             token,
    //             username
    //         });
    //         break;
    //     } else {
    //         res.status(401).json({
    //             success: false,
    //             token: null,
    //             err: 'Username or password incorrect'
    //         });
    //     }
    // }
    
});




app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});
