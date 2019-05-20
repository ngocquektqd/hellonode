const  express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 7968;
var path = require('path');

app.use(bodyParser.urlencoded({extend:false}));

// app.get('/tam-sinh-ly',function (req,resp) {
//     console.log("Hello Tam Sinh Ly");
// });

// app.get('/doi-song',function (req,resp) {
//     // console.log("Tin tuc doi song");
//     resp.send("Hello Doi Song");
// });

// app.get('/home', function (req,resp) {
//     resp.send("Welcome to NodeJs");
//
// });

app.post('/welcome', function (req,resp) {
    resp.send("Username: " + req.body.name + " Fullname: " + req.body.fullname);

});

app.get('/demo', function (req, resp) {
    // resp.sendFile("Z:\\SEM 2\\helloworld\\demo.html");
    resp.sendFile(path.join(__dirname,"/demo.html"));
})

// app.listen(7968, () => console.log("Hello world"));
app.listen(7968, function(){
   console.log("Hello World");
});