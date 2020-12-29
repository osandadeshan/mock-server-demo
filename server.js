const express = require('express')
const bodyParser = require('body-parser');
const healthCheck = require('express-healthcheck')
var requireHeader = require('require-header');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const authHeaderName = "Authorization";
const authHeaderValue = "Bearer 5aa8220420419fd5890bb88a1767ed7cb1abc4412024bfff91513a40d6e19823";
const appHeaderName = "App-Name";
const appHeaderValue = "IntelliAPI";

// GET health status
app.use('/health', healthCheck({
    healthy: function () {
        return {
            message: 'Mock server is up and running'
        };
    }
}));

// GET authentication token
app.get('/auth', (req, res) => {
    res.json(require('./json_data/authResponse.json'));
})

// Returning response with 404 when incorrect url is requested 
app.use(function (req, res) {
    res.status(404).send({
        error: {
            errors: [{
                domain: 'global',
                reason: 'notFound',
                message: 'Not Found',
                description: 'Couldn\'t find the requested resource \'' + req.originalUrl + '\''
            }],
            code: 404,
            message: 'Not Found'
        }
    })
});

// Set mandatory headers for the APIs
app.use(requireHeader(authHeaderName));
app.use(requireHeader(appHeaderName));

// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(require('./json_data/tasks.json'));
})

// POST a task
app.post('/tasks', (req, res) => {
    if (req.header(authHeaderName) == authHeaderValue && req.header(appHeaderName) == appHeaderValue) {
        res.status(201).json({
            message: 'Task has created successfully'
        })
    } else {
        res.status(400)
    }
})

// Send error message as the API response
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        message: err.message
    });
});

app.listen(port, () => {
    console.log('Mock server started on:', port);
})