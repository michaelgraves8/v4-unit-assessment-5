const massive = require('massive')
const session = require('express-session')
require('dotenv').config();
const express = require('express'),
      userCtrl = require('./controllers/user'),
      postCtrl = require('./controllers/posts');
const { Cookie } = require('express-session');


const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectedUnauthorized: false}
})
    .then(dbInstance => {
        app.set("db", dbInstance)
    })
    .catch(err => {
        console.log(err)
    })

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: null}
})
)

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on server ${SERVER_PORT}.`)
})

//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Post Endpoints
app.get('/api/posts', postCtrl.readPosts);
app.post('/api/post', postCtrl.createPost);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost)

app.listen(4000, _ => console.log(`running on ${4000}`));