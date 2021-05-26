const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})