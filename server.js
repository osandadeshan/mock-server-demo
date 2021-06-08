const express = require('express')
const bodyParser = require('body-parser');
const healthCheck = require('express-healthcheck')
var requireHeader = require('require-header');
const _ = require('lodash');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const authHeaderName = "Authorization";
const authHeaderValue = "Bearer 5aa8220420419fd5890bb88a1767ed7cb1abc4412024bfff91513a40d6e19823";
const appNameHeaderName = "App-Name";
const appNameHeaderValue = "IntelliAPI";
const organizationHeaderName = "Organization";
const organizationHeaderValue = "MaxSoft";

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

// Set mandatory headers for the APIs
app.use(requireHeader(authHeaderName));
app.use(requireHeader(appNameHeaderName));
app.use(requireHeader(organizationHeaderName));

// GET all tasks
app.get('/tasks', (req, res) => {
    if (req.header(authHeaderName) == authHeaderValue &&
        req.header(appNameHeaderName) == appNameHeaderValue &&
        req.header(organizationHeaderName) == organizationHeaderValue) {
        res.json(require('./json_data/tasks.json'));
    } else {
        res.status(400).send({
            message: "Invalid header(s)"
        });
    }
})

// POST a task
app.post('/tasks', (req, res) => {
    if (req.header(authHeaderName) == authHeaderValue &&
        req.header(appNameHeaderName) == appNameHeaderValue &&
        req.header(organizationHeaderName) == organizationHeaderValue) {
        if (_.isEqual(req.body, require('./json_data/taskRequest.json'))) {
            res.status(201).json({
                message: 'Task has created successfully'
            });
        } else {
            res.status(400).send({
                message: "JSON request body is not accepted"
            });
        }

    } else {
        res.status(400).send({
            message: "Invalid header(s)"
        });
    }
})

// PATCH a task
app.patch('/tasks', (req, res) => {
    if (req.header(authHeaderName) == authHeaderValue &&
        req.header(appNameHeaderName) == appNameHeaderValue &&
        req.header(organizationHeaderName) == organizationHeaderValue) {
        if (_.isEqual(req.body, require('./json_data/taskPatchRequest.json'))) {
            res.status(200).json({
                message: 'Task has updated successfully'
            });
        } else {
            res.status(400).send({
                message: "JSON request body is not accepted"
            });
        }

    } else {
        res.status(400).send({
            message: "Invalid header(s)"
        });
    }
})

// GET photos URLs
app.get('/photos', (req, res) => {
    if (req.header(authHeaderName) == authHeaderValue &&
        req.header(appNameHeaderName) == appNameHeaderValue &&
        req.header(organizationHeaderName) == organizationHeaderValue) {
        res.json(require('./json_data/photos.json'));
    } else {
        res.status(400).send({
            message: "Invalid header(s)"
        });
    }
})

// Send error message as the API response
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        message: err.message
    });
});

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

app.listen(port, () => {
    console.log('Mock server started on:', port);
})