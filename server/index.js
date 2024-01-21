const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>HELLLO from the express world!!!</h2>');
});
app.get('/test', (req, res) => {
    res.send('<h2>welcome to the test page</h2>');
});

app.get('/api', (req, res) => {
    res.json({"users" : ['noaaisaiah', 'bob', 'alice', 'tom']})
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
})