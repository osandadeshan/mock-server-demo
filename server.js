const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.use('/health', require('express-healthcheck')({
    healthy: function () {
        return { message: 'Mock server is up and running' };
    }
}));

app.get('/tasks', (req, res) => {
    res.json(require('./json_data/tasks.json'));
})

app.listen(port, () => {
    console.log('Mock server started on:', port);
})