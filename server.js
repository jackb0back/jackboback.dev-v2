const app = require('./app');

// Define a port to listen on
const PORT = process.env.PORT || 3005;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
