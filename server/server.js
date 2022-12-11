const express = require('express');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/images' });

const app = express();
const PORT = 3000;

// To run Server : nodemon server.js

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.send("Hello")
})
// To Check Images :folder Uploads/images
app.post('/upload', upload.single('photo'), (req, res) => {
    if (req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT);
});