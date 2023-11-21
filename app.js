const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require ('./routes/contact')
//const successRoute = require('./routes/success')


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin', contactRoutes);
//app.use('/success',successRoute)

// Route for displaying the success page
// app.get('/success', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'success.html'));
// });

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
