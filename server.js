const app = require('./src/app');
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});