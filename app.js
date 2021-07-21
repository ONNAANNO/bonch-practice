const express = require("express");
const authRouter = require("./routes/authRouter")
const bodyParser = require('body-parser')

const app = express();

app.set('view engine','hbs')
app.use("/", authRouter)


app.listen(3000, function(){
    console.log("Server started at 3000");
});



// const express = require("express")
// const app = express();

// app.get("/", function(request, response){
//     console.log("Url: "+ request.url);

//     response.send("<h2>Hello!</h2>")
// });

// app.get('/index',function(request,response){
//     console.log("Url: "+ request.url);
//     response.sendFile(__dirname +"/1page" + "/index.html")
// });

// app.listen(3000);
